import React from 'react'
import "./Footer.css"

function Footer({completedtasks,incompletedtasks,totaltasks}) {
  return (
    <div className='check-tasks'>
        <span>TotalTasks:{totaltasks}</span>
        <span>Incompleted Tasks:{incompletedtasks}</span>
        <span>Completed Tasks: {completedtasks}</span>
        
        
    </div>
  )
} 

export default Footer
