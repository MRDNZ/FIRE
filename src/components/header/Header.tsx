import * as React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/hello">Hello</Link></li>
        <li><Link to="/form">Form</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;