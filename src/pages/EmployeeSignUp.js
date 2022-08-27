/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';
import { useFormik } from 'formik';

import axios from 'axios';

function EmployeeSignUp() {
  const [errorMsg, setErrorMsg] = useState('');
  const [succMsg, setSuccMs] = useState('');
  let navigate = useNavigate();
  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      name: yup
        .string('Enter your name')
        .max(25, 'Must be 25 characters or less')
        .required('* Required'),

      email: yup
        .string('Enter your email')
        .required('* Required')
        .email('Enter a vaild Email'),
      password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('*Password is required'),
    }),
    onSubmit: async (values) => {
      try {
        await axios.post(`http://localhost:4009/api/employee/signup`, values);
        navigate('/');
      } catch (error) {
        setErrorMsg(error.response.data.message);
      }
    },
  });
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-5 mx-auto'>
            {errorMsg ? (
              <div
                className='alert alert-danger text-center mt-5 alert-dismissible fade show'
                role='alert'>
                {errorMsg}
                <button
                  type='button'
                  class='btn-close'
                  data-bs-dismiss='alert'
                  aria-label='Close'></button>
              </div>
            ) : (
              ''
            )}
            {succMsg ? (
              <div
                className='alert alert-success text-center mt-5 alert-dismissible fade show'
                role='alert'>
                {succMsg}
                <button
                  type='button'
                  class='btn-close'
                  data-bs-dismiss='alert'
                  aria-label='Close'></button>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-10 col-md-8 col-lg-6 col-xl-5 mx-auto'>
            <div className='card border-0 shadow rounded-5 my-5'>
              <div className='card-body p-4 p-sm-5'>
                <h5 className='card-title text-center mb-3 fw-light fs-5'>
                  Employee Sign Up
                </h5>
                <form onSubmit={formik.handleSubmit}>
                  <div className='form-floating mb-3'>
                    <input
                      type='text'
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.name}
                      name='name'
                      className='form-control'
                      id='name'
                      placeholder='Enter your name'
                      style={{
                        border: formik.errors.name
                          ? '1px solid red'
                          : formik.values.name.length <= 25 &&
                            formik.values.name.length !== 0
                          ? '1px solid green'
                          : '',
                      }}
                    />
                    <label htmlFor='floatingInput'>Name</label>
                    {formik.touched.name && formik.errors.name ? (
                      <small style={{ color: 'red' }}>
                        {formik.errors.name}
                      </small>
                    ) : null}
                    {formik.values.name.length <= 25 &&
                    formik.values.name.length !== 0 ? (
                      <small style={{ color: 'green' }}>Looks good!</small>
                    ) : null}
                  </div>

                  <div className='form-floating mb-3'>
                    <input
                      type='email'
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      name='email'
                      value={formik.values.email}
                      className='form-control'
                      id='email'
                      placeholder='name@example.com'
                      style={{
                        border: formik.errors.email
                          ? '1px solid red'
                          : formik.values.email !== '' && !formik.errors.email
                          ? '1px solid green'
                          : '',
                      }}
                    />
                    <label htmlFor='floatingInput'>Email address</label>
                    {formik.touched.email && formik.errors.email ? (
                      <small style={{ color: 'red' }}>
                        {formik.errors.email}
                      </small>
                    ) : null}

                    {formik.values.email !== '' && !formik.errors.email ? (
                      <small style={{ color: 'green' }}>Looks good!</small>
                    ) : null}
                  </div>
                  <div className='form-floating mb-3'>
                    <input
                      type='password'
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      value={formik.values.password}
                      name='password'
                      className='form-control'
                      id='password'
                      placeholder='Password'
                      style={{
                        border: formik.errors.password
                          ? '1px solid red'
                          : formik.values.password !== '' &&
                            !formik.errors.password
                          ? '1px solid green'
                          : '',
                      }}
                    />
                    <label htmlFor='floatingPassword'>Password</label>
                    {formik.touched.password && formik.errors.password ? (
                      <small style={{ color: 'red' }}>
                        {formik.errors.password}
                      </small>
                    ) : null}
                    {formik.values.password.length >= 8 &&
                    formik.values.password.length !== 0 ? (
                      <small style={{ color: 'green' }}>Looks good!</small>
                    ) : null}
                  </div>
                  <div className='d-grid mb-2'>
                    <button
                      class='btn btn-lg btn-primary btn-login fw-bold text-uppercase'
                      type='submit'>
                      SIGNUP
                    </button>
                  </div>
                  <div className='text-center'>
                    Have an account?{' '}
                    <Link
                      to={'/'}
                      className=' text-center mt-3 text-decoration-none'>
                      Sign In
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmployeeSignUp;
