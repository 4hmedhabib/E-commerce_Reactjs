import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import {
  Navbar,
  Footer,
  Home,
  ProductDetail,
  Cart,
  Checkout,
} from "./components";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(null);

  const addCartHandler = (product) => {
    product.quantity = 1;
    product.totalPrice = product.price;
    setCartItems((prevState) => [...prevState, product]);
  };

  const totalPrice =
    cartItems &&
    cartItems.reduce((total, product) => {
      const totalPrice = total + product.totalPrice;
      return totalPrice;
    }, 0);

  useEffect(() => {
    setTotal((Math.round(totalPrice * 100) / 100).toFixed(2));
  }, [totalPrice]);

  const totalQuantity =
    cartItems &&
    cartItems.reduce((total, product) => {
      const quantity = total + product.quantity;
      return quantity;
    }, 0);

  const quantityAdd = (product) => {
    cartItems.map((p, i) => {
      if (p.id === product.id) {
        const newProducts = [...cartItems];
        newProducts[i].quantity = product.quantity += 1;
        newProducts[i].totalPrice = product.quantity * product.price;
        setCartItems(newProducts);
      }
      return product;
    });
  };

  const quantitySubs = (product) => {
    cartItems.map((p, i) => {
      if (p.id === product.id) {
        if (product.quantity > 1) {
          const newProducts = [...cartItems];
          newProducts[i].quantity = product.quantity -= 1;
          newProducts[i].totalPrice = product.quantity * product.price;
          setCartItems(newProducts);
        }
      }
      return product;
    });
  };

  const removeFromCart = (product) => {
    const updatedCart = cartItems.filter((p) => p !== product);
    setCartItems(updatedCart);
  };

  const empty = () => {
    setCartItems([]);
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar cartItems={cartItems.length} />
        <div className="d-flex flex-row">
          <Switch>
            <Route exact path="/">
              <Home addCart={addCartHandler} cart={cartItems} />
            </Route>
            <Route exact path="/cart">
              <Cart
                cart={cartItems}
                remove={removeFromCart}
                empty={empty}
                total={total}
                totalQuantity={totalQuantity}
                add={quantityAdd}
                subs={quantitySubs}
              />
            </Route>
            <Route exact path="/products/:productId">
              <ProductDetail cart={cartItems} addCart={addCartHandler} />
            </Route>
            <Route exact path="/checkout">
              <Checkout
                cartInfo={cartItems}
                remove={removeFromCart}
                total={total}
                totalQuantity={totalQuantity}
                add={quantityAdd}
                subs={quantitySubs}
              />
            </Route>
            <Route path="*">
              <div className="text-center container">
                <h1>Page Not Found 404</h1>
                <p>
                  Back To <Link to="/">Home</Link>
                </p>
              </div>
            </Route>
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
