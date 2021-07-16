import Products from "./Products/Products";

const Home = ({ addCart }) => {
  return (
    <div className="container-lg my-2">
      <Products addCart={addCart} />
    </div>
  );
};

export default Home;
