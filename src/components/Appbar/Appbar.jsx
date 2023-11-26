import { useSelector } from 'react-redux';
import { userLoggedIn } from 'redux/selector';
import Navigation from 'components/Navigation/Navigation';
import { AuthNavigation } from 'components/AuthNav/AuthNav';
import UserMenu from 'components/UserMenu/UserMenu';

const AppBar = () => {
  const isLoggedIn = useSelector(userLoggedIn);

  return (
    <header >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
};

export default AppBar;