import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { otpVerify } from '../../Services/Api';
import Loader from '../../Utilits/Loader';
import Error from '../../Utilits/Error';
import { useAuth } from '../../ContextAPI/AuthProvider';
import { TiDocumentDelete } from 'react-icons/ti';

function Login() {

    const location = useLocation();
    const navigate = useNavigate();
    const { login, loading, error } = useAuth(); // Use the Auth Context
    const [userOtp, setUserOtp] = useState(["", "", "", ""]);
    const [resOtp, setResOtp] = useState(null);
    const [show, setShow] = useState(false);
    const [loginData, setLoginData] = useState({ email: '', password: '' });

    const handleClose = () => {
        setShow(false);
        setUserOtp(["", "", "", ""]); // Reset OTP fields when closing
    };


    // OTP verification function
    const handleOtpVerify = async () => {
        const { redirectTo, bookingDetails } = location.state || {};
        const otpString = userOtp.join(""); // Combine array into a single string

        if (otpString === resOtp) {
            const body = {
                email: loginData.email,
                otp: otpString
            };
            try {
                const response = await otpVerify(body);
                if (response.status === 200) {
                    sessionStorage.setItem('isUserLoggedIn', 'true');
                    sessionStorage.setItem('userObj', JSON.stringify(response.data.data));
                    sessionStorage.setItem('userToken', JSON.stringify(response.data.token));

                    setShow(false);

                    if (redirectTo) {
                        navigate(redirectTo, { state: bookingDetails });
                    } else {
                        document.location.href = 'hotel';
                    }
                }
            } catch (error) {
                console.log(error.message);
                setError(error.response);
            }
        }
    };

    // Handle change for OTP input fields
    const handleOtpChange = (e, index) => {
        const value = e.target.value;
        if (isNaN(value)) return; // Only allow numbers

        let newOtp = [...userOtp];
        newOtp[index] = value;
        setUserOtp(newOtp);

        // Auto-focus to next input
        if (value && index < userOtp.length - 1) {
            document.getElementById(`otp-input-${index + 1}`).focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && userOtp[index] === "" && index > 0) {
            document.getElementById(`otp-input-${index - 1}`).focus();
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await login(loginData);
            console.log("response", response);

            if (response && response.otp) {
                setResOtp(response.otp);
                setShow(true);
            } else {
                console.log("No OTP received");
            }
        } catch (err) {
            console.log("Login failed:", err);
            setError(err); // Handle and set the error
        }
    };


    return (
        <div className="container d-flex justify-content-center align-items-center p-5 auth-page" style={{ minHeight: '60vh' }}>
            {loading && <Loader />}
            <div className="row d-flex justify-content-center align-items-center w-100" style={{ flexDirection: 'column' }}>
                {error && <Error error={error} />}
                <div className="card p-5 mx-auto auth-card" style={{ maxWidth: '35rem' }}>
                    <h5 className="text-center text-white">Sign in</h5>
                    <p className="text-center text-white">For security, please sign in to access your information</p>
                    <form onSubmit={handleLogin}>
                        <div className="row mb-3">
                            <div className="col-12">
                                <label className="form-label text-white" htmlFor="email">Email</label>
                                <input type="email" className="form-control transparent-input" name="email" value={loginData.email} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-12">
                                <label className="form-label text-white" htmlFor="password">Password</label>
                                <input type="password" className="form-control transparent-input" name="password" value={loginData.password} onChange={handleChange} required />
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-12">
                                <button type="submit" className="btn btn-primary w-100">Sign in</button>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-12 d-flex justify-content-between">
                                <Link className='text-white' to="/register">Create account</Link>
                                <Link className='text-white' to="/forgot-password">Forget password</Link>
                            </div>
                        </div>
                        <div className="row mb-3">
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <hr className="flex-grow-1 text-white" />
                                <p className="mx-3 mb-0 text-white">or sign in with</p>
                                <hr className="flex-grow-1 text-white" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <button type="button" className="btn btn-outline-secondary w-100 border border-white">
                                    <img src="imgs/google.webp" alt="Google" width={30} height={30} className="me-2" />
                                    <b className='text-white'>Google</b>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header>
                    <h2 style={{textAlign:'center'}}>OTP Verification <br /> <span style={{fontSize:'16px'}}>Verify your One time password (otp)</span></h2>
                    
                    {/* <Modal.Title >OTP Verification <br /> <span style={{fontSize:'16px'}}>Verify your One time password (otp)</span></Modal.Title>    */}
                </Modal.Header>
                <Modal.Body>
                    <div className="d-flex justify-content-center">
                        {userOtp.map((digit, index) => (
                            <input
                                key={index}
                                id={`otp-input-${index}`}
                                type="text"
                                maxLength="1"
                                className="form-control otp-input mx-1"
                                value={userOtp[index]}
                                onChange={(e) => handleOtpChange(e, index)}
                                onKeyDown={(e) => handleKeyDown(e, index)}
                                style={{ width: "50px", textAlign: "center" }}
                            />
                        ))}
                    </div>
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <button type="button" className="btn btn-secondary" onClick={handleClose}>
                        Close
                    </button>
                    <button type="button" className="btn btn-primary" onClick={handleOtpVerify}>
                        Verify OTP
                    </button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Login