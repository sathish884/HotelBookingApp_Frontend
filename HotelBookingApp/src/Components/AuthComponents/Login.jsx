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
            <Layout style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div className="row">
                    <div className="card p-5" style={{ width: '35rem' }}>

                        {/* <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}> */}
                        <h5>Sign in</h5>
                        <p>For security, please sign in to access your information</p>
                        <form>
                            <di className="row mb-3">
                                <div className="col">
                                    <label className='form-label' htmlFor="">Email</label>
                                    <input type="email" className="form-control" />
                                </div>
                            </di>
                            <di className="row mb-5">
                                <div className="col">
                                    <label className='form-label' htmlFor="">Password</label>
                                    <input type="password" className="form-control" />
                                </div>
                            </di>
                            <di className="row mb-3">
                                <div className="col">
                                    <button type='submit' className='btn btn-primary w-100'>Sign in</button>
                                </div>
                            </di>

                            <di className="row mb-3">
                                <div className="col d-flex" style={{ justifyContent: 'space-between' }}>
                                    <a href="">create account</a>
                                    <a href=""><i class="bi bi-person-fill-lock"></i>&nbsp;Forget password</a>
                                </div>
                            </di>

                            <di className="row mb-5">
                                <div className="col d-flex" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                    <hr style={{ width: '35%' }} />
                                    <p style={{ marginTop: '10px' }}>or sign in with</p>
                                    <hr style={{ width: '35%' }} />
                                </div>
                            </di>

                            <div className="row">
                                <div className="col">
                                    <button type="button" class="btn btn-outline-secondary w-100"><span><img src="imgs/google.webp" alt="" width={30} height={30}/></span>&nbsp;&nbsp;<span><b>Google</b></span></button>
                                </div>
                            </div>

                        </form>
                        {/* </Formik> */}
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Login