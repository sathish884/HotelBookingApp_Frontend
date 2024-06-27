import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import { AutoComplete, Cascader, Button, Checkbox } from 'antd';
import * as Yup from 'yup';

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
            <div className="container-fluid p-5">
                <div className="card">
                    <div className="row">
                        <div className="col-6 login-img">
                        </div>
                        <div className="col-6 login-body">
                            <Formik
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                                onSubmit={onSubmit}
                            >
                                <Form>

                                    <div className="row mb-3">
                                        <div className="col" style={{ display: 'flex', justifyContent: "center", gap: '10px' }}>
                                            <button type="submit" className="btn btn-primary login-btns"><GoogleOutlined /></button>
                                            <button type="submit" className="btn btn-primary login-btns"><FacebookOutlined /></button>
                                        </div>
                                    </div>

                                    <div className='row mb-3'>
                                        <div className="col-12">
                                            {/* <label className='form-label' htmlFor="authorName">Email</label>
                                            <Field className='form-control' type="email" id="email" name="email" />
                                            <ErrorMessage className='errorMsg' name="email" component="div" /> */}
                                            {/* <mdb-form-control>
                                                <input mdbInput type="email" name="email" id="email" className="form-control" placeholder='Enter your email' style={{ color: "white" }} />
                                                <label mdbLabel class="form-label" for="city">Product Description</label>
                                            </mdb-form-control> data-mdb-input-init */}

                                            <div className="form-outline" mdbInput style={{ borderBottom: "2px solid white" }}>
                                                <input type="email" name="email" id="email" className="form-control" placeholder='Enter your email' style={{ color: "white" }} />
                                                <label className="form-label" mdbLabel htmlFor="email" style={{ color: "white" }}>Email input</label>
                                            </div>
                                            {/* <ErrorMessage className='errorMsg' name="email" component="div" /> */}
                                        </div>
                                    </div>
                                    <div className='row mb-3'>
                                        <div className="col-12">
                                            {/* <label className='form-label' htmlFor="birthDate">Password</label>
                                            <Field className='form-control' type="password" id="password" name="password" />
                                            <ErrorMessage className='errorMsg' name="password" component="div" /> */}
                                            <div className="form-outline" style={{ borderBottom: "2px solid white" }} data-mdb-input-init>
                                                <input type="password" name="password" id="password" className="form-control" placeholder='Enter your password' style={{ color: "white" }} />
                                                <label className="form-label" htmlFor="password" style={{ color: "white" }}>Password input</label>
                                            </div>
                                            <ErrorMessage className='errorMsg' name="password" component="div" />
                                        </div>
                                    </div>

                                    <div className="row mb-3">
                                        <div className="col">
                                            <Checkbox style={{ fontSize: "14px" }}><b> Remember me</b></Checkbox>
                                            <a className="login-form-forgot" href="" style={{ color: 'burlywood', textDecoration: "underline", fontSize: "13px" }}>
                                                Forgot password
                                            </a>
                                        </div>
                                    </div>

                                    <div className="row mb-5">
                                        <div className="col">
                                            <button type="submit" className="btn btn-primary login-btns" style={{ width: "100%" }}>Login</button>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col">
                                            <p style={{ color: "white", fontSize: "13px", textAlign: 'center' }}>Don't have an account? <a href="" style={{ color: 'burlywood', fontSize: "14px" }}>Register</a></p>
                                        </div>
                                    </div>
                                </Form>
                            </Formik>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Login