import React from 'react'
import { useEffect, useRef } from 'react';

const Dropdown = ( {list_of_items, setviewBy, setshowViewBy} ) => {
   const ref = useRef(null)

   const handleClickOutside = (event) => {
      if(ref.current && !ref.current.contains(event.target))
         setshowViewBy(false)
   }

   useEffect(() => {
      document.addEventListener('click', handleClickOutside, true);
      return () => {
         document.removeEventListener('click', handleClickOutside, true);
      };
   })

   return (
      <div>
         <div ref={ref} className='dropdown-menu'>
            {list_of_items.map(key =>
               <button onClick={() => {setviewBy(key); setshowViewBy(false)}} >{key}</button>
            )}
         </div>
      </div>
   )
}

export default Dropdown
