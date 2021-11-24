import React from 'react'

const Buttons = ({timerState, startTimer, resetTimer, pauseTimer, submitTime}) => {
   var setOfButtons;

   switch(timerState) {
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
   }

   return (
      <div className='buttons'>
         {setOfButtons}
      </div>
   )
}

export default Buttons
