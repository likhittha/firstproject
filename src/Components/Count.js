import { useState } from "react";

export const Count = ()=>{
const [Count,setCount]=useState(0)
const handleClick =()=>{
setCount (Count+2);
}
    return(
 <>
<button onClick={handleClick}>clicked 
{Count}
</button>


 </>



    )
}