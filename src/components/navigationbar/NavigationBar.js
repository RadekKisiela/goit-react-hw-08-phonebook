import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { logOut } from '../../redux/actions';
import css from './NavigationBar.module.css';

export const NavigationBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLogged } = useAuth();

  const handleLogout = () => {
    dispatch(logOut());
    navigate('/login');
  };

  const navLinkStyles = ({ isActive }) =>
    [css.navLink, isActive ? css.activeNavLink : ''].join(' ');

  return (
    <header className={css.header}>
      <div className={css.div}>
        <React.Fragment>
          <NavLink className={navLinkStyles} to="/">
            Home
          </NavLink>
          <NavLink className={navLinkStyles} to="/contacts">
            Contacts
          </NavLink>
          {isLogged ? (
            <button className={css.logoutButton} onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <React.Fragment>
              <NavLink className={navLinkStyles} to="/login">
                Login
              </NavLink>
              <NavLink className={navLinkStyles} to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
        </React.Fragment>
      </div>
    </header>
  );
};
