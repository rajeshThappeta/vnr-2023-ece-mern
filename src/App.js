//import CSS
import "./App.css";


import Test2 from "./components/test2/Test2";

//create a  component
function App() {
  //function to get data from child
  function getDataFromChild(a) {
    console.log("a is ", a);
  }

  //return react element
  return (
    <div className="main text-center">
      <Test2 />
    </div>
  );
}

export default App;
