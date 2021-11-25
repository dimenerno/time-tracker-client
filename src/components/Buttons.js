import React from 'react'

const Buttons = ({ timerState, startTimer, resetTimer, pauseTimer, submitTime, onChange, onSubmit, category }) => {

   var setOfButtons;

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
            <form onSubmit={onSubmit}>
               <input type="text" placeholder="Which category?" value={category} onChange={onChange} />
               <div className="submit-input">
                  <input type="submit" value="Submit" />
               </div>
            </form>)
         break;
   }

   return (
      <div className='buttons'>
         {setOfButtons}
      </div>
   )
}

export default Buttons
