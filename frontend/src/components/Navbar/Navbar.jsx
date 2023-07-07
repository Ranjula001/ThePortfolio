import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion'

import './Navbar.scss';

import {images} from '../../constants';

const Navbar = () => {

  const [toggle, SetToggle] = useState(false);

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

      <div className="app__navbar-mobileMenu">
        <HiMenuAlt4 onClick={() => SetToggle(true)}/>

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={ { duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => SetToggle(false)} />
            <ul>
            {['HOME', 'ABOUT', 'SKILLS', 'PROJECTS','CONTACTS'].map( (list) => (
              <li key={list}>
                <a href={`#${list}`} onClick={() => SetToggle(false)}>{list}</a>
              </li>
            ))}
            </ul>
          </motion.div>
        )}

      </div>

    </nav>
  )
}

export default Navbar