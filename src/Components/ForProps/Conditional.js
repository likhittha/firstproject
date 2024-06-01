import { FaCloudMoon } from "react-icons/fa";
export const Conditional = () =>{


let loggedIn = false;

let isAdmin = true;

return(

<>

{
  loggedIn?(<div className="justify-center flex text-2xl font-bold text-sky-500 ">Hi guys im likhitha </div>) : (<div className="justify-center flex text-2xl font-bold text-sky-500">Hello guys im likhi </div> )
}


{
   isAdmin &&  <h1 className="justify-center flex text-xl font-semibold p-2 "> Welcome too a cloud city <div className="p-2"> <FaCloudMoon color="blue"  /> </div> 
   </h1> 

   
}



</>


)


}

