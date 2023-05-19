import React from 'react'
import './TasksCount.css'

function TasksCount({tasks}) {
  return (
    <div>
       <p className="display-6 text-secondary">Tasks count</p>
       <h1>{tasks.length}</h1>
    </div>
  )
}

export default TasksCount