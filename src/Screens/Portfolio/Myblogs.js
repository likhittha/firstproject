
import img7 from "./img7.jpg"
import img8 from "./img8.jpg"
import img9 from "./img9.jpg"
import { MdMessage } from "react-icons/md";
export const Myblogs = () => {
    return (

<>

<div id="myblog"  className=" py-30">
        <div className="text-6xl h-[10vh]  font-bold justify-center flex items-center">
MY Blogs
</div>
<div className=" text-l h-[5vh] py-10 text-gray-400 justify-center flex items-center">
Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
</div>

<div className=" flex py-20 px-40">
  <div className="relative flex-1  flex justify-center items-center flex-col">
    <img src={img7} className="h-[300px] w-[400px] p-2" />
<div className="text-blue font-bold text-l flex p-2  w-[300px] hover:text-blue-500 ">Why Lead Generation is Key for Business Growths  </div>
<div className="flex text-blue-500 gap-2 w-[300px]  p-4">
    <div className=" font-bold">Sept.12,2019 </div>
    <div className=" font-bold">Admin </div>
    <div className=" font-bold flex"><div className="flex-1 "><MdMessage color="blue" size={20} /></div> 3 </div>
</div>
<div className="text-gray-400 w-[300px]  p-2"> A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
  </div>


  <div className="relative flex-1 flex justify-center items-center flex-col">
    <img src={img8} className="h-[300px] w-[400px] p-2" />
<div className="text-blue font-bold text-l flex p-2  w-[300px] hover:text-blue-500 ">Why Lead Generation is Key for Business Growths  </div>
<div className="flex text-blue-500 gap-2 w-[300px]  p-4">
    <div className=" font-bold">Sept.12,2019 </div>
    <div className=" font-bold">Admin </div>
    <div className=" font-bold flex"><div className="flex-1 "><MdMessage color="blue" size={20} /></div> 3 </div>
</div>
<div className="text-gray-400 w-[300px]  p-2"> A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
  </div>

  <div className="relative flex-1  flex justify-center items-center flex-col">
    <img src={img9} className="h-[300px] w-[400px] p-2" />
<div className="text-blue font-bold text-l flex p-2  w-[300px] hover:text-blue-500 ">Why Lead Generation is Key for Business Growths  </div>
<div className="flex text-blue-500 gap-2 w-[300px]  p-4">
    <div className=" font-bold">Sept.12,2019 </div>
    <div className=" font-bold">Admin </div>
    <div className=" font-bold flex"><div className="flex-1 "><MdMessage color="blue" size={20} /></div> 3 </div>
</div>
<div className="text-gray-400 w-[300px]  p-2"> A small river named Duden flows by their place and supplies it with the necessary regelialia.</div>
  </div>
</div>


<div className="py-20">
<div className="h-[50vh]  relative  bg-slate-500">
<img src={img9} className="h-full w-full object-cover" />
    <div className="absolute inset-0 bg-blue-500 opacity-80  transition-opacity duration-300 flex justify-center items-center">
    <div className="flex flex-col items-center w-[80vh]">
        <div className="text-white  font-extrabold text-4xl flex gap-2">
        I'm <div className="text-green-600 flex">Available </div> for freelancing
        </div>
        <div className="text-white p-4 w-[70vh] text-center">
        A small river named Duden flows by their place and supplies it with the necessary regelialia.
        </div>
        <div>
        <button className="border-2 border-blue-700 rounded-full bg-blue-900 p-1 text-white font-semibold px-8 py-3 hover:text-black ">HIRE ME </button>
        </div>
    </div>
    </div>
</div>

</div>


</div>

</>



    )
}