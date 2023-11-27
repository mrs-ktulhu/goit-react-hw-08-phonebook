
import { useSelector } from 'react-redux';
import { userLoggedIn } from 'redux/selector';
import React from 'react';
import { NavigationBar,HomeLink } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(userLoggedIn);
  return (
    <NavigationBar>
      <HomeLink className="header-link"to="/">Home</HomeLink>
      {isLoggedIn && <HomeLink className="header-link" to="/contacts">Contacts</HomeLink>}
    </NavigationBar>
  );
};

export default Navigation;
