import "./App.css";
import { Navbar, Footer, Main } from "./components";

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="d-flex flex-row">
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default App;
