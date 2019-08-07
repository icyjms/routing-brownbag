import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'

function Nav() {

  const navStyle ={
    color:'white'
  }

  return (
    <nav>
        <Link style={navStyle} to='/'>Home</Link>
        <ul className="nav-links">
          <Link style={navStyle} to='/about' >
            <li>About</li>
          </Link>
          <Link style={navStyle} to='/users'>
            <li>Users</li>
          </Link>
        </ul>
    </nav>
  );
}

export default Nav;
