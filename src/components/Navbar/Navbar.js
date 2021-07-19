import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ cartItems }) => {
  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top mb-5">
        <div className="container-lg">
          <Link to="/" className="navbar-brand h1">
            E-commerce
          </Link>
          <Link
            to="/cart"
            className=" text-decoration-none text-dark position-relative text-center align-items-center me-2"
            id="cart-bg"
          >
            <i className="h3 bi bi-cart"></i>
            <span
              id="badge-radius"
              className="position-absolute top-0 start-100 translate-middle-x badge bg-danger"
            >
              {cartItems} <span className="visually-hidden">Cart Items</span>
            </span>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
