import { useState,useEffect } from 'react'
import { Carousel } from 'react-responsive-carousel';
import ReactMarkdown from 'react-markdown';


import * as Books from '../assets/svg/bookIndex.js'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import '../styles/ProjectView.css'

class Project{
  constructor(project_id){
    /**@todo express call here? */
    /**@todo store results here? */
    this.markdown = '' /**@todo add markdown */
  }
}

const ProjectsView = () => {

  const [items, setItems] = useState(['project1','project2','project3']);

  /**
   *  @todo consider what should be the api call usage
   *  onCarouselSwitch -> api usage X according to user clicks
   *  onMount -> go loop thru static state, get all projects and mount
   *  stateStorage -> have state foreach project, if missing content, run fetch call and store
   */

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