import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { OrderReview, OrderSummary, EmptyCart } from "./";
import "./Cart.css";

const Cart = ({ cart, remove, empty, add, subs, totalQuantity, total }) => {
  const [products, setProducts] = useState("");

  useEffect(() => {
    setProducts(cart);
  }, [cart]);

  return (
    <div className="container-lg">
      <div className="row my-3">
        <Link to="/" className="link-dark text-decoration-none h5">
          <i className="bi h4 bi-arrow-left-circle"></i> Back
        </Link>
      </div>
      <hr />
      <div className="row d-flex justify-content-center">
        {cart.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <OrderReview
              products={products}
              add={add}
              subs={subs}
              remove={remove}
              empty={empty}
            />
            <OrderSummary
              total={total}
              totalItems={cart.length}
              totalQuantity={totalQuantity}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
