import { NavLink } from 'react-router-dom';
import React from 'react';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#000ff',
  },
};
export default function AuthorNavigation() {
  return (
    <>
      <NavLink
        to="/register"
        // exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Регистрация
      </NavLink>
      <NavLink
        to="/login"
        // exact
        style={styles.link}
        activeStyle={styles.activeLink}
      >
        Логин
      </NavLink>
    </>
  );
}
