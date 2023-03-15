import '../styles/GameStartView.css';
import OptionStart from './OptionStart'
import { ReactComponent as TitleCard } from '../assets/svg/game-title.svg'


const GameStartView = ({setView}) => {
  return (
    <div className='game-start-view-container'>
      <TitleCard className='main-title-card'/>
      <OptionStart setView={setView}/>
    </div>
  );
}

export default GameStartView;