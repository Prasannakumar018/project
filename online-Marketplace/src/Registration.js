import React, { useState } from 'react';
import './App.css';
import './style.css';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';

function App() {
  const navigate= useNavigate();

  const handleLoginClick=()=>{
    navigate('/login');
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here (e.g., send data to an API)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
        <div className="container">
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <TextField  type="text" value={name} onChange={(e) => setName(e.target.value)} id="outlined-basic" label="Name" variant="outlined" />
        <br/>
        </div>
        <div>
         <br/>
          <TextField type="email" email="true"
            value={email}
            onChange={(e) => setEmail(e.target.value)} label="email" id="email" />
            <br/>
        </div>
        <div>
          <br/>
          <TextField type="password" password="true"
            value={password}
            onChange={(e) => setPassword(e.target.value)} label="password" id="password" />
        </div>
        <br/>
        <Button type="submit" variant="contained">Register</Button>
        <br/>
        <Button onClick={handleLoginClick} variant="outlined">Go to Login</Button>
      </form>
      
    </div>
     
    );
}

export default App;