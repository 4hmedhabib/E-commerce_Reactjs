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
    console.log("Cart Items Updated : ", products);
  };

  const quantitySubs = (product) => {
    products.map((p) => {
      if (p.id === product.id) {
        if (product.quantity > 1) {
          return (p.quantity -= 1);
        } else {
          console.log("Ma leeka");
        }
      }
      return p.quantity;
    });
    console.log("Cart Items Updated : ", products);
  };

  return (
    <div className="container-lg">
      <div className="row">
        <div className="col-12 col-lg-8 col-md-8 col-sm-8">
          <table class="table">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">Product</th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((product) => {
                  return (
                    <tr>
                      <th scope="row">
                        <img
                          id="cart-img"
                          className="img-fluid"
                          src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
                          alt=""
                        />
                      </th>
                      <td>
                        <div className="">
                          <p>Lorem ipsum dolor sit amet.</p>
                          <input
                            type="number"
                            name="cart-quantity-input"
                            id="cart-quantity-input"
                          />
                          <button onClick={() => quantityAdd(product)}>
                            hello
                          </button>
                          <button onClick={() => quantitySubs(product)}>
                            subs
                          </button>
                          <p className=" my-3 text-danger fw-bold">
                            Price: $15 USD
                          </p>
                          <button className="btn btn-sm btn-danger">
                            <i className=" bi bi-trash"></i> Remove
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
