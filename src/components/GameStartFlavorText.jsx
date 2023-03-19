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
    console.log({
      x: e.clientX,
      y: e.clientY
    })

    setCoords({
      x: e.clientX - e.target.offsetLeft,
      y: e.clientY - e.target.offsetTop
    })
  }



  return (
    <div className='game-start-flavortext-container'>
      <p className='game-start-flavortext'>
          Hello and welcome to my portfolio!
      </p>
      {
        wizardMeDamaged ?
          <WizardMeDamaged className='game-start-wizardme'/>
          :
          <WizardMe
            className='game-start-wizardme'
            onClick={(e)=>{damageMark(250, e)}}
          />
      }
      {
        wizardMeDamaged ?
          <p
            className='game-start-damage-text'
            style={{}}
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