import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/Navbar";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Body } from "./Components/Body";
import { StateComponent } from "./Components/StateComponent";
import { Demo1 } from "./Components/ForProps/Demo1";
import { Demo2 } from "./Components/ForProps/Demo2";

function App() {
  const handleClick = () => {
    console.log("clicked from APP.js");
  };
  
    const newClick = () => {
      console.log("clicked from APP.js");
    }; 
  return (
    <>
      <div className="first">first app</div>
      <div>blue</div>

      <div>
        <Demo1 name={"----------"} onClick={handleClick} />
        <Demo2 name={"-----------"} myClass={"tenth"} college={"presidency"} id={"1234"} onClick={newClick}/>
        <StateComponent />
        <Header />
        <Body />
        <Footer />
      </div>
    </>
  );
}

export default App;
