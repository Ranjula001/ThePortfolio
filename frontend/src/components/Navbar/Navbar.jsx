import React from 'react';

import './Navbar.scss';

import {images} from '../../constants';

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="Mylogo" />
      </div>
      <ul className="app__navbar-list">
        {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS','CONTACTS'].map( (list) => (
          <li className="app__flex p-text" key={`link-${list}`}>
            <div />
            <a href={`#${list}`}>{list}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar