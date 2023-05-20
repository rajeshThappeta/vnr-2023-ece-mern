//import CSS
import "./App.css";
import ManageTasks from "./components/manage-tasks/ManageTasks";
import Store from "./contexts/Store";

//create a  component
function App() {
  //return react element
  return (
    <div className="main">
      <Store>
        <ManageTasks />
      </Store>
    </div>
  );
}

export default App;
