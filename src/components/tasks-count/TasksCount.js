import {useContext} from 'react'
import './TasksCount.css'
import { TasksContextObj } from '../../contexts/TasksContext'

function TasksCount() {

   //access from Context store
   let [tasks,setTasks]=useContext(TasksContextObj)

  return (
    <div>
       <p className="display-6 text-secondary">Tasks count</p>
      <h1>{tasks.length}</h1>
    </div>
  )
}

export default TasksCount