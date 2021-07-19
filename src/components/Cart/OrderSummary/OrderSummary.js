import { Link } from "react-router-dom";

const OrderSummary = ({ total, totalItems, totalQuantity }) => {
  return (
    <div className="col-12 col-lg-4 col-md-4 col-sm-10 my-3">
      <div className="card">
        <div className="card-bod">
          <div className="card-header">Order Summary</div>
          <div className="card-body">
            <table className="table">
              <tbody>
                <tr>
                  <th scope="row">Sub Total :</th>
                  <td>${total}</td>
                </tr>
                <tr>
                  <th scope="row">Total Items :</th>
                  <td>{totalItems}</td>
                </tr>
                <tr>
                  <th scope="row">Total Quantity :</th>
                  <td>{totalQuantity}</td>
                </tr>
                <tr>
                  <th scope="row">Shipping :</th>
                  <td>Free</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="card-footer text-center">
            <p className="h2 fw-bold">
              Total : <span className="text-danger"> ${total}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="my-3 text-center">
        <Link
          to="/checkout"
          className="btn btn-lg btn-danger text-center px-5 py-2"
        >
          <i className="bi bi-checkout"></i> Checkout
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
