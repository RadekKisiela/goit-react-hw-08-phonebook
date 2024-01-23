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

  return (
    <header className={css.header}>
      <div className={css.div}>
        <React.Fragment>
          <nav id="navLink">
            <NavLink className={css.navLink} end to="/">
              Home
            </NavLink>
          </nav>
          <NavLink className={css.navLink} to="/contacts">
            Contacts
          </NavLink>
          {isLogged ? (
            <button className={css.logoutButton} onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <React.Fragment>
              <NavLink className={css.navLink} to="/login">
                Login
              </NavLink>
              <NavLink className={css.navLink} to="/register">
                Register
              </NavLink>
            </React.Fragment>
          )}
        </React.Fragment>
      </div>
    </header>
  );
};
