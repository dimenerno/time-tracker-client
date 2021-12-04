import React from 'react'
import ReportsDay from './ReportsDay'
import ReportsMonth from './ReportsMonth'
import ReportsYear from './ReportsYear'

const Reports = ({viewBy}) => {
   switch(viewBy) {
      case 'Day':
         return (
            <div className="wrapper">
               <ReportsDay />
            </div>
         )
      case 'Month':
         return (
            <div className="wrapper">
               <ReportsMonth />
            </div>
         )
      case 'Year':
         return (
            <div className="wrapper">
               <ReportsYear />
            </div>
         )
   }
}

export default Reports
