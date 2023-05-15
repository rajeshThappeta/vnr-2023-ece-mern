//import CSS
import "./App.css";
import Test1 from "./components/test1/Test1";

//create a  component
function App() {
  //state (data at snapshot)
  let arr = [
    {
      heading: "Heading-1",
      para: "This is para-1",
    },
    {
      heading: "Heading-2",
      para: "This is para-2",
    },
    {
      heading: "Heading-3",
      para: "This is para-3",
    },
   
  ];

  //return react element
  return (
    <div className="main">
      <h1 className="text-danger bg-warning">Welcome to ReactJS</h1>
      {/* nest Test1  acomponent */}
      {
        arr.map((obj,index)=><Test1 data={obj} key={index} />)
      }
    </div>
  );
}

export default App;
