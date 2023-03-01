import { useState,useEffect } from 'react'
import '../styles/MainTextLoader.css'


const MainTextLoader = ({textArray}) => {

  const [textStore, setTextStore] = useState([]);

  useEffect(
    ()=>{
      setTextStore([...textStore,...textArray])
    },
    [textArray]
  )

  return (
    <div className='main-textloader'>
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
    </div>
  )
}

export default MainTextLoader