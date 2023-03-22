import { useState } from 'react'
import '../styles/GameStartFlavorText.css'
import { ReactComponent as WizardMe } from '../assets/svg/wizard-me.svg'
import { ReactComponent as WizardMeDamaged } from '../assets/svg/wizard-me-dmg.svg'




const GameStartFlavorText = () => {

  const [wizardMeDamaged, setWizardMeDamaged] = useState(false)
  const [coords, setCoords] = useState({x: 0, y: 0});

  const damageMark = (ms, e) => {
    setWizardMeDamaged(true)
    handlePosition(e)
    setTimeout(() => {
      setWizardMeDamaged(false)
    }, ms);
  }

  const handlePosition = (e) => {
    // console.log({
    //   x: e.target.offsetLeft,
    //   y: e.target.offsetLeft
    // })
    var rect = e.target.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }



  return (
    <div className='game-start-flavortext-container'>
      <div className='game-start-flavortext'>
        <p>
          Hello and welcome to my portfolio!
        </p>
        <p>
          It's still a work in progress!
        </p>
        <p>
          Please don't attack me!
        </p>
      </div>
      {
        wizardMeDamaged ?
          <WizardMeDamaged className='game-start-wizardme'/>
          :
          <WizardMe
            className='game-start-wizardme'
            onClick={(e)=>{damageMark(300, e)}}
          />
      }
      {
        wizardMeDamaged ?
          <p
            className='game-start-damage-text'
            style={
              {
                left:`${coords.x}px`,
                top:`${coords.y}px`,
                animation: 'fadeUpAndOut .75s'
              }
            }
          >
              -{Math.floor(Math.random() * 9) + 1} HP
          </p>
          :
          null
      }
    </div>
  );
}

export default GameStartFlavorText;