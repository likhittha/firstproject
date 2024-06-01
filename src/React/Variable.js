import { useState } from "react";
import AnimalShow from "./AnimalShow";
export const Variable = () => {

{/*
let message = "hello everyone";
if (Math.random() > 0.5) {
    message = "Bye everyone"

}


const name = 'likhitha';
const age = 23;

*/}



function getRandomAnimal () {
const animals = ['bird', 'cat', 'cow','horse','dog' ,'gator'];
return animals[Math.floor(Math.random() * animals.length)];

}





const [animals, setAnimals] = useState([]);
{/*update a peice of state */}
const handleClick = () => {
   setAnimals([...animals, getRandomAnimal()])
};


const renderAnimals = animals.map((animal,index) => {
 return (
    <div className="flex">
<AnimalShow  type={animal}  key={index} /> 
</div>
 )
});






    return(
<>
{/*
<div>{message}</div>
<div>{new Date().toLocaleDateString() } </div>
<div >My name is:{name}</div>
<div> My age is: {age} </div>

<input   placeholder="enter number" className="border-2 border-black" minValue={5} max={10} list={[1,2,3]}  alt={message} />

<input maxLength={5}   />
<input placeholder="hi there" />


    */}


<div className="flex flex-col  items-center">
    <button onClick={handleClick} className="bg-green-300 border-2 border-green-600 rounded-xl text-xl p-1 w-36 ">Add Animal </button>
<div className="flex flex-wrap ">{renderAnimals}</div>
</div>

</>


    )
}