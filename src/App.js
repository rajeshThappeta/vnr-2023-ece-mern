//import CSS
import "./App.css";

import Test1 from "./components/test1/Test1";

//create a  component
function App() {
  //function to get data from child
  function getDataFromChild(a) {
    console.log("a is ", a);
  }

  //return react element
  return (
    <div className="main">
      <Test1 />
    </div>
  );
}

export default App;
