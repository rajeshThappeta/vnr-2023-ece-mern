import { useState } from "react";
import "./ManageTasks.css";
import AddTask from "../add-task/AddTask";
import TasksList from "../tasks-list/TasksList";
import TasksCount from "../tasks-count/TasksCount";

function ManageTasks() {
  //state of AddTask component
  let [tasks, setTasks] = useState([]);

  return (
    <div className="container text-center">
      <p className="display-2 text-center text-info">Tasks Management</p>
      {/* nest 3 components */}
      <div className="row">
        <div className="col-sm-4">
          <AddTask tasks={tasks} setTasks={setTasks} />
        </div>
        <div className="col-sm-4">
          <TasksList tasks={tasks} />
        </div>
        <div className="col-sm-4">
          <TasksCount tasks={tasks} />
        </div>
      </div>
    </div>
  );
}

export default ManageTasks;
