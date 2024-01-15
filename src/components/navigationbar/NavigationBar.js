import React from 'react';
import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';

export const NavigationBar = () => {
  //   const dispatch = useDispatch();
  //   const navigate = useNavigate();

  return (
    <header>
      <NavLink to="/contacts">Contacts</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/register">Register</NavLink>
    </header>
  );
};
