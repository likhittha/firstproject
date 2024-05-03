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
import { Route, Routes, useNavigate } from "react-router-dom";
import { LogIn } from "./Screens/LogIn";
import { MainScreen } from "./Screens/MainScreen";
import { Example } from "./Screens/Example/Example";
import { Example1 } from "./Screens/Example/Example1";
import { Templete } from "./Screens/Templates/Templete";

function App() {
  const handleClick = () => {
    console.log("clicked from APP.js");
  };
  const tapClick = () => {
    console.log("clicked from APP.js");
  };

  const navigate = useNavigate();

  const demo2 = () => {
    navigate("/demo2");
  };

  const state = () => {
    navigate("/state");
  };
  const header = () => {
    navigate("/header");
  };

  const body = () => {
    navigate("/body");
  };

  const new1 = () => {
    navigate("/new1");
  };

  const footer = () => {
    navigate("/footer");
  };

  const navnew = () => {
    navigate("/new");
  };

  const count = () => {
    navigate("/count");
  };

  const demo1 = () => {
    navigate("/");
  };

  return (
    <>
      {/*
<div className="buttonContainer">
<div onClick={demo1} className="btn">
demo1
</div>


<div onClick={demo2} className="btn">
demo2 
</div>
<div onClick={state} className="btn">
  state
</div>
<div  onClick={header} className="btn">
  header
</div>
<div onClick={body} className="btn">
  body
</div>
<div  onClick={footer}className="btn">
  footer
</div>
<div  onClick={navnew} className="btn">
  new
</div>
<div  onClick={new1}className="btn">
  new1
</div>
<div  onClick={()=>{navigate("/count")}}className="btn">
  count
</div>
</div> */}

      {/*
  <Routes>
    <Route path="/" Component={Demo1} />
    <Route path="/demo2" Component={Demo2} />
    <Route path="/state" Component={StateComponent} />
    <Route path="/header" Component={Header} />
    <Route path="/body" Component={Body} />
    <Route path="/footer" Component={Footer} />
    <Route path="/new" Component={New} />
    <Route path="/new1" Component={New1} />
    <Route path="/count" Component={Count} />
  </Routes>

*/}

      <Routes>
        <Route path="/" Component={LogIn} />
        <Route path="/main/:name" Component={MainScreen} />
        <Route path="/main/:name/:email" Component={MainScreen} />
        <Route path="/ex" Component={Example} />
        <Route path="/ex1" Component={Example1} />
        <Route path="/templete" Component={Templete} />
        
      </Routes>
    </>
  );
}

export default App;
