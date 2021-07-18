import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import "./ProductDetial.css";

const ProductDetail = ({ cart, addCart }) => {
  const [product, setProduct] = useState("");
  const [errorMsg, setErrorMsg] = useState(false);

  const productId = useParams();

  useEffect(() => {
    Axios.get(`https://fakestoreapi.com/products/${productId.productId}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        setErrorMsg(err.message);
        return err;
      });
  }, [productId]);

  return (
    <div className="container-lg">
      <div className="row my-3">
        <Link to="/" className="link-dark text-decoration-none h5">
          <i className="bi h4 bi-arrow-left-circle"></i> Back
        </Link>
      </div>

      <div className="card p-3 my-3">
        <div className="row ">
          <div className="col-10 col-xl-4 col-md-4 col-sm-12 g-2 gx-2 d-flex flex-column justify-content-center align-items-start">
            <div>
              <img
                id="res-img"
                src={product.image}
                className="img-fluid"
                alt={product.name}
              />
            </div>
          </div>
          <div className="col-10 col-xl-7 col-md-7 col-sm-12 g-2 gx-2">
            <div className="card-body">
              <h5 className="card-header">{product.title}</h5>
              <hr />
              <p className="fw-bold text-capitalize">
                Category : {product.category}
              </p>
              <p className="card-text">{product.description}</p>
              <p className="text-danger text-light-50 fw-bold h5">
                ${product.price} USD
              </p>
              <p className="text-muted">Free Delivery</p>
              <button
                onClick={() => addCart(product)}
                disabled={cart.some((cartItem) => cartItem.id === product.id)}
                className={
                  "btn text-center me-2 " +
                  (cart.some((cartItem) => cartItem.id === product.id)
                    ? "btn-light"
                    : "btn-primary")
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
    </div>
  );
};

export default ProductDetail;
