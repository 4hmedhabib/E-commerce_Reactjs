const OrderReview = ({ products, add, subs, remove, empty }) => {
  return (
    <div className="col-12 col-lg-8 col-md-8 col-sm-12">
      {products &&
        products.map((product, i) => {
          return (
            <div className="card my-2" key={i}>
              <div className="card-body">
                <div>
                  <h5>Order Review</h5>
                  <hr />
                </div>
                <div className="d-flex">
                  <div className="me-4">
                    <img
                      id="cart-img"
                      className="img-fluid"
                      src={product.image}
                      alt={product.title}
                    />
                  </div>
                  <div>
                    <h5 className="card-title">{product.title}</h5>
                    <p className="text-muted">In Stock</p>
                    <h3 className="text-danger fw-bold">${product.price}</h3>
                    <div className="d-flex mt-3 quantity-box my-3">
                      <button
                        onClick={() => subs(product)}
                        className="btn-subs"
                      >
                        -
                      </button>
                      <p className="result-quantity">{product.quantity}</p>
                      <button onClick={() => add(product)} className="btn-add">
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => remove(product)}
                  className="btn btn-sm btn-danger text-center float-end"
                >
                  <i className="bi bi-trash"></i> Remove
                </button>
              </div>
            </div>
          );
        })}

      <button onClick={empty} className="btn btn-danger my-3 float-end">
        Remove All{" "}
      </button>
    </div>
  );
};

export default OrderReview;
