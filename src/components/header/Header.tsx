import * as React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => (
  <div>
    <p>HEADER</p>
    <ul>
      <li><Link to="/">APP</Link></li>
      <li><Link to="/404">NOT FOUND</Link></li>
    </ul>
  </div>
);

export default Header;