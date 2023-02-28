import { useState } from 'react'
import { connect } from "react-redux";

import '../styles/App.css'

import Box from './Box';
import Navbar from './Navbar'
import LocationImageLoader from './LocationImageLoader'


const App = (props) => {

  return (
    <div className='app'>
      <div className='header' >
        <Navbar />
      </div>
      <div className='game-box'>
        <Box
          boxType='location'
          content={
            <LocationImageLoader
              imageRef='wizardtower' //props.tag
            />
          }
        />
        <div className='game-box-right'>
          <Box
            boxType='main'
            content={<></>} //props.sceneText
          />
          <Box
            boxType='option'
            content={<></>} //props.currentChoices, props.makeChoice
          />
        </div>
      </div>
      <div className='footer' >
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
