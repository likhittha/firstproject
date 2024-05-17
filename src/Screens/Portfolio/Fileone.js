import { Link } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import { buildStyles , CircularProgressbarWithChildren } from 'react-circular-progressbar';
import CountUp from 'react-countup';

import 'react-circular-progressbar/dist/styles.css';
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { IoArrowDown } from "react-icons/io5";
import { FaMicrosoft } from "react-icons/fa6";
import { TiVendorAndroid } from "react-icons/ti";
import { FaJava } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";
import { SiAdobe } from "react-icons/si";
import "./Fileone.css"
import cloud from "./cloud1.jpg"
import React, { useState, useEffect, useRef } from "react";
import { GiBookAura } from "react-icons/gi";

export const Fileone = () => {
  const [text] = useTypewriter({
    words: [ "Web Designer.", "Developer.", "Photographer." , "Marketer." , "Blogger." ],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 50,
  });
  const [activeId, setActiveId] = useState("first"); // State to track active tab
  const tabsContainerRef = useRef(null); // Ref to tabs container

  // Function to handle setting active tab based on scroll position
  const handleScroll = () => {
    const container = tabsContainerRef.current;
    if (!container) return;

    const scrollPosition = container.scrollTop;
    const containerHeight = container.clientHeight;

    const firstTab = document.getElementById("first");
    const secondTab = document.getElementById("second");
    const thirdTab = document.getElementById("third");
    const fourthTab = document.getElementById("fourth");

    if (
      scrollPosition >= 0 &&
      scrollPosition < containerHeight &&
      activeId !== "first"
    ) {
      setActiveId("first");
    } else if (
      scrollPosition >= containerHeight &&
      scrollPosition < containerHeight * 2 &&
      activeId !== "second"
    ) {
      setActiveId("second");
    } else if (
      scrollPosition >= containerHeight * 2 &&
      scrollPosition < containerHeight * 3 &&
      activeId !== "third"
    ) {
      setActiveId("third");
    } else if (scrollPosition >= containerHeight * 3 && activeId !== "fourth") {
      setActiveId("fourth");
    }
  };

  useEffect(() => {
    const container = tabsContainerRef.current;
    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []); // Add scroll event listener when component mounts
  
  return (
    <>
     <div className="flex p-8 justify-between items-center px-60 fixed gap-12 bg-white w-full">
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
              <a href="#home">Home</a>
              </li>
              <li className="nav-item">
              <a href="#about">About</a>
              </li>
              <li className="nav-item">
                <a href="#resume">Resume</a>
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
      <div id="home" className="bg-white h-[100vh] ">
       
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
  
<div  className="bg-white h-[100vh]  ">
  <div id="about" className="flex px-40  "> 
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
<div  className="flex px-8 py-4 text-xl "> <div className= "text-blue-600 flex "><CountUp end={120} /> </div><div className="flex px-4">Project complete  </div>
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


        <div  className="h-[100vh] flex py-20 ">
          <div id="resume" className=" flex ">
            <div className="flex flex-col px-40  gap-4">
              <a
                href="#first"
                className={`text-xl font-bold ${
                  activeId === "first" ? "text-blue-500" : ""
                }`}
                onClick={() => setActiveId("first")}
              >
                {activeId === "first" ? "-Education" : "Education"}
              </a>

              <a
                href="#second"
                className={`text-xl font-bold ${
                  activeId === "second" ? "text-blue-500" : ""
                }`}
                onClick={() => setActiveId("second")}
              >
                {activeId === "second" ? "-Experience" : "Experience"}
              </a>

              <a
                href="#third"
                className={`text-xl font-bold ${
                  activeId === "third" ? "text-blue-500" : ""
                }`}
                onClick={() => setActiveId("third")}
              >
                {activeId === "third" ? "-Skills" : "Skills"}
              </a>

              <a
                href="#fourth"
                className={`text-xl font-bold ${
                  activeId === "fourth" ? "text-blue-500" : ""
                }`}
                onClick={() => setActiveId("fourth")}
              >
                {activeId === "fourth" ? "-Awards" : "Awards"}
              </a>
            </div>
          </div>
          <div
            className="flex-1 overflow-y-auto custom-scrollbar"
            ref={tabsContainerRef}
          >


            <div id="first" className="h-[120vh]  px-20   ">
        <div className="font-bold text-2xl text-blue-500 py-6">   EDUCATION</div>
        <div className="py-4 border-b-[1px] border-gray-300">
<div className=" justify-start flex items-center   ">
<div className="border-2 rounded-full p-2  bg-blue-500">
    <GiBookAura size={30} color="white" /> </div>
<div className="flex flex-col  ">
    <p className="text-blue-500  text-xl flex px-4 font-bold">2014-2015 </p>
    <p className="text-black  text-2xl flex font-bold px-4 ">Bachelor of Science in Computer Science</p> 
    </div>
</div>

<div  className="">
<p className="text-black font-bold px-16 text-xl  p-2 ">Cambridge University</p>
<p className=" text-black font-light  px-16 "> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
</div>
</div>


<div className="py-4 border-b-[1px] border-gray-300">
<div className=" justify-start flex items-center ">
<div className="border-2 rounded-full p-2 bg-blue-500 ">
    <GiBookAura size={30} color="white" /> </div>
<div className="flex flex-col">
    <p className="text-blue-500  text-xl flex px-4 font-bold ">2014-2015 </p>
    <p className="text-black  text-2xl flex font-bold px-4 ">Computer Processing Systems/Computer Software</p> 
    </div>
</div>

<div  className="0">
<p className="text-black font-bold px-16 text-xl  p-2 ">Cambridge University</p>
<p className=" text-black font-light  px-16 "> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
</div>

</div>

<div className="py-4 border-b-[1px] border-gray-300">
<div className=" justify-start flex items-center ">
<div className="border-2 rounded-full p-2 bg-blue-500 ">
    <GiBookAura size={30} color="white" /> </div>
<div className="flex flex-col">
    <p className="text-blue-500  text-xl flex px-4 font-bold ">2014-2015 </p>
    <p className="text-black  text-2xl flex font-bold px-4 ">Diploma in Computer</p> 
    </div>
</div>

<div  className="">
<p className="text-black font-bold px-16 text-xl  p-2 ">Cambridge University</p>
<p className=" text-black font-light  px-16 "> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

</div>
</div>
<div className="py-4 border-b-[1px] border-gray-300">
<div className=" justify-start flex items-center ">
<div className="border-2 rounded-full p-2 bg-blue-500 ">
    <GiBookAura size={30} color="white" /> </div>
<div className="flex flex-col">
    <p className="text-blue-500  text-xl flex px-4 font-bold ">2014-2015 </p>
    <p className="text-black  text-2xl flex font-bold px-4 ">Art & Creative Director</p> 
    </div>
</div>

<div  className="">
<p className="text-black font-bold px-16 text-xl  p-2 ">Cambridge University</p>
<p className=" text-black font-light  px-16 "> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

</div>
</div>





            </div>

 <div id="second" className="h-[180vh]  px-20   ">
        <div className="font-bold text-2xl text-blue-500 py-6"> EXPERIENCE</div>
        <div className="py-4 border-b-[1px] border-gray-300">
<div className=" justify-start flex items-center   ">
<div className="border-2 rounded-full p-2  bg-blue-500">
    <GiBookAura size={30} color="white" /> </div>
<div className="flex flex-col  ">
    <p className="text-blue-500  text-xl flex px-4 font-bold">2014-2015 </p>
    <p className="text-black  text-2xl flex font-bold px-4 ">Software Developer</p> 
    </div>
</div>

<div  className="">
<p className="text-black font-bold px-16 text-xl  p-2 ">Cambridge University</p>
<p className=" text-black font-light  px-16 "> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
</div>
</div>


<div className="py-4 border-b-[1px] border-gray-300">
<div className=" justify-start flex items-center ">
<div className="border-2 rounded-full p-2 bg-blue-500 ">
    <GiBookAura size={30} color="white" /> </div>
<div className="flex flex-col">
    <p className="text-blue-500  text-xl flex px-4 font-bold ">2014-2015 </p>
    <p className="text-black  text-2xl flex font-bold px-4 ">Web Designer</p> 
    </div>
</div>

<div  className="0">
<p className="text-black font-bold px-16 text-xl  p-2">Cambridge University</p>
<p className=" text-black font-light  px-16 "> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
</div>

</div>

<div className="py-4 border-b-[1px] border-gray-300">
<div className=" justify-start flex items-center ">
<div className="border-2 rounded-full p-2 bg-blue-500 ">
    <GiBookAura size={30} color="white"  /> </div>
<div className="flex flex-col">
    <p className="text-blue-500  text-xl flex px-4 font-bold">2014-2015 </p>
    <p className="text-black  text-2xl flex font-bold px-4 ">Web Marketing</p> 
    </div>
</div>

<div  className="">
<p className="text-black font-bold px-16 text-xl  p-2 ">Cambridge University</p>
<p className=" text-black font-light  px-16 "> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

</div>
</div>
<div className="py-4 border-b-[1px] border-gray-300">
<div className=" justify-start flex items-center ">
<div className="border-2 rounded-full p-2 bg-blue-500 ">
    <GiBookAura size={30} color="white" /> </div>
<div className="flex flex-col">
    <p className="text-blue-500  text-xl flex px-4 font-bold">2014-2015 </p>
    <p className="text-black  text-2xl flex font-bold px-4 ">Art & Creative Director</p> 
    </div>
</div>

<div  className="">
<p className="text-black font-bold px-16 text-xl  p-2 ">Cambridge University</p>
<p className=" text-black font-light  px-16 "> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

</div>
</div>
<div className="py-4 border-b-[1px] border-gray-300">
<div className=" justify-start flex items-center ">
<div className="border-2 rounded-full p-2 bg-blue-500 ">
    <GiBookAura size={30} color="white" /> </div>
<div className="flex flex-col">
    <p className="text-blue-500  text-xl flex px-4 font-bold">2014-2015 </p>
    <p className="text-black  text-2xl flex font-bold px-4 ">Wordpress Developer</p> 
    </div>
</div>

<div  className="">
<p className="text-black font-bold px-16 text-xl  p-2 ">Cambridge University</p>
<p className=" text-black font-light  px-16 "> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

</div>
</div>

<div className="py-4 border-b-[1px] border-gray-300">
<div className=" justify-start flex items-center ">
<div className="border-2 rounded-full p-2 bg-blue-500 ">
    <GiBookAura size={30} color="white"  /> </div>
<div className="flex flex-col">
    <p className="text-blue-500  text-xl flex px-4 font-bold">2017-2018 </p>
    <p className="text-black  text-2xl flex font-bold px-4 ">UI/UX Designer</p> 
    </div>
</div>

<div  className="">
<p className="text-black font-bold px-16 text-xl  p-2 ">Cambridge University</p>
<p className=" text-black font-light  px-16 "> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

</div>
</div>

            </div>




            <div id="third" className="h-[100vh]  px-20">
            <div className="font-bold text-2xl text-blue-500 py-6">       SKILLS </div>
<div className="flex h-[50vh] ">
<div className="flex-1">
<div className="h-[40vh] w-[30vh] border-2 rounded-2xl shadow-2xl">
                <div className="text-2xl p-4 font-bold  justify-center flex">CSS</div>
                <div className="flex justify-center items-center">
                <div style={{ width: 150, height: 150 }}>
 
<CircularProgressbarWithChildren value={90}  styles={buildStyles({
   
   textColor: 'black',
   fontWeight: 'bold'
 })} strokeWidth={4} >
  
 
  <div style={{ fontSize: 20, marginTop: -5 }}>
    <strong>90%</strong> 
  </div>
</CircularProgressbarWithChildren>
               </div>
                </div>
     <div className="flex h-[10vh] py-2">
<div className="flex-1 border-r-[1px] border-gray-400">
<div className="text-2xl  font-bold  justify-center  flex">28%</div>
<div className="text-xs   text-gray-500 justify-center flex p-1 ">last week  </div>
</div>
<div className="flex-1 ">
<div className="text-2xl  font-bold  justify-center  flex">60%</div>
<div className="text-xs   text-gray-500 justify-center flex p-1 ">last month  </div>
</div>
</div>

                
</div>
</div>

<div className="flex-1">
<div className="h-[40vh] w-[30vh] border-2 rounded-2xl shadow-2xl">
                <div className="text-2xl p-4 font-bold  justify-center flex">HTML</div>
                <div className="flex justify-center items-center">
                <div style={{ width: 150, height: 150 }}>
 
<CircularProgressbarWithChildren value={80}  styles={buildStyles({
   
   textColor: 'black',
   fontWeight: 'bold'
 })} strokeWidth={4} >
  
 
  <div style={{ fontSize: 20, marginTop: -5 }}>
    <strong>80%</strong> 
  </div>
</CircularProgressbarWithChildren>
               </div>
                </div>
     <div className="flex h-[10vh] py-2">
<div className="flex-1 border-r-[1px] border-gray-400">
<div className="text-2xl  font-bold  justify-center  flex">28%</div>
<div className="text-xs   text-gray-500 justify-center flex p-1 ">last week  </div>
</div>
<div className="flex-1 ">
<div className="text-2xl  font-bold  justify-center  flex">60%</div>
<div className="text-xs   text-gray-500 justify-center flex p-1 ">last month  </div>
</div>
</div>

                
</div>
</div>
<div className="flex-1">
<div className="h-[40vh] w-[30vh] border-2 rounded-2xl shadow-2xl">
                <div className="text-2xl p-4 font-bold  justify-center flex">JQuery</div>
                <div className="flex justify-center items-center">
                <div style={{ width: 150, height: 150 }}>
 
<CircularProgressbarWithChildren value={75}  styles={buildStyles({
   
   textColor: 'black',
   fontWeight: 'bold'
 })} strokeWidth={4} >
  
 
  <div style={{ fontSize: 20, marginTop: -5 }}>
    <strong>75%</strong> 
  </div>
</CircularProgressbarWithChildren>
               </div>
                </div>
     <div className="flex h-[10vh] py-2">
<div className="flex-1 border-r-[1px] border-gray-400">
<div className="text-2xl  font-bold  justify-center  flex">28%</div>
<div className="text-xs   text-gray-500 justify-center flex p-1 ">last week  </div>
</div>
<div className="flex-1 ">
<div className="text-2xl  font-bold  justify-center  flex">60%</div>
<div className="text-xs   text-gray-500 justify-center flex p-1 ">last month  </div>
</div>
</div>

                
</div>
</div>

</div>

<div className=" h-[30vh] flex  ">
<div className="flex-1  ">
 
<div className=" h-[10vh] w-[60vh]">
<div className="flex justify-between items-end">
  <div className="flex p-2 font-medium">Photoshop</div>
  <div className="flex justify-end items-end p-2 font-medium px-6 ">90%</div>

</div>
<div className="">
 
                <ProgressBar completed={90} bgColor="blue" height="10px" isLabelVisible={false}        />

</div>
</div>



<div className="  h-[10vh] w-[60vh]">
<div className="flex justify-between items-end">
  <div className="flex p-2 font-medium">HTML5</div>
  <div className="flex justify-end items-end p-2 font-medium  px-5">95%</div>
</div>
<div className=" ">
 
                <ProgressBar completed={95} bgColor="blue" height="10px" isLabelVisible={false}                  />

</div>
</div>

<div className="  h-[10vh] w-[60vh]">
<div className="flex justify-between items-end">
  <div className="flex p-2 font-medium">Wordpress</div>
  <div className="flex justify-end items-end p-2 font-medium  px-28 ">70%</div>
</div>
<div className=" ">
 
                <ProgressBar completed={70} bgColor="blue" height="10px" isLabelVisible={false}                  />

</div>
</div>

</div>
<div className="flex-1 ">

<div className=" h-[10vh] w-[60vh]">
<div className="flex justify-between items-end">
  <div className="flex p-2  font-medium">JQuery</div>
  <div className="flex justify-end items-end p-2 font-medium px-12">85%</div>
</div>
<div className=" ">
 
                <ProgressBar completed={85} bgColor="blue" height="10px" isLabelVisible={false}                  />

</div>
</div>



<div className="  h-[10vh] w-[60vh]">
<div className="flex justify-between items-end">
  <div className="flex p-2 font-medium">CSS3</div>
  <div className="flex justify-end items-end p-2 font-medium px-6">90%</div>
</div>
<div className=" ">
 
                <ProgressBar completed={90} bgColor="blue" height="10px" isLabelVisible={false}                  />

</div>
</div>

<div className="  h-[10vh] w-[60vh]">
<div className="flex justify-between items-end">
  <div className="flex p-2 font-medium">SEO</div>
  <div className="flex justify-end items-end p-2  font-medium px-16">80%</div>
</div>
<div className=" ">
 
                <ProgressBar completed={80} bgColor="blue" height="10px" isLabelVisible={false}                  />

</div>
</div>


</div>

</div>
            </div>




            

            <div id="fourth" className="h-[120vh]  px-20     ">
        <div className="font-bold text-2xl text-blue-500 py-6">   AWARDS</div>
        <div className="py-4 border-b-[1px] border-gray-300">
<div className=" justify-start flex items-center   ">
<div className="border-2 rounded-full p-2  bg-blue-500">
    <GiBookAura size={30}  color="white" /> </div>
<div className="flex flex-col  ">
    <p className="text-blue-500  text-xl flex px-4 font-bold">2014-2015 </p>
    <p className="text-black  text-2xl flex font-bold px-4 ">Top 10 Web Developer</p> 
    </div>
</div>

<div  className="">
<p className="text-black font-bold px-16 text-xl  p-2 ">Cambridge University</p>
<p className=" text-black font-light  px-16 "> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
</div>
</div>


<div className="py-4 border-b-[1px] border-gray-300">
<div className=" justify-start flex items-center ">
<div className="border-2 rounded-full p-2 bg-blue-500 ">
    <GiBookAura size={30} color="white"  /> </div>
<div className="flex flex-col">
    <p className="text-blue-500  text-xl flex px-4 font-bold">2014-2015 </p>
    <p className="text-black  text-2xl flex font-bold px-4 ">Top 5 LeaderShip Exellence Winner</p> 
    </div>
</div>

<div  className="0">
<p className="text-black font-bold px-16 text-xl  p-2 ">Cambridge University</p>
<p className=" text-black font-light  px-16 "> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
</div>

</div>

<div className="py-4 border-b-[1px] border-gray-300">
<div className=" justify-start flex items-center ">
<div className="border-2 rounded-full p-2 bg-blue-500 ">
    <GiBookAura size={30} color="white" /> </div>
<div className="flex flex-col">
    <p className="text-blue-500  text-xl flex px-4 font-bold">2014-2015 </p>
    <p className="text-black  text-2xl flex font-bold px-4 ">Top 4 Web Tester</p> 
    </div>
</div>

<div  className="">
<p className="text-black font-bold px-16 text-xl  p-2 ">Cambridge University</p>
<p className=" text-black font-light  px-16 "> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

</div>


</div>
<div className="py-4 border-b-[1px] border-gray-300">
<div className=" justify-start flex items-center ">
<div className="border-2 rounded-full p-2 bg-blue-500 ">
    <GiBookAura size={30} color="white" /> </div>
<div className="flex flex-col">
    <p className="text-blue-500  text-xl flex px-4 font-bold">2014-2015 </p>
    <p className="text-black  text-2xl flex font-bold px-4 ">Art & Creative Director</p> 
    </div>
</div>

<div  className="">
<p className="text-black font-bold px-16 text-xl  p-2 ">Cambridge University</p>
<p className=" text-black font-light  px-16 "> A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

</div>
</div>
 </div>
          </div>
        </div>

       

</div>




    </>
  );
};
