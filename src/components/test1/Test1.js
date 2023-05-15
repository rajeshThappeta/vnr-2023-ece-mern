import "./Test1.css";

function Test1(props) { //{ data :{ heading:"Heading-1",para:'This is para-1'}}
 

   
   
    return (
    <div className="bg-secondary my-card text-white p-3 m-2">
      <h2>{props.data.heading}</h2>
      <p className="lead">{props.data.para}</p>
      <button className="btn btn-warning">Click</button>
    </div>
  );
}

export default Test1;
