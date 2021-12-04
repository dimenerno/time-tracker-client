import React from 'react'

const Dropdown = ( {list_of_items, setviewBy, setshowViewBy} ) => {
   return (
      <div>
         <div className='dropdown-menu'>
            {list_of_items.map(key =>
               <button onClick={() => {setviewBy(key); setshowViewBy(false)}} >{key}</button>
            )}
         </div>
      </div>
   )
}

export default Dropdown
