import "./App.css";
import { useState, useEffect } from "react";
import { Navbar, Footer, Home, ProductDetail } from "./components";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addCartHandler = (product) => {
    setCartItems((prevState) => [...prevState, product]);
  };

  console.log("Cart is: ", cartItems);

  return (
    <div className="d-flex flex-column min-vh-100">
      <div>{}</div>
      <Navbar cartItems={cartItems.length} />
      <div className="d-flex flex-row">
        <ProductDetail />
        {/* <Home addCart={addCartHandler} /> */}
      </div>
      <Footer />
    </div>
  );
};

export default App;
