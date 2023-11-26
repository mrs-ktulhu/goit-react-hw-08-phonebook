import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userLoggedIn } from 'redux/selector';
import React from 'react';

const Navigation = () => {
  const isLoggedIn = useSelector(userLoggedIn);
  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && <Link to="/contacts">Contacts</Link>}
    </nav>
  );
};

export default Navigation;
