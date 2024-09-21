import React, { useState } from 'react';
import axios from 'axios';
import { LoginContainer, Form, Title, Input, Button, ToggleLink } from '../styles/LoginSignupPageStyles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState('');
  
  const navigate = useNavigate(); // Initialize useNavigate

  const toggleMode = () => {
    setIsLogin(!isLogin);
    setMessage(''); // Clear message when toggling
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = isLogin
        ? await axios.post('http://localhost:5000/login', { username, password })
        : await axios.post('http://localhost:5000/signup', { username, password });
      
      if (isLogin) {
        const token = response.data.access_token;
        localStorage.setItem('token', token); // Store token for future authenticated requests
        setMessage('Login successful!');
        navigate('/protected'); // Redirect to protected page
      } else {
        setMessage('Sign-up successful! Please log in.');
      }
    } catch (error) {
      setMessage(error.response ? error.response.data.message : 'Error occurred');
    }
  };

  return (
    <LoginContainer>
      <Form onSubmit={handleSubmit}>
        <Title>{isLogin ? 'KMS Sacco Login' : 'KMS Sacco Sign Up'}</Title>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <div style={{ position: 'relative' }}>
          <Input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: 'absolute',
              right: '10px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#1e1e2e' // Change to match your theme
            }}
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
          </button>
        </div>
        <Button type="submit">{isLogin ? 'Login' : 'Sign Up'}</Button>
        <ToggleLink onClick={toggleMode}>
          {isLogin ? "Don't have an account? Sign Up" : 'Already have an account? Login'}
        </ToggleLink>
        {message && <p>{message}</p>}
      </Form>
    </LoginContainer>
  );
};

export default LoginSignupPage;
