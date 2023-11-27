import React from 'react';
import LoginForm from 'components/LoginForm/LoginForm';
import { LoginContainer } from './Login.styled';

const LoginPage = () => {
  return (
    <LoginContainer>
      <title>Log in</title>
      <LoginForm />
    </LoginContainer>
  );
};

export default LoginPage;