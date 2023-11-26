import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'redux/selector';
import { userLogOut } from 'redux/AuthOperations';
import React from 'react';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <p>
        Welcome, {user.name} ({user.email})
      </p>
      <button type="submit" onClick={() => dispatch(userLogOut())}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
