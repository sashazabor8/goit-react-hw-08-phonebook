import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PrivateRoute({ children, navigateTo = '/', ...routeProps }) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  return isLoggedIn ? children : <Navigate to={navigateTo} />;
}

export default PrivateRoute;
