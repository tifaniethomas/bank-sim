import { useState } from 'react';
import Pig from '../../images/little-pig.png'
import * as usersService from '../../utilities/users-service';
import '../LoginForm/LoginForm.css'

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    // Prevent form from being submitted to the server
    evt.preventDefault();
    try {
      // The promise returned by the signUp service method 
      // will resolve to the user object included in the
      // payload of the JSON Web Token (JWT)
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className="auth-banner">
      <img src={Pig} alt="Piggy bank with coin half inserted." />
        <p className='banner-text'>Open a savings account today to start putting away for a rainy day!</p>
      <div className="login-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label><p>Email</p></label>
          <input type="text" name="email" value={credentials.email} onChange={handleChange} required />
          <label><p>Password</p></label>
          <input type="password" name="password" value={credentials.password} onChange={handleChange} required />
          <button type="submit">Sign in</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}