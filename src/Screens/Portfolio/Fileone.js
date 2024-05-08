import { Link } from "react-router-dom";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { IoArrowDown } from "react-icons/io5";
import { FaMicrosoft } from "react-icons/fa6";
import { TiVendorAndroid } from "react-icons/ti";
import { FaJava } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
import "./Fileone.css"
import cloud from "./cloud1.jpg"
export const Fileone = () => {
  const [text] = useTypewriter({
    words: [ "Web Designer.", "Developer.", "Photographer." , "Marketer." , "Blogger." ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });

  return (
    <>
      <div className="bg-white h-[100vh]">
        <div className="flex p-8 justify-between items-center px-60 ">
          <div className=" flex justify-center items-center cursor-pointer ">
            <p className="text-3xl text-white bg-blue-800 rounded-full font-bold justify-center items-center flex h-9 w-9 ">
              {" "}
              R
            </p>
            <p className="text-2xl font-bold ">onaldo</p>
          </div>

          <nav className="">
          <ul className="flex gap-9">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about">About</Link>
              </li>
              <li className="nav-item">
                <Link to="/resume">Resume</Link>
              </li>
              <li className="nav-item">
                <Link to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/project">Project</Link>
              </li>
              <li className="nav-item">
                <Link to="/my blog">My blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>

          </nav>
        </div>
        <div className="justify-around flex flex-col items-center p-40">
          <p className="text-blue-800 text-xl font-bold ">Hey ! I Am</p>
          <p className="text-6xl font-bold p-4 ">Ronaldo Fredrickson </p>
          <p className="text-3xl font-bold ">
            I'm a
            <  span style={{ fontWeight: "bold",text: "4xl" , color: "blue",  textDecoration:"underline"  }}>
              {" "}
              {text}{" "}
            </span>
            <span>
              <Cursor cursorColor="gray" />
            </span>
          </p>
     <div className="p-9 mt-9 flex justify-center items-center ">
      <div className="animated-icon ">
        <IoArrowDown color="blue" size={30} py-4 />
      </div>
    </div>

  


  
        </div>
      </div>
  
<div className="bg-white h-[100vh] ">
  <div className="flex px-40 "> 
<div className="flex-1  flex justify-center items-center ">
<div className=" ">  <img className="h-[100vh] px-9" src={cloud}  /> </div>


</div>

<div className=" flex-1 ">
<div className="text-6xl font-bold p-8">About Me</div>
<div className="p-8 text-black font-semibold ">A small river named Duden flows by their place and supplies it <br/>
with the necessary regelialia.</div>
<div className="">
<div className="flex px-8 py-4"><div className=" font-bold"> Name:</div> <div className="flex px-12 "> Ronaldo Fredrickson  </div> </div>
<div className="flex px-8 py-4 "><div className=" font-bold">Date of birth:</div><div className="flex px-1 ">November 28,1989   </div></div>
<div className="flex px-8 py-4 "><div className="font-bold">Address:</div><div className="flex px-9 ">San Francisco CA 97987 USA</div></div>
<div className="flex px-8 py-4 "><div className="font-bold">Zip code:</div><div className="flex px-9"> 1000</div></div>

<div className="flex px-8 py-4 "><div className="font-bold">Email:</div><div className="flex px-12">ronaldo@gmail.com</div></div>

<div className="flex px-8 py-4 "><div className="font-bold">Phone:</div><div className="flex px-12">+1-2234-5678-9-0</div></div>
<div  className="flex px-8 py-4 text-xl "> <div className= "text-blue-600 flex ">120  </div><div className="flex px-4">Project complete  </div>
</div>
<div className="p-8">
<button className="border-2 rounded-full bg-blue-500 p-1 text-white px-8 py-3 hover:text-black ">DOWNLOAD CV</button>
</div>
</div>
</div>
</div>

<div className=" h-[30vh] flex px-40 ">
<div className=" flex flex-1 justify-center item-center py-20"> <FaMicrosoft size={50}   /><div className="text-2xl text-bold px-6 py-2"> Microsoft </div> </div>
<div className=" flex flex-1 justify-center item-center py-20 "> <TiVendorAndroid size={50} /><div className="text-2xl text-bold  px-6 py-2"> Android </div>  </div>
<div className=" flex flex-1 justify-center item-center py-20 "><FaJava size={50} /><div className="text-2xl text-bold px-6 py-2"> Java </div>  </div>
<div className=" flex flex-1 justify-center item-center py-20 "><FaGoogle size={50}  /><div className="text-2xl text-bold px-6 py-2"> Google </div>  </div>
<div className=" flex flex-1 justify-center item-center py-20 "><SiAdobe size={50}  /> <div className="text-2xl text-bold px-6 py-2"> Adobe</div> </div>


 
</div>
</div>

  

    </>
  );
};
