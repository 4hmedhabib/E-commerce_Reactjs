import { Link } from "react-router-dom";
import "./EmptyCart.css";

const EmptyCart = () => {
  return (
    <div className="container">
      <div className="row p-2">
        <div className="card">
          <div className="card-body text-center">
            <div className="col-lg-12">
              <div>
                <img
                  src="https://freepikpsd.com/media/2019/10/empty-cart-png-Transparent-Images.png"
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="my-3"></div>
              <div>
                <Link to="/" className="btn btn-danger btn-lg">
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;
