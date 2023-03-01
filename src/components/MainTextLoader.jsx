import { useState,useEffect, useRef } from 'react'
import '../styles/MainTextLoader.css'


const MainTextLoader = ({textArray}) => {
  const [textStore, setTextStore] = useState([]);
  const currentTextRef = useRef(null)
  const executeScroll = () => currentTextRef.current.scrollIntoView({ behavior: 'smooth' });
  useEffect(
    ()=>{
      setTextStore([...textStore,...textArray])
      executeScroll()
    },
    [textArray]
  )

  return (
    <div className='main-textloader'>
      <div className='main-text-container'>
        {
          textStore.length != 0 ?
            textStore.slice(0,(-1*textArray.length)).map(
              (text,idx) => (
                <p
                  className='main-text stored'
                  key={idx}
                >
                    {text}
                </p>)
            )
            :
            null
        }
        {
          textArray.map(
            (text) => {
              return (
                <p
                  className='main-text typewriter'
                  key={(Math.random() + 1).toString(36).substring(7)}
                >
                  {text}
                </p>
              )
            }
          )
        }
        <div className='bottom-anchor' ref={currentTextRef}></div>
      </div>
    </div>
  )
}

export default MainTextLoader