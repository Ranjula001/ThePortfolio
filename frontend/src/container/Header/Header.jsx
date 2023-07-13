import React from 'react'

import { motion } from 'framer-motion';
import { images } from '../../constants';

import './Header.scss'

const scaleObjects = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition:{ duration: 2, ease:'easeInOut'}
  }
}

const Header = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{x:[-100,0], opacity: [0,1]}}
        transition={{duration: 0.5}}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>
              👋😁
            </span>
            <div style={{marginLeft:20}}>
              <p className="p-Hello">Hello, I am</p>
              <h1 className="p-Me">Ranjula Ilukpitiya</h1>
              <p>from SRI-LANKA 🇱🇰</p>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-Hello">3rd-Year Undergraduate at SLIIT</p>
          </div>

        </div>
      </motion.div>

      <motion.div 
        whileInView={{x:[-100,0], opacity: [0,1]}}
        transition={{duration: 1, delayChildren: 0.5}}
        className="app__header-img">
          <img src={images.profile} alt="profilePicture" />
          <motion.img
            whileInView={{scale:[0,1]}}
            transition={{duration: 3, ease:'easeInOut'}}
            
            src={images.circle} alt="circle"
            className="overlay_circle"
          ></motion.img>

        </motion.div>

        <motion.div 
          variants={scaleObjects}
          whileInView={scaleObjects.whileInView}
          className="app__header-circles"
        >
          {[images.mongo, images.react, images.node].map((circle, index)=>(
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={circle} alt='circle'/>
            </div>
          ))}
        </motion.div>

    </div>
  )
}

export default Header