import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = ({ cart }) => {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    setProducts(cart);
  }, [cart]);

  console.log("Cart Items: ", products);

  const quantityAdd = (product) => {
    products.map((p) => {
      if (p.id === product.id) {
        return (p.quantity += 1);
      }
      return p.quantity;
    });
  };

  const quantitySubs = (product) => {
    products.map((p) => {
      if (p.id === product.id) {
        if (product.quantity > 1) {
          return (p.quantity -= 1);
        }
      }
      return p.quantity;
    });
  };

  return (
    <div className="container-lg">
      <div className="row my-3">
        <Link to="/" className="link-dark text-decoration-none h5">
          <i className="bi h4 bi-arrow-left-circle"></i> Back
        </Link>
      </div>
      <hr />
      <div className="row">
        <div className="col-12 col-lg-8 col-md-8 col-sm-8">
          {products &&
            products.map((product) => {
              return (
                <div className="card">
                  <div className="card-body">
                    <div>
                      <h5>Order Review</h5>
                      <hr />
                    </div>
                    <div className="d-flex">
                      <div className="me-4">
                        <img
                          id="cart-img"
                          className="img-fluid"
                          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                          alt=""
                        />
                      </div>
                      <div>
                        <h5 className="card-title">
                          Lorem ipsum dolor sit amet consectetur.
                        </h5>
                        <p className="text-muted">In Stock</p>
                        <h3 className="text-danger fw-bold">$120 </h3>
                        <div className="d-flex mt-3 quantity-box border border-secondary p-0">
                          <span className="btn-subs border-end border-secondary">
                            -
                          </span>
                          <p className="result-quantity">1</p>
                          <span className="btn-add border-start border-secondary">
                            +
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
