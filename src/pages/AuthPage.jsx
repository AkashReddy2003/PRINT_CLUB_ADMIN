// App.js
import React, { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const {signin}=useContext(AuthContext);

  return (
    <div style={styles.container}>
      <h2>Admin Login</h2>
      <div style={styles.form}>
        {error && <p style={styles.error}>{error}</p>}
        <div style={styles.inputGroup}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button} onClick={()=>signin(email,password)}>
          Login
        </button>
      </div>
    </div>
  );
}

// Basic inline styles for demo purposes
const styles = {
  container: {
    width: '300px',
    margin: '100px auto',
    border: '1px solid #ddd',
    borderRadius: '10px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
    padding: 50,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '8px',
    margin: '5px 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    marginBottom: '10px',
  },
};

export default AuthPage;
