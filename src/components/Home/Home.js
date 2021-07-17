import Products from "./Products/Products";

const Home = ({ addCart, cart }) => {
  return (
    <div className="container-lg my-2">
      <Products addCart={addCart} cart={cart} />
    </div>
  );
};

export default Home;
