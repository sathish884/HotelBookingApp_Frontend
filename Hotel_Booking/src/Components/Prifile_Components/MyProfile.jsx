import React from 'react'

function MyProfile() {

    const userObj = sessionStorage.getItem('userObj');
    const userDetails = userObj ? JSON.parse(userObj) : {};

    return (
        <div className="container mt-3">
            <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                    <div className="card h-100">
                        <div className="card-body text-center">
                            <div className="user-profile-leftside-content">
                                <div className="user-profile img-thumbnail">
                                    <img
                                        src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                        className="img-fluid rounded-circle"
                                        alt="Profile Avatar"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-9 col-lg-8 col-md-7 col-sm-6">
                    <div className="card h-100">
                        <div className="card-body p-3">
                            <div className="row">
                                <div className="col-12">
                                    <h5 className="mb-3 text-primary">Personal Details</h5>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <h6>Name</h6>
                                    <p>{userDetails.name}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <h6>Email</h6>
                                    <p>{userDetails.email}</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 col-md-6">
                                    <h6>Mobile Number</h6>
                                    {/* <p>{userDetails.mobileNumber}</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProfile