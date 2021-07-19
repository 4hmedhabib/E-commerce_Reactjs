import { useState } from "react";

const ShippingInfo = () => {
  const [shippingInfo, setShippingInfo] = useState({});

  const handleChange = (e) => {
    setShippingInfo((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submited");
  };

  console.log("======", shippingInfo);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="row mb-3">
          <div className="col-md">
            <label className="form-label" htmlFor="fullname">
              Full Name - Magaca :
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              className="form-control"
              placeholder="Full name"
              defaultValue={shippingInfo.fullname}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <div className="col-md">
            <label className="form-label" htmlFor="phone">
              Phone Number :
            </label>
            <input
              defaultValue={shippingInfo.phone}
              onChange={(e) => handleChange(e)}
              type="number"
              id="phone"
              name="phone"
              className="form-control"
              placeholder="Phone"
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md">
            <label htmlFor="address[city]" className="form-label">
              City - Magaalada :
            </label>
            <input
              defaultValue={shippingInfo.city}
              onChange={(e) => handleChange(e)}
              type="text"
              className="form-control"
              placeholder="City - Magaalada"
              name="city"
            />
          </div>
          <div className="col-md">
            <label htmlFor="address" className="form-label">
              Address - Xaafada :
            </label>
            <input
              defaultValue={shippingInfo.village}
              onChange={(e) => handleChange(e)}
              type="text"
              className="form-control"
              placeholder="Xaafada - Xaafada"
              name="village"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="paymentMethod" className="form-label">
            Payment Method :
          </label>
          <div className="form-check mb-1">
            <input
              onChange={(e) => handleChange(e)}
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              defaultValue="Zaad Service"
              id="1"
            />
            <label class="form-check-label" for="1">
              Zaad Service - 55555
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              onChange={(e) => handleChange(e)}
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              defaultValue="Edahab"
              id="2"
            />
            <label class="form-check-label" for="2">
              Edahab - 99999
            </label>
          </div>
          <div className="form-check mb-1">
            <input
              onChange={(e) => handleChange(e)}
              className="form-check-input"
              type="radio"
              name="paymentMethod"
              defaultValue="Cash On Delivery"
              id="3"
            />
            <label class="form-check-label" for="3">
              Cash On Delivery
            </label>
          </div>
        </div>
        <div className="col d-grid">
          <button type="submit" className="btn btn-danger text-center ">
            Order Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingInfo;
