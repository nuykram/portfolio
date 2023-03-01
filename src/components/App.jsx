import { useState } from 'react'
import { connect } from "react-redux";
import { makeChoice } from "../state/actions";

import '../styles/App.css'

import Box from './Box';
import Navbar from './Navbar'
import LocationImageLoader from './LocationImageLoader'
import MainTextLoader from './MainTextLoader'
import OptionChoiceLoader from './OptionChoiceLoader'

const App = (props) => {
  console.log(props)
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
              imageRef={props.tags.background || 'wizardtower'}//props.tags.background || 'wizardtower'
            />
          }
        />
        <div className='game-box-right'>
          <Box
            boxType='main'
            content={
              <MainTextLoader
                textArray={props.sceneText}
              />}
          />
          <Box
            boxType='option'
            content={
              <OptionChoiceLoader
                choices={props.currentChoices}
                makeChoice={props.makeChoice}
              />
            }
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
