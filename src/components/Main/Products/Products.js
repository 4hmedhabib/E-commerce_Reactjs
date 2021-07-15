import { useState, useEffect } from "react";
import Axios from "axios";
import Product from "./Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Axios.get("https://fakestoreapi.com/products").then(async (res) => {
      await setProducts(res.data);
    });
  }, []);

  return (
    <div class="container">
      <div class="row d-flex align-items-sm-start justify-content-sm-start justify-content-center align-items-sm-center">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
