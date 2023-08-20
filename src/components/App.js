import { Route, Routes } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import authOperations from 'redux/auth/auth-operations';
import authSelectors from 'redux/auth/auth-selectors';

import Container from './Container';
import AppBar from './AppBar';
import LoginView from '../views/LoginView';
import RegisterView from '../views/RegisterView';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';
import ContactsView from 'views/ContactsView';
import FavoriteContactsView from 'views/ContactsView/FavoriteContactsViews';
import UserInfoView from 'views/UserInfoView';

const App = () => {
  const dispatch = useDispatch();
  const isRefreshingCurrentUser = useSelector(
    authSelectors.getIsRefreshingUser
  );

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch]);
  return (
    <Container>
      {!isRefreshingCurrentUser && (
        <>
          <AppBar />

          <Routes>
            <Route
              path="/login"
              element={
                <PublicRoute
                  restricted
                  navigateTo="/contacts"
                  children={<LoginView />}
                />
              }
            />
            <Route
              path="/register"
              element={
                <PublicRoute
                  restricted
                  navigateTo="/contacts"
                  children={<RegisterView />}
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute navigateTo="/login" children={<ContactsView />} />
              }
            />
            <Route
              path="/favoriteContacts"
              element={
                <PrivateRoute
                  navigateTo="/login"
                  children={<FavoriteContactsView />}
                />
              }
            />
            <Route
              path="/userInfo"
              element={
                <PrivateRoute navigateTo="/login" children={<UserInfoView />} />
              }
            />
          </Routes>
        </>
      )}
    </Container>
  );
};

export default App;
