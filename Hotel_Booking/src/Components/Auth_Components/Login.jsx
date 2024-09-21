import React, { useState } from 'react'
import * as Yup from 'yup';
import { Flex, Input } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { loginUser, otpVerify } from '../../Services/Api';
import Loader from '../../Utilits/Loader';
import Error from '../../Utilits/Error';

function Login() {
    // // Initial values for the form fields
    // const initialValues = {
    //     email: '',
    //     password: ''
    // };

    // // Validation schema using Yup for form validation
    // const validationSchema = Yup.object({
    //     email: Yup.string().email('Invalid email').required('Email is required'),
    //     password: Yup.string().required('Password is is required')
    // });

    // // Function to handle form submission
    // const onSubmit = (values, { resetForm }) => {
    //     console.log(values)
    //     // Reset the form fields
    //     resetForm();
    //     // Close the modal programmatically by clicking the close button
    //     document.getElementById("createCloseModalButton").click();
    // };

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    });
    const [show, setShow] = useState(false);
    const [resOtp, setResOtp] = useState(null)
    const [userOtp, setUserOtp] = useState(null)

    // const navigate = useNavigate()

    const handleClose = () => setShow(false);


    // Otp verify 
    const handleOtpVerify = async () => {

        if (userOtp === resOtp) {
            const body = {
                email: loginData.email,
                otp: userOtp
            }
            try {
                const response = await otpVerify(body);
                if (response.status === 200) {
                    sessionStorage.setItem('isUserLoggedIn', 'true')
                    sessionStorage.setItem(
                        'userObj',
                        JSON.stringify(response.data.data)
                    );
                    sessionStorage.setItem(
                        'userToken',
                        JSON.stringify(response.data.token)
                    );
                    setShow(false);
                    document.location.href = '/hotel'
                }
            } catch (error) {
                console.log(error.message);
            }
        }
    }

    const onChange = (text) => {
        setUserOtp(text)
    };
    const sharedProps = {
        onChange,
    };


    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value;
        setLoginData({ ...loginData, [name]: value })
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const response = await loginUser(loginData);
            setShow(true);
            setResOtp(response.data.otp)
            setLoading(false)
        } catch (error) {
            setLoading(false);
            setError(error.response.data);
            console.log(error.response.data);
        }
    }

    return (
        <>
            {loading && (<Loader />)}

            <div className="container d-flex justify-content-center align-items-center p-5" style={{ minHeight: '60vh' }}>
                <div className="row d-flex justify-content-center align-item-center w-100" style={{ flexDirection: 'column' }}>
                    {error && (<Error error={error} />)}
                    <div className="card p-5 mx-auto bs" style={{ maxWidth: '35rem' }}>
                        <h5 className='text-center'>Sign in</h5>
                        <p className='text-center'>For security, please sign in to access your information</p>
                        <form onSubmit={handleLogin}>
                            <div className="row mb-3">
                                <div className="col-12">
                                    <label className='form-label' htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" value={loginData.email} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-12">
                                    <label className='form-label' htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name="password" value={loginData.password} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12">
                                    <button type='submit' className='btn btn-primary w-100'>Sign in</button>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12 d-flex justify-content-between">
                                    <Link to={'/register'}>Create account</Link>
                                    <Link to={'/forgot-password'}>Forget password</Link>
                                    {/* <a href="#"><i className="bi bi-person-fill-lock"></i>&nbsp;Forget password</a> */}
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-12 d-flex align-items-center justify-content-center">
                                    <hr className="flex-grow-1" />
                                    <p className="mx-3 mb-0">or sign in with</p>
                                    <hr className="flex-grow-1" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button type="button" className="btn btn-outline-secondary w-100">
                                        <img src="src/assets/imgs/google.webp" alt="Google" width={30} height={30} className="me-2" />
                                        <b>Google</b>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <Modal show={show} onHide={handleClose} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>OTP</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Flex gap="middle" align="flex-start" vertical className='align-items-center'>
                            <Input.OTP length={4} formatter={(str) => str.toUpperCase()} {...sharedProps} />
                        </Flex>

                    </Modal.Body>
                    <Modal.Footer className='justify-content-center'>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <button type='submit' className='btn btn-primary' onClick={handleOtpVerify}>Verify OTP</button>

                    </Modal.Footer>
                </Modal>

            </div>

        </>
    )
}

export default Login