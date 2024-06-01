import Season from "./Season";
import { useState } from "react";

function Nature () {


    function getRandomseasons () {
        const seasons = ['summer','winter','rainy','spring'];
        return seasons[Math.floor(Math.random() * seasons.length)];
        
    }  



const [seasons, setSeasons] = useState([]);
    const handleseasonClick = () => {
    setSeasons([...seasons, getRandomseasons()])
    };
    


    const renderseasons = seasons.map((seasons,index) => {
        return (
           <div className="flex  ">
       <Season  type={seasons}  key={index} /> 
       </div>
        )
       });
       
       


    return (
    
    <div className="flex flex-col  items-center p-6">
        <button onClick={handleseasonClick} className="bg-blue-300 border-2 border-blue-600 rounded-xl text-xl p-1 w-36 "> Add seasons </button>
        <div className="flex flex-wrap">{renderseasons}</div>
    </div>
    
    )
    }



    export default Nature;
    