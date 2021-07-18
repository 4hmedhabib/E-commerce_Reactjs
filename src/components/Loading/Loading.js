import "./Loading.css";

const Loading = ({ msg }) => {
  return (
    <div className="text-center">
      {msg ? (
        <div>
          <h1>{msg}</h1>
          <p>Please Check Your Internet</p>
        </div>
      ) : (
        <div>
          <div>
            <h1>Loading</h1>
          </div>
          <div class="lds-default">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Loading;
