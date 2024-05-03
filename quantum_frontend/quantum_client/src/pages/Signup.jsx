import React, { useState } from 'react'
import '../style/signin.css'
import { useNavigate } from 'react-router-dom'
import { Container, Form, Button, Row, Col, FormControl } from 'react-bootstrap'

import performSignup from '../apis/api.signup'

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();
    performSignup(formData).then((data) => {
      if (data) {
        navigate('/')
      }
    })
    .catch((error) => {
      console.log(error)
    })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const navigateSignin = () => {
    navigate('/signin')
  }

  return (
    <Container className="App">
      <div className="centered-form">
        <h1>SIGN UP</h1>
        <i className="fa-regular fa-user user"></i>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicUsername">
            <FormControl type="text" name='name' placeholder="Username" value={formData.name} onChange={handleChange} />
            <i className="fa-regular fa-user username"></i>
          </Form.Group>
          <Form.Group controlId="formBasicDOB">
            <FormControl type="date" name='dob' placeholder="DOB" value={formData.dob} onChange={handleChange} />
            <i class="fa-solid fa-calendar-days date"></i>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <FormControl type="email" name='email' placeholder="Email" value={formData.email} onChange={handleChange} />
            <i class="fa-regular fa-envelope email"></i>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <FormControl type="password" name='password' placeholder="Password" value={formData.password} onChange={handleChange} />
            <i className="fa-solid fa-lock lock"></i>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
          <Row className="remember-password">
              <Col>
                <Form.Check type="checkbox" label="Remember me" />
              </Col>
              <Col>
                <a href="#">Forgot your password?</a>
              </Col>
            </Row>
          </Form.Group>
          <Button variant="primary" type="submit" className="signup-btn">
            SIGNUP
          </Button>
        </Form>
        <p>Already have an account? <a onClick={navigateSignin}>Login</a></p>
      </div>
    </Container>
  )
}

export default Signup