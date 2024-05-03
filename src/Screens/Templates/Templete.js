import { LuBird } from "react-icons/lu";
import img1 from "./birds.jpeg"
import img2 from "./parrot.jpeg"
import img3 from "./petbird.jpeg"
export const Templete =()=>{
    const handleClick =() =>{
        console.log("clicked");
    }
    return(
<> 
<div>
    <div className="bg-sky-300 h-[100vh]">
<div className="flex  text-white text-6xl justify-around ">BIRDS
<div>
<div className="text-xl ml-40">Date:[02-05-2024] </div> 
<div className="text-xl ml-40 ">Time:[3:00PM] </div>
</div>
<div>
<div className="text-2xl ml-60 "> Home , Shop ,  About </div>
</div>
<div >
<button onClick={handleClick} className="text-3xl border-4 mt-1 ml-40  rounded-xl p-2  "> Buynow </button> 
<div className=" text-xl mt-2 justify-center items-center flex  rounded-xl border-2 w-[30%] " > Featured</div> 

</div>
</div> 
<div className="flex ">
<p className=" text-white text-2xl  ml-8"> Types </p> 


</div>
<div className="flex "><img className="h-[500px] w-[600px] m-2 rounded-3xl " src={img1} />


<div >
<p className="text-xl text-white ml-40 font-"> Elevate your experinence with our handpicked featured selection .....</p> 
<div className="flex ">
<img className="h-[100px] w-[100px] rounded-full ml-60 mt-4  " src={img2} />
<lu className="w-40 h-40">< LuBird /> </lu>
<img className="h-[100px] w-[100px] m-2 rounded-full ml-60 mt-4 " src={img3} />
</div>
</div>
</div> 
</div>

    <div className="bg-white-400 h-[100vh]">white</div>
</div>



</>



    )
    }
