import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const user = JSON.parse(sessionStorage.getItem('userObj'));

    const logout = () => {
        sessionStorage.removeItem('userObj');
        sessionStorage.removeItem('userToken');
        sessionStorage.setItem('isUserLoggedIn', 'false')
        window.location.href = '/login'
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
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
                                        <Link className="nav-link" to={'/hotel'} style={{fontSize:'18px'}}>Home</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/profile'} style={{fontSize:'18px'}}>Bookings</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/profile'} style={{fontSize:'18px'}}>Profile</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" onClick={logout} style={{fontSize:'18px'}}>Logout</Link>
                                    </li>
                                   
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/register'} style={{fontSize:'18px'}}>Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/login'} style={{fontSize:'18px'}}>Login</Link>
                                    </li>
                                </>
                            )}


                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar