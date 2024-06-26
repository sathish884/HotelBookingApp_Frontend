import React from 'react'
import { Formik } from 'formik';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { AutoComplete, Cascader, Button, Checkbox, Form, Input } from 'antd';
import * as Yup from 'yup';

function Login() {

  const initialValuesForm = {
    email: "",
    password: ""
  }

  const validationSchemaForm = Yup.object({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string().min(8, "Password must be 8 charecters").required("Password is required")
  });

  const onSubmitForm = (values, { resetForm }) => {
    console.log(values)
    resetForm()
  }

  return (
    <>
      <div className="container-fluid">
        <div className="card">
          <div className="row">
            <div className="col-6">
            </div>
            <div className="col-6">
              <div>
                <Formik
                  initialValues={initialValuesForm}
                  validationSchema={validationSchemaForm}
                  onSubmit={onSubmitForm}>
                  <Form>
                    <div className='row mb-3'>
                      <div className="col-12">
                        <label className='form-label' htmlFor="authorName">Email</label>
                        <Form.Item name="email">
                          <Input type='email' prefix={<UserOutlined />} placeholder="Email" />
                          <ErrorMessage className='errorMsg' name="email" component="div" />
                        </Form.Item>

                      </div>
                    </div>

                    <div className='row mb-3'>
                      <div className="col-12">
                        <label className='form-label' htmlFor="birthDate">Password</label>
                        <Form.Item name="password" hasFeedback>
                          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
                          <ErrorMessage className='errorMsg' name="birthDate" component="div" />
                        </Form.Item>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <Form.Item>
                          <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                          </Form.Item>
                          <a className="login-form-forgot" href="">
                            Forgot password
                          </a>
                        </Form.Item></div>
                    </div>

                    <div className="row">
                      <div className="col">
                        <Form.Item>
                          <Button type="primary" htmlType="submit" className="login-form-button">
                            Login
                          </Button>
                        </Form.Item>
                      </div>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login