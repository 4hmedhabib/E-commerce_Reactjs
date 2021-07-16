import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Axios from "axios";
import "./ProductDetial.css";

const ProductDetail = ({ errMsg }) => {
  const [product, setProduct] = useState("");
  const productId = useParams();

  useEffect(() => {
    Axios.get(`https://fakestoreapi.com/products/${productId.productId}`).then(
      (res) => {
        setProduct(res.data);
      }
    );
  }, [productId]);

  console.log("You Product ID : ", product.image);

  return (
    <div className="container-lg">
      <div className="row my-3">
        <Link to="/" className="link-dark text-decoration-none h5">
          <i className="bi h4 bi-arrow-left-circle"></i> Back
        </Link>
      </div>

      <div className="card p-3 my-3">
        <div className="row ">
          <div className="col-10 col-xl-4 col-md-4 col-sm-4 g-2 gx-2 d-flex flex-column justify-content-center align-items-start">
            <div>
              <img
                id="res-img"
                src={product.image}
                className="img-fluid"
                alt={product.name}
              />
            </div>
          </div>
          <div className="col-10 col-xl-7 col-md-7 col-sm-7 g-2 gx-2">
            <div className="card-body">
              <h5 className="card-header">
                Mens Casual Premium Slim Fit T-Shirts.
              </h5>
              <hr />
              <p className="fw-bold text-capitalize">
                Category : men's clothing.
              </p>
              <p className="card-text">
                Slim-fitting style, contrast raglan long sleeve, three-button.
              </p>
              <p className="text-danger text-light-50 fw-bold h5">$25 USD</p>
              <p className="text-muted">Free Delivery</p>
              <button className="text-center btn btn-primary">
                <i className="bi bi-cart-plus-fill"></i> Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
