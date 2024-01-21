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
      <nav className={css.nav}>
        <React.Fragment>
          <NavLink className={css.navLink} activeClassName="active" to="/">
            Home
          </NavLink>
          <NavLink
            className={css.navLink}
            activeClassName={css.active}
            to="/contacts"
          >
            Contacts
          </NavLink>
          {isLogged ? (
            <button to="/login" onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <React.Fragment>
              <NavLink
                className={css.navLink}
                activeClassName={css.active}
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className={css.navLink}
                activeClassName={css.active}
                to="/register"
              >
                Register
              </NavLink>
            </React.Fragment>
          )}
        </React.Fragment>
      </nav>
    </header>
  );
};
