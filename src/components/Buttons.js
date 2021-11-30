import React from 'react'

const Buttons = ({ timerState, startTimer, resetTimer, pauseTimer, submitTime, setCategory, onSubmit, category }) => {

   var setOfButtons;

   const buttonSelected = key => e => {
      setCategory(key)
   }

   switch (timerState) {
      default:
      case 0:
         setOfButtons = (
            <ul>
               <li><button onClick={startTimer}>Start</button></li>
            </ul>)
         break;
      case 1:
         setOfButtons = (
            <ul>
               <li><button onClick={pauseTimer}>Pause</button></li>
            </ul>)
         break;
      case 2:
         setOfButtons = (
            <ul>
               <li><button onClick={startTimer}>Resume</button></li>
               <li><button onClick={resetTimer}>Reset</button></li>
               <li><button onClick={submitTime}>Submit</button></li>
            </ul>)
         break;
      case 3:
         setOfButtons = (
            <div className='submit'>
               <div className='select-category'>
                  <h3>Select a category</h3>
                  <div className='list-of-categories'>
                     {['Study', 'Read', 'Work', 'Exercise', 'Leisure'].map(key =>
                        <button className={key === category ? 'selected' : ''} onClick={buttonSelected(key)}>{key}</button>
                     )}
                  </div>
                  <button onClick={onSubmit} className='submitbtn'>
                     Submit
                  </button>
               </div>
            </div>)
         break;
   }

   return (
      <div className='buttons'>
         {setOfButtons}
      </div>
   )
}

export default Buttons
