import summer from "./svg/summer.jpg";
import winter from "./svg/winter.jpg";
import rainy from "./svg/rainy.jpg";
import spring from "./svg/spring.jpg";
import { type } from "@testing-library/user-event/dist/type";


const imgmap = {
summer ,
winter,
rainy ,
spring 
}



const handleseasonClick = () =>{
    setClicks(clicks + 1 );
      }



function Seasons () {


return(
<div>
    <button onClick={handleseasonClick}> </button>
    <img alt="image" src={imgmap[type]}   />
</div>

)



}


export default Seasons ;
