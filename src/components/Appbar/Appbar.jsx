import { useSelector } from 'react-redux';
import { userLoggedIn } from 'redux/selector';
import Navigation from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';
import { NavWrap, Header } from './Appbar.styled';

const AppBar = () => {
  const isLoggedIn = useSelector(userLoggedIn);

  return (
    <NavWrap>
      <Header >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
      </Header>
    </NavWrap>
  );
};

export default AppBar;
