import '../styles/OptionChoiceLoader.css'

const OptionChoiceLoader = ({choices, makeChoice}) => {

  return (
    <div className='option-choiceloader'>
      {
        choices.map(
          (choice) => (
            <p
              onClick={
                ()=>{
                  makeChoice(choice.index)
                }
              }
              key={choice.index}
            >
              {choice.text}
            </p>
          )
        )
      }
    </div>
  )
}

export default OptionChoiceLoader