import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { tokenVerify } from '../../Services/Api'
import Loader from '../../Utilits/Loader';
import Error from '../../Utilits/Error';

function TokenVerify() {

    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            await tokenVerify({ token })
            navigate('/reset-password');
            setLoading(false)
        } catch (err) {
            console.error('Forgot Password Error:', err.response.data.message);
            setLoading(false)
            setError(err)
        }
    };

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center p-5 auth-page" style={{ minHeight: '60vh' }}>
                {loading && (<Loader />)}
                <div className="row d-flex justify-content-center align-item-center w-100" style={{ flexDirection: 'column' }}>
                {error ? (<Error error={error} />) : ""}
                    <div className="card p-5 mx-auto auth-card" style={{ maxWidth: '35rem' }}>
                        <h5 className='text-center text-white'>Verify Token</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="row mb-3">
                                <div className="col-12">
                                    <label className='form-label text-white' htmlFor="email">Token</label>
                                    <input type="text" className="form-control transparent-input" name="token" value={token} onChange={(e) => setToken(e.target.value)} required />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-12">
                                    <button type='submit' className='btn btn-primary w-100'>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TokenVerify