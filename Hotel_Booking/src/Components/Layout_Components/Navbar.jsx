import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {

    const user = JSON.parse(sessionStorage.getItem('userObj'));

    const logout = ()=>{
        sessionStorage.removeItem('userObj');
        sessionStorage.removeItem('userToken');
        sessionStorage.setItem('isUserLoggedIn', 'false')
        window.location.href = '/login'
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary mb-5" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            {user ? (
                                <>
                                    <div className="dropdown" style={{position:'relative'}}>
                                        <button className="btn btn-secondary me-5" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            {user.name}
                                        </button>
                                        <ul className="dropdown-menu" style={{position:'absolute', left:'-50px'}}>
                                            <li><a className="dropdown-item" href="#">Bookings</a></li>
                                            <li><a className="dropdown-item" onClick={logout}>Logout</a></li>
                                        </ul>
                                    </div>

                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/register'}>Register</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={'/login'}>Login</Link>
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