import React, { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { AutoComplete, Cascader, Button, Checkbox, Layout } from 'antd';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

function Login() {

    // Initial values for the form fields
    const initialValues = {
        email: '',
        password: ''
    };

    // Validation schema using Yup for form validation
    const validationSchema = Yup.object({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().required('Password is is required')
    });

    // Function to handle form submission
    const onSubmit = (values, { resetForm }) => {
        console.log(values)
        // Reset the form fields
        resetForm();
        // Close the modal programmatically by clicking the close button
        document.getElementById("createCloseModalButton").click();
    };


    return (
        <>
            <Layout style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', padding: '1rem' }}>
                <div className="row justify-content-center">
                    <div className="card p-5" style={{ maxWidth: '100%', width: '35rem' }}>
                        <h5>Sign in</h5>
                        <p>For security, please sign in to access your information</p>
                        <form>
                            <div className="row mb-3">
                                <div className="col-12">
                                    <label className='form-label' htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" />
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-12">
                                    <label className='form-label' htmlFor="password">Password</label>
                                    <input type="password" className="form-control" id="password" />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12">
                                    <button type='submit' className='btn btn-primary w-100'>Sign in</button>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12 d-flex justify-content-between">
                                    <a href="#">Create account</a>
                                    <a href="#"><i className="bi bi-person-fill-lock"></i>&nbsp;Forget password</a>
                                </div>
                            </div>
                            <div className="row mb-5">
                                <div className="col-12 d-flex align-items-center justify-content-center">
                                    <hr className="flex-grow-1" />
                                    <p className="mx-3 mb-0">or sign in with</p>
                                    <hr className="flex-grow-1" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <button type="button" className="btn btn-outline-secondary w-100">
                                        <span><img src="imgs/google.webp" alt="Google" width={30} height={30} /></span>&nbsp;&nbsp;<span><b>Google</b></span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Login