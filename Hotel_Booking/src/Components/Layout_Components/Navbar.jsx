import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

    const [user, setUser] = useState(false);

    // Use useEffect to update the user state on component mount
    useEffect(() => {
        const loggedUser = sessionStorage.getItem('isUserLoggedIn') === 'true';
        setUser(loggedUser);
    }, []);

    const logout = () => {
        sessionStorage.removeItem('userObj');
        sessionStorage.removeItem('userToken');
        sessionStorage.setItem('isUserLoggedIn', 'false');
        setUser(false);  // Update user state after logout

        // Allow React to re-render and navigate
        // Option 1: Use window.location.href if needed for full page reload
        window.location.href = '/hotel';

        // Option 2: Use navigate hook (if you're using react-router-dom)
        // navigate('/login');
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary p-4 sticky-nav" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {user ? (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link nav-item-link" to={'/hotel'}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav-item-link" to={'/profile'}>Bookings</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav-item-link" to={'/profile'}>Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav-item-link" to={'/contact'}>Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav-item-link" onClick={logout}>Logout</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link nav-item-link" to={'/hotel'}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav-item-link" to={'/contact'}>Contact</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav-item-link" to={'/register'}>Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link nav-item-link" to={'/login'}>Login</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );



}

export default Navbar