import { useState } from 'react'
import '../styles/LocationImageLoader.css'
import * as LocationPics from '../assets/svg'
// import { ReactComponent as WizardTower} from '../assets/svg/loc-wizardtower.svg';
// import { ReactComponent as TreePath} from '../assets/svg/loc-treepath.svg';

const LocationImageLoader = ({imageRef}) => {

  const Picture = LocationPics[imageRef]

  return (
    <div className='location-imageloader'>
      <Picture />
    </div>
  )
}

export default LocationImageLoader