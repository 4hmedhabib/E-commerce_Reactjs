import { useState } from "react";
import moment from "moment";
import { useHistory, Redirect, useParams } from "react-router-dom";
const OrderCompleted = ({ total, cart, empty, info }) => {
  let history = useHistory();
  const params = useParams();
  const orderId = params.orderId;
  const [date, setDate] = useState(moment().format("MMMM Do YYYY, h:mm:ss a"));

  const submitHandler = (e) => {
    e.preventDefault();
    history.push("/");
    return empty();
  };

  return (
    <div className="container text-center">
      <button onClick={submitHandler} className="btn btn-primary px-5 my-3">
        Close
      </button>
      <div className=" row d-flex justify-content-center align-items-center">
        <div className="col-12 col-lg-10 col-sm-10">
          {cart.length < 1 ? (
            <Redirect to="cart" />
          ) : (
            <div className="card">
              <div className="card-header bg-secondary  text-light fw-bold">
                <h3>Order Recieved</h3>
              </div>
              <div className="card-body bg-light">
                <table className="table text-start">
                  <tbody>
                    <tr>
                      <td>Order ID : </td>
                      <td>{orderId}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Date : </td>
                      <td>{date}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Total : </td>
                      <td>${total}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Payment Method : </td>
                      <td>{info.paymentMethod}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Full Name : </td>
                      <td>{info.fullname}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Phone : </td>
                      <td>{info.phone}</td>
                      <td></td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Shipping Address : </td>
                      <td>{info.city + ", " + info.village}</td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OrderCompleted;
