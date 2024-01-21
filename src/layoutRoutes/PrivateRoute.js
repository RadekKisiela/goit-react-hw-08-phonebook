import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLogged, isRefreshing } = useAuth();
  const redirectToRather = !isLogged && !isRefreshing;
  return redirectToRather ? <Navigate to={redirectTo} /> : <Component />;
};
