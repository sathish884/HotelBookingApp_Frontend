import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function AccountActivated() {

    const { token } = useParams();
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const activateAccount = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/activate/${token}`);
                //  console.log(response);
                setMessage(response.data.message);
                setTimeout(() => {
                    navigate('/login');
                }, 3000); // Redirect to login page after 3 seconds
            } catch (err) {
                setError(err.response.data.message || 'Something went wrong');
            }
        };

        activateAccount();
    }, [token, navigate]);

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center p-5" style={{ minHeight: '60vh' }}>
                <div className="row justify-content-center w-100">
                    {message && <div className="alert alert-success text-center"><b>{message}</b></div>}
                    {error && <div className="alert alert-danger text-center">{error}</div>}
                </div>

            </div>
        </>
    )
}

export default AccountActivated