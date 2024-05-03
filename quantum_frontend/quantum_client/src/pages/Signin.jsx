import React, { useState } from 'react'
import '../style/signin.css'
import { useNavigate } from 'react-router-dom'
import { Container, Form, Button, Row, Col, FormControl } from 'react-bootstrap'
import performLogin from '../apis/api.login'

const Signin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigateSignup = () => {
    navigate('/signup')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await performLogin(email, password)
    if (data) {
      // document.localStorage.setItem("userData",data)
      navigate('/')
    } else {
      alert("Incorrect password and username")
    }
  }

  return (
    <Container className="App">
      <div className="centered-form">
        <h1>SIGN IN</h1>
        <i className="fa-regular fa-user user"></i>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <FormControl type="text" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
            <i className="fa-regular fa-user username"></i>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <FormControl type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
            <i className="fa-solid fa-lock lock"></i>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox"  >
            <Row className="remember-password">
              <Col>
                <Form.Check type="checkbox" label="Remember me" />
              </Col>
              <Col>
                <a href="#">Forgot your password?</a>
              </Col>
            </Row>
          </Form.Group>
          <Button variant="primary" type="submit" className="login-btn">
            LOGIN
          </Button>
        </Form>
        <p>Don't have an account? <a onClick={navigateSignup}>Sign up</a></p>
      </div>
    </Container>
  )
}

export default Signin