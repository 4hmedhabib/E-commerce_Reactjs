import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Navbar, Footer, Home, ProductDetail } from "./components";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addCartHandler = (product) => {
    setCartItems((prevState) => [...prevState, product]);
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
            <Route exact path="/products/:productId">
              <ProductDetail cart={cartItems} addCart={addCartHandler} />
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
