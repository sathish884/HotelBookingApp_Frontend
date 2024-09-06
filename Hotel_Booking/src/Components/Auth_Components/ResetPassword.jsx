import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { resetPassword } from '../../Services/Api';
import Loader from '../../Utilits/Loader';
import Error from '../../Utilits/Error';

function ResetPassword() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState()
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            await resetPassword({ email, password, confirmPassword });
            setLoading(false)
            alert('Your password was reset successfully.');
            navigate('/login');
        } catch (err) {
            setLoading(false)
            setError(err.response.data)
            console.error('Reset Password Error:', err.response?.data?.message || 'Failed to reset password');
        }
    };

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center p-5" style={{ minHeight: '60vh' }}>
                <div className="row d-flex justify-content-center align-item-center w-100" style={{ flexDirection: 'column' }}>
                    {loading && (<Loader />)}
                    {error ? (<Error error={error} />) : ""}
                    <div className="card p-5 mx-auto" style={{ maxWidth: '35rem' }}>
                        <h5 className='text-center'>Reset Password</h5>
                        <form onSubmit={handleSubmit}>

                            <div className="row mb-5">
                                <div className="col-12">
                                    <label className='form-label' htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                </div>
                            </div>

                            <div className="row mb-5">
                                <div className="col-12">
                                    <label className='form-label' htmlFor="password">New Password</label>
                                    <input type="password" className="form-control" name="password" placeholder='Enter new password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                            </div>

                            <div className="row mb-5">
                                <div className="col-12">
                                    <label className='form-label' htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="password" className="form-control" name='confirmPassword' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-12">
                                    <button type='submit' className='btn btn-primary w-100'>Reset</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ResetPassword