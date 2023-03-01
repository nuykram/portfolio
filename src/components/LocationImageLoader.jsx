import { useState } from 'react'
import '../styles/LocationImageLoader.css'
import * as LocationPics from '../assets/svg'

const LocationImageLoader = ({imageRef}) => {

  const Picture = LocationPics[imageRef]

  return (
    <div className='location-imageloader'>
      <Picture />
    </div>
  )
}

export default LocationImageLoader