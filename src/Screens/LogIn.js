import { useState } from "react";
import { useNavigate } from "react-router-dom"

import "./MainScreen.css"
export const LogIn =() => {

  const[name, setName] = useState('');
    const navigate = useNavigate();
    




const handleClick = () => {
  console.log(name);
    navigate(`/main/${name}`);
}  




    return(
      <>
      <div className="mainClass">
        <div className="mainClass1">
        <div className="border">

        <h1 className="main"> Login </h1>
  
<form>
  <div className="label"> 

  <div>
<label className="email"> Name</label>
<div ><input
 type="name"
 placeholder="Enter name"
 value={name}
 onChange={(e) => setName(e.target.value)}/></div>
</div> 



<label className="email"> Email</label>
<div ><input type="email" placeholder="Enter your email" />
</div>

<div>
<label className="email"> Password</label>
<div ><input type="Password" placeholder="Enter password"/></div>
</div> 



</div>
</form>

<div  >
    <button onClick={handleClick} className="log">Log in</button>
</div>

</div>

        </div>
        </div>
      </>  
    )
}
