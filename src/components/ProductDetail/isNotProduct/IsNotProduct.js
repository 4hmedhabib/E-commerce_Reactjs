import React from "react";
import { Link } from "react-router-dom";

const IsNotProduct = () => {
  return (
    <div>
      <div className=" text-center">
        <div className="card-body">
          <div className="p-5">
            <h1 className="text-danger">Ooops!</h1>
            <h1>Sorry! Can't Find This Product.</h1>
            <Link to="/" className="btn btn-outline-dark">
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IsNotProduct;
