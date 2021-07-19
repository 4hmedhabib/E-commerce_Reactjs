import { Link } from "react-router-dom";
const OrderSummery = ({ total, totalQuantity, totalItems }) => {
  return (
    <div className="">
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
    </div>
  );
};

export default OrderSummery;
