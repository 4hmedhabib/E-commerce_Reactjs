import { Link } from "react-router-dom";
import "./Product.css";

const Product = ({ product, addCart, cart }) => {
  return (
    <div className="col-10 col-xl-3 col-md-4 col-sm-6 g-3 ">
      <div className="inherit-width card d-flex align-items-center text-center justify-content-center">
        <img src={product.image} alt="" className="p-2 card-img-top" id="img" />
        <div className="card-body inherit-width">
          <h5 className="card-title d-inline-block text-truncate inherit-width">
            {product.title}
          </h5>
        </div>
        <div className="w-100 d-flex flex-row justify-content-around align-items-center mb-2">
          <p className="h5 text-danger">${product.price}</p>
          <div>
            <Link
              to={"/products/" + product.id}
              className="btn btn-sm btn-primary text-light me-2"
            >
              view
            </Link>
            <button
              onClick={() => addCart(product)}
              disabled={cart.some((cartItem) => cartItem.id === product.id)}
              className={
                "btn btn-sm  me-2 " +
                (cart.some((cartItem) => cartItem.id === product.id)
                  ? "btn-light"
                  : "btn-secondary")
              }
            >
              <i className="bi bi-cart-plus-fill"></i>{" "}
              {cart.some((cartItem) => cartItem.id === product.id)
                ? "Cart Added"
                : "Add Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
