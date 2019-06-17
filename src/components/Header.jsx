import React from 'react';
import { Link } from '@reach/router'
import '../styling/Header.css'

const Header = () => {
  return (
    <header className="Header">
      <Link to='/map'>map</Link> | <Link to='/schedule'>schedule</Link> | <Link to='social'>social</Link> | <Link to='info'>info</Link>
    </header>
  );
};

export default Header;