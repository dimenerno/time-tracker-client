import React from 'react'
import { useState } from 'react';

const Buttons = ({ timerState, startTimer, resetTimer, pauseTimer, submitTime, onChange, onSubmit, category }) => {

   var setOfButtons;

   switch (timerState) {
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
               <label>
                  Name:
                  <input type="text" value={category} onChange={onChange} />
               </label>
               <input type="submit" value="Submit" />
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
