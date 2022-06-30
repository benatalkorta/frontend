import React from 'react';
import './styles.css';

const Header = () => {
  // eslint-disable-next-line no-restricted-globals
  const path = location.pathname;
  const header = path === '/login' ? 'Login' : 'Home'
  return (
    <h1>
      Infineon Home
    </h1>
  )
}

export default Header;
