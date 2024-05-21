import { useState } from "react";

export const Practice = () =>
    {

const [name,setName]=useState("one") 
const[count,setCount]=useState(0)

const clickMe =()=> {
    setName("two")
     console.log("Clicked");


    }
    
const number =()=> {
    console.log("pressed")
    setCount(count+1)
}

        return(

<>
<div className="bg-green-400 ">
    hello guys

<button onClick={clickMe}> click me </button>
<div>{name } </div>
</div>

<button onClick={number}> button</button>
<div>{count}</div>
</>



        )
    }