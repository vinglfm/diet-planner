import React, {Component} from 'react';
const {NavLink} = require('react-router-dom');
import './navbar.scss';

export class Navbar extends Component {

  render() {
    return (
      <nav className='navbar'>
        <NavLink className='navbar__brand' to='/'>Diet planner</NavLink>
        <span className='navbar--right'>
          <NavLink className='navbar__link navbar__link--right' to='/calendar'>Calendar</NavLink>
          <NavLink className='navbar__link navbar__link--right' to='/products'>Products</NavLink>
          <NavLink className='navbar__link navbar__link--right' to='/logout'>Logout</NavLink>
        </span>
      </nav>
    );
  }
}
