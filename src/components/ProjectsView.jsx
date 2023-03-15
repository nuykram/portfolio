import { useState,useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';

import * as Books from '../assets/svg/bookIndex.js'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import '../styles/ProjectView.css'

const ProjectsView = () => {
  const [items, setItems] = useState(['project1','project2','project3']);

  return (
    <div className='view-projects'>
      <Carousel
        className='carousel'
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={30}
      >
        {
          items.map((item,idx) => {
            const Book = Books[`b${idx + 1}`]
            return (
              <div className='card' key={idx}>
                <Book className ='card-image'/>
                <p className='card-text'>{item}</p>
              </div>
            )
          })
        }
      </Carousel>

    </div>
  )
}

export default ProjectsView