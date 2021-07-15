import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="col-10 col-xl-3 col-md-4 col-sm-6 g-3 ">
      <div className="inherit-width card d-flex align-items-center text-center justify-content-center">
        <img src={product.image} alt="" className="p-2 card-img-top" id="img" />
        <div className="card-body inherit-width">
          <h5 className="card-title d-inline-block text-truncate inherit-width">
            {product.title}
          </h5>
        </div>
        <div className="w-100 d-flex flex-row justify-content-around align-items-center mb-2">
          <p className="h5">${product.price}</p>
          <div>
            <button className="btn btn-sm btn-primary text-light me-2">
              view
            </button>
            <button className="btn btn-sm btn-light me-2">
              <i className="bi bi-cart-plus-fill "></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
