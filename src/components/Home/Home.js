import Products from "./Products/Products";

const Home = ({ addCart, cart }) => {
  return (
    <div className="container-fluid my-2">
      <div className="container-lg">
        <Products addCart={addCart} cart={cart} />
      </div>
    </div>
  );
};

export default Home;
