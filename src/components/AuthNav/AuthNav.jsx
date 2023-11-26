import { Link } from 'react-router-dom';
import React from 'react';

export const AuthNavigation = () => {
  return (
    <div >
      <Link to="/register">
        Register
      </Link>
      <Link  to="/login">
        Log in
      </Link>
    </div>
  );
};
