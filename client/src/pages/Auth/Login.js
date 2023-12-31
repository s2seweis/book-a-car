import React from 'react';
import { Row, Col, Input, Form } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../redux/actions/userActions';
import Spinner from '../../components/Spinner';

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

function Login() {

  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.alertsReducer);
  function onFinish(values) {
    dispatch(userLogin(values));

  }
  return (
    <div className="login">
      {loading && (<Spinner />)}
      <Row gutter={24} style={{ justifyContent: 'center' }} className="d-flex aligin-items-center">
        <Col className='login-register-page' lg={24} style={{}}>
          <img
            style={{ width: '-webkit-fill-available' }}
            data-aos="slide-right"
            data-aos-duration="1000"
            src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80" alt='img' />
          <h1 className="login-logo">Book a Car</h1>
        </Col>
        <Col style={{ margin: 'auto' }} lg={8} className="text-left p-5">
          <Form layout="vertical" className="login-form p-5" onFinish={onFinish}>
            <h1 color='white'>Login</h1>
            <hr />
            <Form.Item
              name="username"
              label="Username"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name="password"
              label="Password"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <div className='button-container'>
              <button className="btn1 mt-2 mb-3">Login</button>
            </div>
            {/* <br /> */}
            <div style={{ marginBottom: '15px' }}>
              <Link to="/register">Click here to Register</Link>
            </div>
            {/* <br style={{marginBottom:"20px"}} /> */}
            <Link to="/">Check out the Cars</Link>

          </Form>
        </Col>

      </Row>

    </div>
  );
}

export default Login;
