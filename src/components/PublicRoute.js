import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PublicRoute({
  children,
  restricted = false,
  navigateTo = '/',
  ...routeProps
}) {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to={navigateTo} /> : children;
}

export default PublicRoute;
