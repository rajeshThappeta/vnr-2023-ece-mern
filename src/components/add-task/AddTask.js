
import "./AddTask.css";
import { useForm } from "react-hook-form";
import { TasksContextObj } from "../../contexts/TasksContext";
import {useContext} from 'react'

function AddTask() {
  let { register, handleSubmit } = useForm();

  //access state from TaskContext
 let [tasks,setTasks]= useContext(TasksContextObj)

  function addingNewtask(taskObj) {
   setTasks([...tasks,taskObj.newTask])
  }

  

  return (
    <div>
      <p className="display-6 text-secondary">Add New Task</p>
      <form onSubmit={handleSubmit(addingNewtask)}>
        <input
          type="text"
          {...register("newTask")}
          id=""
          className="mb-3 form-control"
        />
        <button className="btn btn-success" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default AddTask;
