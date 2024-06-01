import { useState } from 'react';

import summer from "./svg/summer.jpg";
import winter from "./svg/winter.jpg";
import rainy from "./svg/rainy.jpg";
import spring from "./svg/spring.jpg";
import heart from "./svg/heart.svg"


const imgMap = {
summer ,
winter,
rainy ,
spring 
};



function Season ({ type }) {
    const[clicks,setClicks] = useState(0);

    const handleseasonClick = () =>{
        setClicks(clicks + 1 );
        }
    


return(
 

    <div className='flex   items-center   shadow-xl relative' onClick={handleseasonClick}> 
        <img className='h=[20vh]' alt="image" src={imgMap[type]}   />
    <img className=" absolute top-40 right-5 "alt="heart" src={heart} style={{ width: 10 + 10 * clicks + 'px' }} />

</div>

)



}


export default Season ;
