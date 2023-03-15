import { useState } from 'react'
import { connect } from "react-redux";
import { makeChoice } from "../state/actions";

import '../styles/App.css'

import Box from './Box';
import Navbar from './Navbar'
import LocationImageLoader from './LocationImageLoader'
import MainTextLoader from './MainTextLoader'
import OptionChoiceLoader from './OptionChoiceLoader'
import { ReactComponent as TitleCard } from '../assets/svg/game-title.svg'

import ProjectsView from './ProjectsView'

const App = (props) => {
  const [view, setView] = useState('home'); //home, adventure, about, projects, resume




  return (
    <div className='app'>
      <div className='header' >
        <Navbar />
      </div>
      <div className={view === 'home' ? 'game-box home' : 'game-box'}>
        <Box
          boxType='location'
          content={
            <></>
            // <LocationImageLoader
            //   imageRef={props.tags.background || 'wizardtower'}
            // />
          }
        />
        <div className='game-box-right'>
          <Box
            boxType='main'
            content={
              <><TitleCard className='main-title-card'/></>
              // false ?
              // <ProjectsView />
              // :
              // <MainTextLoader
              //   textArray={props.sceneText}
              // />
            }
          />
          <Box
            boxType='option'
            content={
              <></>
              // <OptionChoiceLoader
              //   choices={props.currentChoices}
              //   makeChoice={props.makeChoice}
              // />
            }
          />
        </div>
      </div>
      <div className='footer' >
        <p>Made with ❤️ and Vite⚡</p>
      </div>
    </div>
  )
}

const stateToProps = state => ({
  tags: state.tags,
  currentChoices: state.currentChoices,
  sceneText: state.sceneText,
  ending: state.ending
});
const dispatchToProps = dispatch => ({
  makeChoice: idx => dispatch(makeChoice(idx))
});

export default connect(stateToProps, dispatchToProps)(App);
