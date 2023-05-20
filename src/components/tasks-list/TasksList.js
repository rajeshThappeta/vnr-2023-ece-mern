import {useContext} from 'react'
import './TasksList.css'
import { TasksContextObj } from '../../contexts/TasksContext';


function TasksList() {


  //access from Context store
  let [tasks,setTasks]=useContext(TasksContextObj)

  return (
    <div>
       <p className="display-6 text-secondary">List of Tasks</p>
      {
        tasks.map((task,ind)=><h5 key={ind}>{task}</h5>)
      }
    </div>
  )
}

export default TasksList