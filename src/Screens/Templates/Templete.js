import { LuBird } from "react-icons/lu";
import { FaArrowRight } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import { GiNestBirds } from "react-icons/gi";
import { GiHummingbird } from "react-icons/gi";

import { HiArrowSmRight } from "react-icons/hi";
import img1 from "./birds.jpeg"
import img2 from "./parrot.jpeg"
import img3 from "./petbird.jpeg"
import but from "./tropical.jpg"
import "./Templates.css"
export const Templete =()=>{
    const handleClick =() =>{
        console.log("clicked");
    }
    return(
<> 
<div >
<div className="bg-black h-[100vh] flex flex-col">
    <div className="   text-white justify-around flex items-center p-6 ">
<div className=" text-6xl  ">BIRDS
</div>
<div>
<div className="text-xl ">Date:[02-05-2024] </div> 
<div className="text-xl  ">Time:[3:00PM] </div>
</div>
<div>
<div className="text-2xl "> Home , Shop ,  About ... </div>
</div>
<div className="flex items-center justify-center border-2 rounded-full p-1"> 
<div className="text-xl  p-2 "> Buynow</div>
<div className="bg-[#fff] p-1  rounded-full">< LuBird size={30} color="black" /> </div>

 
</div>
</div>


<div className="flex-1 flex">
<div className=" flex-1 " >
<div className=" text-white text-2xl p-4"> Types </div>
<div className=" p-2 flex items-center justify-center "> <img className="rounded-3xl h-[350px]"src={img1} /> </div>


</div> 
<div className=" flex-1 flex flex-col ">
    
<div className=" flex-1 "> 
<div className="flex flex-col justify-end items-end">
   <div>
    
   <div  className="flex items-start justify-start p-2 "> <div  className="text-white border-2 p-1 rounded-full">Featured</div></div>
    <div className="text-white">Elevate your experinence with our handpicked featured selection ..... </div>
    
    <div className="flex justify-between">
    <div className="flex gap-6 p-4 ">

    <div className=" ">  <img className="rounded-full h-[80px] w-[80px]" src={img2}  /> </div>
    <div className=" ">  <img className="rounded-full h-[80px] w-[80px]" src={img3}  /> </div>
    <div className=" ">  <img className="rounded-full h-[80px] w-[80px]" src={img2}  /> </div>
    </div>
    
<div  className="justigy-center flex items-center px-4 ">
    <div className="border-2 rounded-full p-2 ">
<FaArrowRight  color="white"/></div>
</div>

   </div>
     
   </div>
    </div> 




</div>
<div className="flex-1 ">
    <div className="flex justify-start items-start px-6 ">
<div className="text-white border-2 p-2 rounded-full">New birds</div> </div>
<div className="text-white text-[40px] ">Lastest birds are ready for sale. Different breeds of birds and pets are also available !! 
<span className="flex justify-start items-start">
<span className="border-2 bg-white rounded-full p-2"><MdOutlineArrowOutward size={15}  color="black"  /></span>
</span>
</div>
    
</div>
</div>
</div>
</div>
<div className="bg-white-400 h-[100vh] flex ">
<div className="flex flex-1  ">
<div className="  flex flex-1">
    
    <div className="flex flex-1 flex-col ">
<div className=" flex-1 p-4"> 
<div className="flex justify-start items-start flex-col">
    <div className="border-2 border-black rounded-3xl p-2">New Breads</div>
   <div className="p-2 text-3xl">
   Birds are a group of warm-blooded vertebrates constituting the class Aves!!!
    </div> 
    </div>
</div>
<div className=" flex-1 flex">

<div className=" flex-1 flex justify-center items-center">
    <div className="">
    <div className="border-2 rounded-full bg-black p-[30px]">
    <GiNestBirds color="white" size={80}/>
    </div>
    </div>
</div>
<div className=" flex-1 items-center justify-center flex">
    <div className="flex justify-center items-center p-8 flex-col">
        <div className="border-2 border-black  p-2 rounded-full ">
explore more  
    </div>
    <div className=" p-1 text-xl"> Birds are feathered theropod dinosaurs and constitute the only known living dinosaurs.</div>
    </div>
<div>
</div>
</div>
</div>
</div>
</div>

<div className=" flex flex-1 ">
    <div className="flex flex-1 flex-col">


<div className="flex justify-center items-center py-4 "> 
  <div className="bg rounded-3xl flex flex-col " > 
  <div className="flex justify-start items-start p-2 gap-3">
  <div className="border-2 rounded-full border-white text-white p-2">new colors</div>
  <div className="border-2 p-2 rounded-full justify-center flex items-center "><GiHummingbird color="white" size={25} /> </div>
   </div>
   
   <div className="text-white flex   flex-1 p-4 items-end justify-end  " >
Many can also run, jump, swim, and dive. Some, like penguins, have lost the ability to fly but retained their wings.
<div className="flex justify-end items-end">
<div className="border-2 rounded-full bg-white ">
<MdOutlineArrowOutward size={25}  color="black"  />
</div>
</div>
</div>
  </div>

</div>


<div className="bg-white flex flex-1"> 

<div className="flex flex-1  ">
<div className="flex-1 justify-center items-end flex p-5">
    <div className="rounded-3xl border-2 border-black justify-center  items-center flex p-2 px-6">Birds</div>

</div>
<div className=" flex-1 justify-center items-end flex p-5">
<div className="rounded-3xl border-2 border-black justify-center  items-center flex p-2 px-6">Cart</div> 
</div>


<div className="flex-1 justify-center items-end flex p-5 ">

<div  className="rounded-3xl border-2 border-black justify-center  items-center flex p-2 px-6">Select</div>
</div>

</div>

</div>
</div>
</div>



<div>
<div className=" flex-1 "></div>
<div className="flex justify-top items-center py-4 "> 
  <div className="bg1 rounded-full flex flex-col h-[300px] w-[300px] justify-center items-center" > 
 
 <div className="justify-around flex items-center ">
  
   <div className="bg-white border-2 p-2 rounded-full justify-center flex items-center "> <HiArrowSmRight   size={25} /> </div>
  
   </div>

</div>
</div>
</div>
</div>
</div>


</div>

</>
    


    )
    }



