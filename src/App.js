import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/Navbar";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Body } from "./Components/Body";
import { StateComponent } from "./Components/StateComponent";

function App() {
  return (
    <>
      <div className="first">first app</div>
      <div>blue</div>

      <div>
        <StateComponent />
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
