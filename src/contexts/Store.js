import {useState} from 'react';
import { TasksContextObj } from './TasksContext';

function Store({children}) {

    //state
    let [tasks,setTasks]=useState([])

  return (
    <TasksContextObj.Provider value={[tasks,setTasks]}>
        {children}
    </TasksContextObj.Provider>
  )
}

export default Store