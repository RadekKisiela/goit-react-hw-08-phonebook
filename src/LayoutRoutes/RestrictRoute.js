import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const RestrictRoute = ({ children, redirectTo = '/' }) => {
  const { isLogged } = useAuth();
  return isLogged ? <Navigate to={redirectTo} /> : children;
};
