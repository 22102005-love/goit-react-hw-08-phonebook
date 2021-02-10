import React from 'react';
import { NavLink } from 'react-router-dom';
const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#0000ff',
    composes: 'link',
  },
};
const Navigation = () => {
  return (
    <NavLink
      exact
      to="/contacts"
      style={styles.link}
      activeStyle={styles.activeLink}
    >
      Контакты
    </NavLink>
  );
};
export default Navigation;
