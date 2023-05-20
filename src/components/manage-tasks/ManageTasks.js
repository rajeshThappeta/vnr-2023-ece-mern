import { useState } from "react";
import "./ManageTasks.css";
import AddTask from "../add-task/AddTask";
import TasksList from "../tasks-list/TasksList";
import TasksCount from "../tasks-count/TasksCount";

function ManageTasks() {
  return (
    <div className="container text-center">
      <p className="display-2 text-center text-info">Tasks Management</p>
      {/* nest 3 components */}
      <div className="row">
        <div className="col-sm-4">
          <AddTask />
        </div>
        <div className="col-sm-4">
          <TasksList />
        </div>
        <div className="col-sm-4">
          <TasksCount />
        </div>
      </div>
    </div>
  );
}

export default ManageTasks;
