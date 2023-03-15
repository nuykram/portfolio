import { useState } from 'react'
import { connect } from "react-redux";
import { makeChoice } from "../state/actions";

import '../styles/App.css'

import Box from './Box';
import Navbar from './Navbar'
import LocationImageLoader from './LocationImageLoader'
import MainTextLoader from './MainTextLoader'
import OptionChoiceLoader from './OptionChoiceLoader'
import GameStartView from './GameStartView'
import GameStartFlavorText from './GameStartFlavorText'
import ProjectsView from './ProjectsView'
import ResumePdfView from './ResumePdfView'


const App = (props) => {
  // home, adventure, about, projects, resume
  // adventure-projects, adventure-resume
  const [view, setView] = useState('home');
  const renderSwitch = (view) => {
    switch (view) {
      case 'home':
        return {
          location: <></>,
          main: <GameStartView setView={setView}/>,
          options:<GameStartFlavorText />
        }
      case 'adventure':
        return {
          location: <LocationImageLoader
                      imageRef={
                        props.tags.background || 'wizardtower'
                      }
                    />,
          main:<MainTextLoader textArray={props.sceneText}/>,
          options:  <OptionChoiceLoader
                      choices={props.currentChoices}
                      makeChoice={props.makeChoice}
                    />
        }
      case 'about':
        return {
          location: <>about</>,
          main:<>about</>,
          options:<>about</>
        }
      case 'projects':
        return {
          location: <>projects</>,
          main:<>projects</>,
          options:<>projects</>
        }
      case 'resume':
        return {
          location: <>resume</>,
          main:<ResumePdfView />,
          options:<>resume</>
        }
    }
  }

  return (
    <div className='app'>

      <div className='header' >
        <Navbar />
      </div>

      <div className={`game-box ${view}`}>
        {/* Box Left Location */}
        <Box
          boxType='location'
          content={ renderSwitch(view).location }
        />
        <div className='game-box-right'>
          {/* Box Right Main */}
          <Box
            boxType='main'
            content={ renderSwitch(view).main }
          />
          {/* Box Right Options */}
          <Box
            boxType='option'
            content={ renderSwitch(view).options }
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
