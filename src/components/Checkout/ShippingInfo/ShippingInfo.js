import { useState } from "react";

const ShippingInfo = () => {
  const [shippingInfo, setShippingInfo] = useState({
    fullname: "",
    phone: "",
    address: {
      city: "",
      village: "",
    },
    paymentType: "",
  });

  const handleChange = (e) => {};

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submited");
  };

  console.log(shippingInfo);
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="row mb-3">
          <div className="col-md">
            <label className="form-label" htmlFor="fullname">
              Full Name - Magaca :
            </label>
            <input
              value={shippingInfo.fullname}
              onChange={handleChange}
              type="text"
              id="fullname"
              name="fullname"
              className="form-control"
              placeholder="Full name"
            />
          </div>
          <div className="col-md">
            <label className="form-label" htmlFor="phone">
              Phone Number :
            </label>
            <input
              value={shippingInfo.phone}
              onChange={handleChange}
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
            <label htmlFor="city" className="form-label">
              City - Magaalada :
            </label>
            <input
              value={shippingInfo.address.city}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="City - Magaalada"
            />
          </div>
          <div className="col-md">
            <label htmlFor="address" className="form-label">
              Address - Xaafada :
            </label>
            <input
              value={shippingInfo.address.village}
              onChange={handleChange}
              type="text"
              className="form-control"
              placeholder="Xaafada - Xaafada"
            />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="paymentMethod" className="form-label">
            Payment Method :
          </label>
          <div className="form-check mb-1">
            <input
              value={shippingInfo.paymentType}
              onChange={handleChange}
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
              value={shippingInfo.paymentType}
              onChange={handleChange}
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
              value={shippingInfo.paymentType}
              onChange={handleChange}
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
