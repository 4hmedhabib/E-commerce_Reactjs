import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <div className="container-lg">
          <span className="navbar-brand h1">E-commerce</span>
          <span
            className="position-relative text-center align-items-center me-2"
            id="cart-bg"
          >
            <i className="h3 bi bi-cart"></i>
            <span
              id="badge-radius"
              className="position-absolute top-0 start-100 translate-middle-x badge bg-danger"
            >
              2 <span className="visually-hidden">Cart Items</span>
            </span>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
