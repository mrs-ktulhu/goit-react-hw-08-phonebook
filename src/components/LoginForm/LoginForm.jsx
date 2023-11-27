import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { userLogin } from 'redux/AuthOperations';
import Notiflix from 'notiflix';
import { Link } from 'react-router-dom';
import { LoginWrap, LoginBtn, LoginInput } from './LoginForm.styled';

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
      Notiflix.Notify.failure('Please, enter your information!', {
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
    <LoginWrap>
      <h2>Log in</h2>
      <form onSubmit={handleSubmit} autoComplete="off">
        <LoginInput>
          Email
          <br />
          <input type="email" name="email" onChange={handleChange} required />
        </LoginInput>
        <br />

        <LoginInput>
          Password
          <br />
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
        </LoginInput>

        <br />

        <LoginBtn type="submit">Log In</LoginBtn>
      </form>
      <p>
        Don't have an account? <Link to="/register">Sign up now!</Link>{' '}
      </p>
    </LoginWrap>
  );
};

export default LoginForm;
