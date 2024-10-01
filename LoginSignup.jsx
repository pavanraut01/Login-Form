import React, { useState } from 'react';
import './LoginSignup.css'; 


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Email validation
  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  // Password validation (At least 8 chars, 1 special char, 1 alphabet, 1 number)
  const validatePassword = (password) => {
    const passwordPattern = /^(?=.[a-zA-Z])(?=.[0-9])(?=.*[\W_]).{8,}$/;
    return passwordPattern.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!validateEmail(email)) {
      validationErrors.email = 'Invalid email. Must contain "@" and end with ".com".';
    }

    if (!validatePassword(password)) {
      validationErrors.password = 'Password must be at least 8 characters, include 1 letter, 1 number, and 1 special character.';
    }

    if (!rememberMe) {
      validationErrors.rememberMe = 'Please check the "Remember me" checkbox to proceed.';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      alert('Login successful!');
    }
  };

  const handleForgotPassword = () => {
    alert('Redirect to forgot password page or handle reset logic');
  };

  const handleNewAccount = () => {
    alert('Redirect to registration page.');
  };

  return (
    <div className="login-form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email ID</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>
        <div>
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <label>Remember me</label>
          {errors.rememberMe && <span className="error">{errors.rememberMe}</span>}
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleForgotPassword}>Forgot Password?</button>
      <button onClick={handleNewAccount}>Create New Account</button>

      {isSubmitted && <p>Welcome! You have successfully logged in.</p>}
    </div>
  );
};

export default LoginForm;