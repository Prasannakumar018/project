import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/index', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
      });

      const data = await response.text();
      setMessage(data);
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred while processing your request.');
    }
  };

  return (
    <div className="container">
      <h2>Login Page</h2>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <TextField
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email"
            id="email"
          />
          <br />
        </div>
        <div>
          <br />
          <TextField
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            id="password"
          />
        </div>
        <br />
        <Button type="submit" variant="contained">
          Login
        </Button>
      </form>
      {message && <div>{message}</div>}
    </div>
  );
}

export default LoginPage;
