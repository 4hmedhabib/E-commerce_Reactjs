// import { useState, useEffect } from "react";
import "./ProductDetial.css";

const ProductDetail = () => {
  return (
    <div className="container-lg">
      <div className="row my-3">
        <a className=" link-dark text-decoration-none h5" href="">
          {" "}
          <i className="bi h4 bi-arrow-left-circle"></i> Back
        </a>
      </div>
      <div className="card p-3 my-3">
        <div className="row d-flex justify-content-around align-items-start">
          <div className="col-10 col-xl-4 col-md-4 col-sm-4 g-2 gx-2">
            <div className="text-center">
              <img
                id="res-img"
                className="img-fluid"
                src="https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
                alt=""
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
