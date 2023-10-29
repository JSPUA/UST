import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert, Image, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    showError: false,
    showPassword: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleTogglePasswordVisibility = () => {
    setFormData((prevData) => ({
      ...prevData,
      showPassword: !prevData.showPassword,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    const { username, password } = formData;

    if (username === 'your_username' && password === 'your_password') {
      // Successful login
      alert('Login successful');
    } else {
      // Failed login
      setFormData((prevData) => ({
        ...prevData,
        showError: true,
      }));
    }
  };

  const linkStyle = {
    color: 'blue',
    textDecoration: 'underline',
  };
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <Card style={{ backgroundColor: 'white', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
            <Card.Header className="d-flex justify-content-between align-items-center">
              <div>
                <Link to="/"> <FontAwesomeIcon icon={faAngleLeft} /></Link> Back
              </div>
              <div className="text-center">
                <Image
                  src="./MML.png"
                  alt="Logo"
                  fluid
                  style={{ width: '100px', height: 'auto' }}
                  className="mx-auto"
                />
              </div>
            </Card.Header>
            <br></br>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    name="username"
                    placeholder="Enter username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                  />
                </Form.Group>
                <br></br>
                <Form.Group controlId="formPassword">
                  <Form.Label>Password</Form.Label>
                  <div className="input-group">
                    <Form.Control
                      type={formData.showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Enter password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                    />
                    <div className="input-group-append">
                      <Button
                        variant="outline-secondary"
                        type="button"
                        onClick={handleTogglePasswordVisibility}
                      >
                        <FontAwesomeIcon
                          icon={formData.showPassword ? faEye : faEyeSlash}
                        />
                      </Button>
                    </div>
                  </div>
                </Form.Group>

                {formData.showError && (
                  <Alert variant="danger">Invalid username or password</Alert>
                )}
                <br></br>
                <div className="d-flex justify-content-end">
                <Button
      variant="primary"
      style={{
        
        width: '100px',
       
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      onMouseEnter={() => setIsButtonHovered(true)}
      onMouseLeave={() => setIsButtonHovered(false)}
    >
      Login
      
    </Button>
                </div>
              </Form>

              <div className="mt-3">
                <p>
                  <Link to="/forgetpassword" style={linkStyle}>Forgot Password?</Link>
                </p>
                <p>
                  Don't have an account? <Link to="/signup" style={linkStyle}>Sign Up</Link> now!
                </p>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
