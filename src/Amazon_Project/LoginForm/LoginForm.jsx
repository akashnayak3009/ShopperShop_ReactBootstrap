import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMobileChange = (event) => {
    setMobile(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform login logic here using username and password
    console.log('Username:', username);
    console.log('Password:', password);
    console.log('Email:', email);
    console.log('Mobile:', mobile);
    // Reset form fields
    setUsername('');
    setPassword('');
    setEmail('');
    setMobile('');
  };

  return (
    <Container className="mt-4">
      <div
        style={{
          border: '4px solid black',
          borderRadius: '10px',
          padding: '20px',
          margin: '0 auto',
          maxWidth: '400px',
          fontSize: 'larger',
        }}
      >
  
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formUsername">
            <Form.Label><b>UserName</b></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={handleUsernameChange}
            />
          </Form.Group>

          <Form.Group controlId="formPassword">
            <Form.Label><b>PassWord</b></Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={handlePasswordChange}
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
              <Form.Label><b>Email</b></Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={handleEmailChange}
              />
          </Form.Group>

          <Form.Group controlId="formMobile">
              <Form.Label><b>Mobile</b></Form.Label>
              <Form.Control
                type="mobile"
                placeholder="Enter Mobile"
                value={mobile}
                onChange={handleMobileChange}
               />
            </Form.Group>

          <div className="btn btn-group m-2 p-2">
            <Button variant="primary" type="submit">
              Sign In
            </Button>
            <Button variant="warning" type="button">
              Cancel
            </Button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default LoginForm;
