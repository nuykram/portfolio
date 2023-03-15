import '../styles/GameStartFlavorText.css'
import { ReactComponent as WizardMe } from '../assets/svg/wizard-me.svg'

const GameStartFlavorText = () => {
  return (
    <div className='game-start-flavortext-container'>
      <p className='game-start-flavortext'>
        Hello and welcome to my portfolio!
      </p>
      <WizardMe className='game-start-wizardme'/>
    </div>
  );
}

export default GameStartFlavorText;