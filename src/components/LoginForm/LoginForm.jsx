import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/AuthOperations';
import Notiflix from 'notiflix';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [hasError, setHasError] = useState({ email: false, password: false });

  const handleChange = e => {
    const { name } = e.target;
    setHasError(prevErrors => ({ ...prevErrors, [name]: false }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const { email, password } = form.elements;

    if (!email.value || !password.value) {
      Notiflix.Notify.failure('Please, enter your information!',{
        position: 'center-top',
        distance: '10px',
      });
      setHasError({
        email: !email.value,
        password: !password.value,
      });
      return;
    }

    dispatch(userLogin({ email: email.value, password: password.value }));
    form.reset();
  };

  return (
    <div>
      <h2>Log in</h2>
      <form  onSubmit={handleSubmit} autoComplete="off">
        <label >Email</label>
        <input
        
          type="email"
          name="email"
          onChange={handleChange}
        />
        <label >Password</label>
        <input
        
          type="password"
          name="password"
          onChange={handleChange}
        />
        <button  type="submit">
          Log In
        </button>
      </form>
      <p >Don't have an account? <Link  to="/register">Register now!</Link> </p>
    </div>
  );
};

export default LoginForm;