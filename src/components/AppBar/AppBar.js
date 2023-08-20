import { useSelector } from 'react-redux';

import authSelectors from 'redux/auth/auth-selectors';

import s from './AppBar.module.css';
import Navigation from 'components/Navigation';
import AuthNavigation from 'components/AuthNavigation';
import UserMenu from 'components/UserMenu';

function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsloggedIn);

  return (
    <header className={s.header}>
      <b>Телефонна книга</b>

      {isLoggedIn ? <Navigation /> : ''}
      {isLoggedIn ? <UserMenu /> : <AuthNavigation />}
    </header>
  );
}

export default AppBar;
