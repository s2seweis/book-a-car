import React from 'react';
import { Row, Col, Input, Form } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { userRegister } from '../../redux/actions/userActions';

import Spinner from '../../components/Spinner';

import './Auth.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Register() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.alertsReducer);

  function onFinish(values) {
    dispatch(userRegister(values));
  }

  return (
    <div className="login">
      {loading && (<Spinner />)}
      <Row style={{ justifyContent: 'center' }} gutter={16} className='d-flex aligin-items-center'>
        <Col className='login-register-page' lg={24} >
          <img
            style={{ width: '-webkit-fill-available' }}
            data-aos="slide-left"
            data-aos-duration="1000"
            src='https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80' alt='logo-login/register' />
          <h1 className='login-logo'>Book a Car</h1>
        </Col>
        <Col lg={8} style={{ margin: 'auto', padding: '0rem' }} className='text-left p-5'>
          <Form layout="vertical" className='login-form p-5' onFinish={onFinish}>
            <h1>Register</h1>
            <hr />
            <Form.Item name="username" label="Username" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="password" label="Password" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="cpassword" label="Confirm Password" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <div className='button-container'>
              <button className='btn1 mt-2 mb-3'>Register</button>
            </div>
            <Link to="/login" >Click here to Login</Link>
          </Form>
        </Col>

      </Row>

    </div>
  );
}

export default Register;
