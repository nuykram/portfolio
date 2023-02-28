import { useState } from 'react'
import '../styles/Navbar.css'

import { ReactComponent as Logo} from '../assets/svg/logo.svg';
import { ReactComponent as GithubIcon} from '../assets/svg/github.svg';
function Navbar() {

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <Logo />
      </div>
      <div className='navbar-buttons'>
        <button name='about'>
          &#62;About
        </button>
        <button name='projects'>
          &#62;Projects
        </button>
        <button name='resume'>
          &#62;Resume
        </button>
        <button name='github'>
          <GithubIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar
