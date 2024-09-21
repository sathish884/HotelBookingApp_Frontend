import React, { useState } from 'react'
import { forgetPassword } from '../../Services/Api'
import { useNavigate } from 'react-router-dom';
import Loader from '../../Utilits/Loader';

function ForgetPassword() {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await forgetPassword({ email });
            setLoading(false);
            alert('Check your email for instructions to reset your password.');
            navigate('/verify-token');
        } catch (err) {
            setLoading(false);
            console.error('Forgot Password Error:', err.response);
        }
    };

    return (
        <>
            {loading && (<Loader />)}

            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
                <div className="row justify-content-center w-100">
                    <div className="card p-5 mx-auto bs" style={{ maxWidth: '35rem' }}>
                        <h5 className='text-center'>Forgot Password</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col-12">
                                    <label className='form-label' htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12">
                                    <button type='submit' className='btn btn-primary w-100'>Send Reset Link</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ForgetPassword