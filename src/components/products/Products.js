import "./Products.css";
import Product from "../product/Product";

function Products(props) { //{ fun: getDataFromChild}

    let getDataFromChild=props.fun;
    //data to send to parent
    let x=1234;

  let products = [
    {
      id: 100,
      name: "Watch",
      image: "https://m.media-amazon.com/images/I/41xNB9WGLDL._AC_SY400_.jpg",
      price: 70000,
    },
    {
      id: 200,
      name: "Water purifier",
      image: "https://m.media-amazon.com/images/I/41QOpnWKj-L._AC_SY400_.jpg",
      price: 45000,
    },
    {
      id: 300,
      name: "Bags",
      image: "https://m.media-amazon.com/images/I/91weq3mK2TL._AC_SY400_.jpg",
      price: 12000,
    },
  ];

  return (
    <div className="container">

    <button className="btn btn-success" onClick={()=>getDataFromChild(x)}>Send to parent</button>

      <p className="display-2 text-center text-info">List of Products</p>
      {/* nest Product for 3 times */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        {products.map((prductObj) => (
          <div className="col" key={prductObj.id}>
            <Product  newProduct={prductObj} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
