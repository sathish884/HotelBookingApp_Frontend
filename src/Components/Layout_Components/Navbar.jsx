import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '../../ContextAPI/AuthProvider';

function Navbar() {

    const { logout, user, setUser } = useAuth(); // Use the Auth Context

    // Check login status on component mount
    useEffect(() => {
        const loggedUser = sessionStorage.getItem('isUserLoggedIn') === 'true';
        setUser(loggedUser);
    }, [setUser]);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-nav" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src="https://i.pinimg.com/736x/f2/ba/75/f2ba75f08927193a60cf961a6c7af008.jpg" width={250} height={100} alt="" /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto">
                        {user ? (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link nav-item-link" to={'/hotel'}><i className="bi bi-house-fill" style={{ color: 'white' }}></i>&nbsp;&nbsp;Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-item-link" to={'/profile'}><i className="bi bi-building-fill" style={{ color: 'white' }}></i>&nbsp;&nbsp;Bookings</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-item-link" to={'/profile'}><i className="bi bi-person-circle" style={{ color: 'white' }}></i>&nbsp;&nbsp;Profile</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-item-link" to={'/contact'}><i className="bi bi-telephone-fill" style={{ color: 'white' }}></i>&nbsp;&nbsp;Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-item-link" onClick={logout}><i className="bi bi-box-arrow-left" style={{ color: 'white' }}></i>&nbsp;&nbsp;Logout</Link>
                                </li>
                                <div className="">
                                    <li className="nav-item">
                                        <img className='rounded-circle img-thumbnail' src="imgs/user-profile.webp" width={50} height={50} alt="Profile" />
                                    </li>
                                </div>
                            </>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link className="nav-link nav-item-link" to={'/hotel'}><i className="bi bi-house-fill" style={{ color: 'white' }}></i>&nbsp;&nbsp;Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-item-link" to={'/contact'}><i className="bi bi-telephone-fill" style={{ color: 'white' }}></i>&nbsp;&nbsp;Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-item-link" to={'/register'}><i className="bi bi-person-lines-fill" style={{ color: 'white' }}></i>&nbsp;&nbsp;Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link nav-item-link" to={'/login'}><i className="bi bi-box-arrow-in-right" style={{ color: 'white' }}></i>&nbsp;&nbsp;Login</Link>
                                </li>
                            </>
                        )}
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Navbar