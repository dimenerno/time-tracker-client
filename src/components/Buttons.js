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
            <div className='buttons'>
               <button className="timer-btn" onClick={startTimer}>Start</button>
            </div>
            )
         break;
      case 1:
         setOfButtons = (
            <div className='buttons'>
               <button className="timer-btn" onClick={pauseTimer}>Pause</button>
            </div>
            )
         break;
      case 2:
         setOfButtons = (
            <div className='buttons'>
               <button className="timer-btn" onClick={startTimer}>Resume</button>
               <button className="timer-btn" onClick={resetTimer}>Reset</button>
               <button className="timer-btn" onClick={submitTime}>Submit</button>
            </div>
            )
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
                  <button onClick={onSubmit} className='submit-btn'>
                     Submit
                  </button>
               </div>
            </div>)
         break;
   }

   return (
      <div>
         {setOfButtons}
      </div>
   )
}

export default Buttons
