import img1 from "./img1.jpg"
import img2 from "./img2.webp"
import img3 from "./img3.webp"
import img4 from "./img4.jpg"
import img5 from "./img5.webp"
import img6 from "./img6.webp"


export const Projects  = () =>{
    return(
    
    <>
 
<div id="project" className=" py-40">
        <div className="text-6xl h-[10vh]  font-bold justify-center flex items-center">
MY Projects
</div>
<div className=" text-l h-[5vh] py-10 text-gray-400 justify-center flex items-center">
Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
</div>
<div className="py-20">
<div className=" h-[50vh] flex ">
<div className="relative flex-1 bg-pink-300">
    <img src={img1} className="h-full w-full object-cover" />
    <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-80 transition-opacity duration-300 flex justify-center items-center">
    <div className="flex flex-col items-center">
        <div className="text-white">
          Branding & Illustration Design
        </div>
        <div className="text-white p-4">
          Web Design
        </div>
    </div>
    </div>
    </div>

    <div className="relative flex-1 bg-pink-300">
    <img src={img2} className="h-full w-full object-cover" />
    <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-80 transition-opacity duration-300 flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="text-white">
          Branding & Illustration Design
        </div>
        <div className="text-white p-4">
          Web Design
        </div>
    </div>
    </div>
    </div>
    

    <div className="relative flex-1 bg-pink-300">
    <img src={img3} className="h-full w-full object-cover" />
    <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-80 transition-opacity duration-300 flex justify-center items-center">
    <div className="flex flex-col items-center">
        <div className="text-white">
          Branding & Illustration Design
        </div>
        <div className="text-white p-4">
          Web Design
        </div>
    </div>
    </div>
    </div>
    

</div>
<div className=" h-[50vh] flex">

<div className="relative flex-1 bg-pink-300">
    <img src={img4} className="h-full w-full object-cover" />
    <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-80 transition-opacity duration-300 flex justify-center items-center">
    <div className="flex flex-col items-center">
        <div className="text-white">
          Branding & Illustration Design
        </div>
        <div className="text-white p-4">
          Web Design
        </div>
    </div>
    </div>
    </div>
    
    <div className="relative flex-1 bg-pink-300">
    <img src={img5} className="h-full w-full object-cover" />
    <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-80 transition-opacity duration-300 flex justify-center items-center">
    <div className="flex flex-col items-center">
        <div className="text-white">
          Branding & Illustration Design
        </div>
        <div className="text-white p-4">
          Web Design
        </div>
    </div>
    </div>
    </div>
    
    <div className="relative flex-1 bg-pink-300">
    <img src={img6} className="h-full w-full object-cover" />
    <div className="absolute inset-0 bg-blue-500 opacity-0 hover:opacity-80 transition-opacity duration-300 flex justify-center items-center">
    <div className="flex flex-col items-center">
        <div className="text-white">
          Branding & Illustration Design
        </div>
        <div className="text-white p-4">
          Web Design
        </div>
    </div>
    </div>
    </div>
    
</div>
</div>


<div className="flex h-[20vh]   px-20 gap-6">
        <div className="flex-1  border-2 shadow-xl flex flex-col justify-center items-center">
            <div className="text-2xl font-bold text-blue-500 p-1">100</div>
        <div className="p-2">Awards</div>
        </div>

        <div className="flex-1  border-2 shadow-xl flex flex-col justify-center items-center">
            <div className="text-2xl font-bold text-blue-500 p-1">1,200</div>
        <div className="p-2">Complete Projects</div>
        </div>
        <div className="flex-1  border-2 shadow-xl flex flex-col justify-center items-center">
            <div className="text-2xl font-bold text-blue-500 p-1">1,200</div>
        <div className="p-2">Happy Customers</div>
        </div>
        <div className="flex-1  border-2 shadow-xl flex flex-col justify-center items-center">
            <div className="text-2xl font-bold text-blue-500 p-1">500</div>
        <div className="p-2">Cups of coffee</div>
        </div>
</div>


    </div>
    
    
    </>
    
    
    
    )
    }