import { GrNavigate, GrWaypoint } from "react-icons/gr";
import { MdContacts } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import cloud from "./cloud1.jpg"
import { FaArrowRight } from 'react-icons/fa';
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
export const ContactMe = ()=> {

return(

<>
<div id="contact" className=" py-30">
        <div className="text-6xl h-[10vh]  font-bold justify-center flex items-center">
 Contact Me
</div>
<div className=" text-l h-[5vh]  py-10 text-gray-400 justify-center flex items-center">
Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
</div>



<div className="h-[60vh] py-20 gap-5  flex px-40 ">
<div className="flex flex-col flex-1 items-center border-2 shadow-2xl py-4  ">
      <div className="border-2  h-[15vh] w-[15vh] bg-blue-500 rounded-full flex justify-center items-center py-4">
        <GrNavigate size={30} color="white " />
      </div>
      <div className="text-xl font-bold py-2 ">Address</div>
      <div className="text-gray-400 py-1  text-center">198 West 21th Street, Suite 721<br />New York NY 10016</div>
    </div>
    <div className="flex flex-col flex-1 items-center border-2 shadow-2xl py-4  ">
      <div className="border-2  h-[15vh] w-[15vh] bg-blue-500 rounded-full flex justify-center items-center py-4">
        <MdContacts size={30} color="white " />
      </div>
      <div className="text-xl font-bold py-2 ">Contact Number</div>
      <div className="text-blue-400 py-1  text-center">+ 1235 2355 98</div>
    </div>
    <div className="flex flex-col flex-1 items-center border-2 shadow-2xl py-4  ">
      <div className="border-2  h-[15vh] w-[15vh] bg-blue-500 rounded-full flex justify-center items-center py-4">
      <MdOutlineEmail size={30} color="white " />
      </div>
      <div className="text-xl font-bold py-2 ">Email Address</div>
      <div className="text-blue-400 py-1  text-center">info@yoursite.com</div>
    </div>
    <div className="flex flex-col flex-1 items-center border-2 shadow-2xl py-4  ">
      <div className="border-2  h-[15vh] w-[15vh] bg-blue-500 rounded-full flex justify-center items-center py-4">
        <CgWebsite size={30} color="white " />
      </div>
      <div className="text-xl font-bold py-2 ">Website</div>
      <div className="text-blue-400 py-1  text-center">yoursite.com</div>
    </div>


</div>

<div className=" h-[100vh] flex px-40">

<div className="flex-1 ">
<div className=" ">  <img className="h-[90vh] px-9" src={cloud}  /> </div>

</div>

<div className="flex-1 ">

    
<form className="px-10 py-20">
      <div className="py-5">
        <input
          className="w-[70vh] border-2 p-2 rounded-md"
          type="text"
          placeholder="Your name"
        />
      </div>

      <div className="py-5">
        <input
          className="w-[70vh] border-2 p-2 rounded-md"
          type="text"
          placeholder="Your email"
        />
      </div>

      <div className="py-5">
        <input
          className="w-[70vh] border-2 p-2 rounded-md"
          type="text"
          placeholder="Subject"
        />
      </div>

      <div className="py-5">
        <textarea
          className="w-[70vh] h-[20vh] border-2 p-2 rounded-md"
          placeholder="Message"
        ></textarea>
      </div>

      <div>
        <button
          type="submit"
          className="bg-blue-500 text-white hover:bg-blue-600 rounded-full px-10 py-4 hover:text-black"
        >
          SEND MESSAGE
        </button>
      </div>
    </form>
    </div>


    </div>

</div>

<div className="bg-black h-[80vh] flex py-10 px-40 flex-col ">hello

<div className=" p-10 text-white flex flex-wrap gap-8  ">
      <div className="flex-1">
        <div className="text-xl font-bold">About</div>
        <div className="py-10 text-gray-300 flex flex-col">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
        </div>
        <div className="flex flex-row gap-4">
          <div className="border-2 h-14 w-14 rounded-full flex justify-center items-center bg-gray-600 border-black">
            <FaTwitter size={30} />
          </div>
          <div className="border-2 h-14 w-14 rounded-full flex justify-center items-center bg-gray-600 border-black">
            <FaFacebookF size={30} />
          </div>
          <div className="border-2 h-14 w-14 rounded-full flex justify-center items-center bg-gray-600 border-black">
            <FaInstagram size={30} />
          </div>
        </div>
      </div>
      
      <div className="flex-1">
        <div className="text-xl font-bold">Links</div>
        <div className="py-10 text-gray-300 flex flex-col">
          <ul className="arrow-list list-none space-y-2 text-lg">
            <li className="flex items-center">
              <FaArrowRight className="mr-2" color="white" size={20} />
              Home
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2" color="white" size={20} />
              About
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2" color="white" size={20} />
              Services
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2" color="white" size={20} />
              Projects
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2" color="white" size={20} />
              Contact
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1">
        <div className="text-xl font-bold">Services</div>
        <div className="py-10 text-gray-300 flex flex-col">
          <ul className="arrow-list list-none space-y-2 text-lg">
            <li className="flex items-center">
              <FaArrowRight className="mr-2" color="white" size={20} />
              Web Design
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2" color="white" size={20} />
              Web Developer
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2" color="white" size={20} />
              Business Strategy
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2" color="white" size={20} />
              Data Analysis
            </li>
            <li className="flex items-center">
              <FaArrowRight className="mr-2" color="white" size={20} />
              Graphic Design
            </li>
          </ul>
        </div>
      </div>

      <div className="flex-1">
        <div className="text-xl font-bold">Have a Questions?</div>
        <div className="py-10 text-gray-300 flex flex-col">
          <div className="flex items-center py-2">
            <IoLocationOutline className="mr-6" color="white" size={50} />
            <span>203 Fake St. Mountain View, San Francisco, California, USA</span>
          </div>
          <div className="flex items-center py-2">
            <FaPhone className="mr-6" color="white" size={30} />
            <span>+2 392 3929 210</span>
          </div>
          <div className="flex items-center py-2">
            <IoMdMail className="mr-6" color="white" size={30} />
            <span>info@yourdomain.com</span>
          </div>
        </div>
      </div>
    
    

</div>



<div className=" text-white w-full py-4 flex justify-center">
        <div className="flex items-center">
          Copyright ©2024 All rights reserved | This template is made with
          <FaHeart className="mx-1 " />
          by Colorlib
        </div>
      </div>


</div>



</>


)

}