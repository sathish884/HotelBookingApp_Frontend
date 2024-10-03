import React, { useState } from 'react'
import { forgetPassword } from '../../Services/Api'
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../Utilits/Loader';

function ForgetPassword() {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
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
            setError(error.response);
            console.error('Forgot Password Error:', err.response);
        }
    };

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center p-5 auth-page" style={{ minHeight: '60vh' }}>
                {loading && (<Loader />)}
                {error ? (<Error error={error} />) : ""}
                <div className="row justify-content-center w-100">
                    <div className="card p-5 mx-auto auth-card" style={{ maxWidth: '35rem' }}>
                        <h5 className='text-center text-white'>Forgot Password</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col-12">
                                    <label className='form-label text-white' htmlFor="email">Email</label>
                                    <input type="email" className="form-control transparent-input" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12">
                                    <button type='submit' className='btn btn-primary w-100 text-white'>Send Reset Link</button>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12 d-flex justify-content-between">
                                    <Link className='text-white' to={'/login'} style={{ fontSize: '16px' }}>Click here to login</Link>
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