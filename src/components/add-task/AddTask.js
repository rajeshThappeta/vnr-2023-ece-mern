import {useState} from 'react'
import './AddTask.css'
import {useForm} from 'react-hook-form'

function AddTask({tasks,setTasks}) {

 
  let {register,handleSubmit}=useForm()

  function addingNewtask(taskObj){
    
    setTasks([...tasks,taskObj.newTask])
  }

  console.log(tasks)

  return (
    <div>
      <p className="display-6 text-secondary">Add New Task</p>
      <form onSubmit={handleSubmit(addingNewtask)}>
        <input type="text" {...register("newTask")} id="" className="mb-3 form-control" />
        <button className="btn btn-success" type="submit">Add</button>
      </form>
    </div>
  )
}

export default AddTask