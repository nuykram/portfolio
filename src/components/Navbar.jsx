import { useState } from 'react'
import '../styles/Navbar.css'

import { ReactComponent as Logo} from '../assets/svg/logo.svg';
import { ReactComponent as GithubIcon} from '../assets/svg/github.svg';

const githubLink = 'https://github.com/nuykram'

const Navbar = ({setView}) => {

  const openGithub = (link) => {
    window.open(link, "_blank", "noreferrer");
  }

  return (
    <div className='navbar'>
      <div
        className='navbar-logo'
        onClick={()=>{setView('home')}}
      >
        <Logo />
      </div>
      <div className='navbar-buttons'>
        <button
          name='about'
          onClick={()=>{setView('about')}}
        >
          &#62;About
        </button>
        <button
          name='projects'
          onClick={()=>{setView('projects')}}
        >
          &#62;Projects
        </button>
        <button
          name='resume'
          onClick={()=>{setView('resume')}}
        >
          &#62;Resume
        </button>
        <button
          name='github'
          onClick={()=>{openGithub(githubLink)}}
        >
          <GithubIcon />
        </button>
      </div>
    </div>
  )
}

export default Navbar
