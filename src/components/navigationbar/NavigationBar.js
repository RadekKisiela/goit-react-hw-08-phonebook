import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from '../../redux/actions';

export const NavigationBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogged } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/login');
  };

  return (
    <header>
      <nav>
        <React.Fragment>
          <NavLink activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          {isLogged ? (
            <button to="/login" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <React.Fragment>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </React.Fragment>
          )}
        </React.Fragment>
      </nav>
    </header>
  );
};
