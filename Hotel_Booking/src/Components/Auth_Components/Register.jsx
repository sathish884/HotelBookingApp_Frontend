import React, { useState } from 'react'
import * as Yup from 'yup';
import { Layout } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../../Services/Api';
import Loader from '../../Utilits/Loader';
import Error from '../../Utilits/Error';
import Success from '../../Utilits/Success';


function Register() {
    //Initial values for the form fields
    // const initialValues = {
    //     name:'',
    //     email: '',
    //     password: '',
    //     confirmpassword:''
    // };

    // // Validation schema using Yup for form validation
    // const validationSchema = Yup.object({
    //     email: Yup.string().email('Invalid email').required('Email is required'),
    //     password: Yup.string().required('Password is is required')
    // });

    // // Function to handle form submission
    // const onSubmit = (values, { resetForm }) => {
    //     console.log(values)
    //     // Reset the form fields
    //     resetForm();
    // };


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const navigate = useNavigate()

    const [registerData, setRegisterData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value;
        setRegisterData({ ...registerData, [name]: value })
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            setLoading(true)
            await registerUser(registerData);
            alert('Registration successful. Please check your email to activate your account.');
            setLoading(false);
            setRegisterData({
                name: '',
                email: '',
                password: '',
                confirmPassword: ''
            });
            navigate('/login')
        } catch (error) {
            setLoading(false);
            setError(err.response.data);
            console.log(error.message);
        }

    }

    return (
        <>
            <div className="container d-flex justify-content-center align-items-center p-3" style={{ minHeight: '60vh' }}>
                <div className="row d-flex justify-content-center align-item-center w-100" style={{ flexDirection: 'column' }}>
                    {loading && (<Loader />)}
                    {error && (<Error />)}
                    <div className="card p-5 mx-auto" style={{ maxWidth: '35rem' }}>
                        <h5 className='text-center'>Register</h5>
                        <form onSubmit={handleRegister}>

                            <div className="row mb-3">
                                <div className="col-12">
                                    <label className='form-label' htmlFor="name">Name</label>
                                    <input type="text" className="form-control" name='name' value={registerData.name} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-12">
                                    <label className='form-label' htmlFor="email">Email</label>
                                    <input type="email" className="form-control" name='email' value={registerData.email} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-12">
                                    <label className='form-label' htmlFor="password">Password</label>
                                    <input type="password" className="form-control" name='password' value={registerData.password} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="row mb-5">
                                <div className="col-12">
                                    <label className='form-label' htmlFor="confirmPassword">Confirm Password</label>
                                    <input type="password" className="form-control" name='confirmPassword' value={registerData.confirmPassword} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-12">
                                    <button type='submit' className='btn btn-primary w-100' >Register</button>
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-12 d-flex justify-content-between">
                                    <Link to={'/login'} style={{ fontSize: '16px' }}>Click here to login</Link>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>



            </div>


        </>
    )
}

export default Register