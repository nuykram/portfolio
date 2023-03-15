import '../styles/OptionStart.css';

import { ReactComponent as Sword } from '../assets/svg/sword-pointer.svg'

const OptionStart = ({setView}) => {


  return (
    <div className='start-options-container'>
      <div className='start-options-select'>
        <button
          onClick={ ()=>{setView('adventure')} }
        >Start Game</button>
        <Sword className='start-options-select-sword'/>
      </div>
      <div className='start-options-select'>
        <button
          onClick={ ()=>{setView('resume')} }
        >Skip to Resume</button>
        <Sword className='start-options-select-sword'/>
      </div>
    </div>
  );
}

export default OptionStart;