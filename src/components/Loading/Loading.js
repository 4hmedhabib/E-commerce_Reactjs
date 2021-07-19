import "./Loading.css";

const Loading = ({ msg }) => {
  return (
    <div className="container text-center">
      {msg ? (
        <div>
          <h1>{msg}</h1>
          <p>Please Check Your Internet</p>
        </div>
      ) : (
        <div className="row flex-column d-flex justify-content-center align-items-center vh-100">
          <div className="">
            <div>
              <h1>Loading</h1>
            </div>
            <div className="lds-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loading;
