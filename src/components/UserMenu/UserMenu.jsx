import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/selector';
import { userLogOut } from 'redux/AuthOperations';
import React from 'react';
import { UserBarWrap, Greetings, BtnLogout } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <UserBarWrap>
      <Greetings>
        Welcome, {user.name} ({user.email})
      </Greetings>
      <BtnLogout type="submit" onClick={() => dispatch(userLogOut())}>
        Log out
      </BtnLogout>
    </UserBarWrap>
  );
};

export default UserMenu;
