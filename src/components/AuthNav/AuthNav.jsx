import React from 'react';
import { RegisterContainer, RegisterLink } from './AuthNav.styled';


export const AuthNavigation = () => {
  return (
    <RegisterContainer >
      <RegisterLink  to="/register">
        Sign up
      </RegisterLink>
      <RegisterLink   to="/login">
        Log in
      </RegisterLink>
    </RegisterContainer>
  );
};
