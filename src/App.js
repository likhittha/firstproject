import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/Navbar";
import { Header } from "./Components/Header";
import { Footer } from "./Components/Footer";
import { Body } from "./Components/Body";
import { StateComponent } from "./Components/StateComponent";
import { Demo1 } from "./Components/ForProps/Demo1";
import { Demo2 } from "./Components/ForProps/Demo2";
import { New } from "./Components/ForProps/New";
import { New1 } from "./Components/ForProps/New1";
import { Count } from "./Components/Count";




function App() {
  const handleClick = () => {
    console.log("clicked from APP.js");
  };
    const tapClick= () => {
      console.log("clicked from APP.js");
    };
  
  return (
    <>
      <div className="first">first app</div>
      <div>blue</div>

      <div>
        <Demo1 name={"----------"} onClick={handleClick} onTap={tapClick}/>
        <Demo2 name={"-----------"} myClass={"tenth"} college={"presidency"} id={"1234"} onClick={"onClick"}/>
        <StateComponent />
        <Header />
        <Body />
        <Footer />
        <New />
        <New1 />
        <Count />
      </div>
    </>
  );
};

export default App;
         