import "./Product.css";

function Product(props) {
  return (
    <div className="card text-center shadow p-2" style={{ width: "300px" }}>
      <img
        src={props.newProduct.image}
        alt=""
        className="w-50 d-block mx-auto"
        height="250px"
      />
      <div className="card-body">
        <p className="display-6 text-primary">{props.newProduct.name}</p>
        <p className="lead">Rs ,{props.newProduct.price}</p>
      </div>
    </div>
  );
}

export default Product;
