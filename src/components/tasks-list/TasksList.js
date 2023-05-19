import React from 'react'
import './TasksList.css'

function TasksList({tasks}) {
  return (
    <div>
       <p className="display-6 text-secondary">List of Tasks</p>
       {
        tasks.map((task,index)=><h3 key={index} className='text-primary'>{task}</h3>)
       }
    </div>
  )
}

export default TasksList