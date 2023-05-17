import "./Test1.css";
import { useState } from "react";

function Test1() {
  //state
  let [counter, setCounter] = useState(1);
  let [username,setUsername]=useState('Rajesh');
  let [address,setAddress]=useState({
      city:"hyderabad",
      street:"KPHB"
  })

  let [marks,setMarks]=useState([90,50])

  //change marks array
  function changeMarks(){
    setMarks([70,...marks])
  }

  //chnage address
  function changeAddress(){
    setAddress({...address,street:'miyapur'}) // { city:'hyd' , street:'KPHB', city:'chennai'}
  }

  //change counter
  function incrementCounter() {
    setCounter(counter + 1);
  }

  function decrementCounter() {
    setCounter(counter - 1);
  }

  //change username
  function changeUsername(){
    setUsername('kiran')
  }

  return (
    <div className="bg-white my-card  p-3 m-2  w-100">
      <h1>Counter - {counter}</h1>

      <button className="btn btn-warning text-dark" onClick={incrementCounter}>
        Increment
      </button>
      <button className="btn btn-danger ms-2 text-dark" onClick={decrementCounter}>
        Decrement
      </button>

      <h1>{username}</h1>
      <button className="btn btn-success" onClick={changeUsername}>Change</button>

      <h2>Adrress Details</h2>
       <h5>{address.city}</h5>
       <h5>{address.street}</h5>
       <button className="btn btn-primary" onClick={changeAddress}>Change address</button>

       <h1>Marks</h1>
        {
          marks.map((mark,index)=><h2 key={index}>{mark}</h2>)
        }
        <button className="btn btn-success" onClick={changeMarks}>change marks</button>
    </div>
  );
}

export default Test1;
