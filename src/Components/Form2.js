import { useState } from "react";
import { FaAsymmetrik } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

export const Form2 = () =>{

    const { name , email} = useParams();

const[details, setDetails] = useState (  {

 name: '',
 email: '',
 phonenumber: '',
 password:'',

}

);

const navigate = useNavigate();




    const [isChecked, setIsChecked] = useState(false);
  
    const [showPassword, setShowPassword] = useState(false);

        
const handledetails = (e) => {
    const { name, value } = e.target;
    setDetails({...details, [name]: value});
    };

const handleClick = () => {
 
    console.log("clicked" , details)
}

const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

    return(

<>
<div className="flex">
    <div className="bg-red-800 h-[100vh] px-20 flex-1">  
   
    <div>
 

    <div className="p-10 px-20 py-10  text-white text-4xl font-bold flex flex-col">
    <div className="flex items-center">
        <div className="px-2">
            <FaAsymmetrik color="white" size={45} className=""/>
        </div>
        <div>Adidvara</div>
    </div>
    <div className="text-white text-xs  p-2">Employee login</div>
</div>

<div className="p-10 px-20 text-white text-4xl semi-bold flex flex-col   ">Bulid Your Entire Team , Anywhere In The World

</div>    
   
    <div className="p-10 px-20 text-white  ">
    
      <div className="flex items-center py-2">
        <div className="px-2">
        <FaCheck  color="white" size={25} />
        </div>
        <div className="text-xl">Effective Candidate matching</div>  
   </div>
   <div className="flex items-center  py-2">
        <div className="px-2">
        <FaCheck  color="white" size={25} />
        </div>
        <div className="text-xl">Advanced search features </div>  
   </div>
   <div className="flex items-center  py-2">
        <div className=" ">
        <FaCheck  color="white" size={25} />
        </div>
        <div className="text-xl">Showcase page for job listings</div>  
   </div>
  
    
    </div>
    </div>
    </div>
    




    <div className=" h-[100vh] flex-1">  
    <div className="flex justify-center items-center text-2xl font-semibold py-10 ">
        LOGIN
    </div>
    
    <div className="py-2  flex  flex-col  px-40">
    <div className="p-2"> <label className="" >Name</label> </div>
    <div className=" ">  <input className="border-2 w-96 border-black p-1 text-black  rounded-full" type="text" name="name"   placeholder="Enter your name  " value={details.name} onChange={handledetails}  />
</div>
    </div>
    
    <div className="py-2  flex  flex-col  px-40">
    <div className="p-2"> <label className="" >Email</label> </div>
    <div className=" ">  <input className="border-2 w-96 border-black p-1 text-black  rounded-full" type="text" name="email"   placeholder="Enter your email  " value={details.email} onChange={handledetails}  />
</div>
    </div>

    <div className="py-2  flex  flex-col  px-40">
    <div className="p-2"> <label className="" >PhoneNumber</label> </div>
    <div className=" ">  <input className="border-2   w-96 border-black p-1 text-black  rounded-full" type="number" name="phonenumber"   placeholder="Enter your phonenumber  " value={details.phonenumber} onChange={handledetails}  />
</div>
    </div>
    
    <div className="py-2 flex flex-col px-40">
      <div className="p-2">
        <label>Password:</label>
      </div>
      <div className="">
      <div className="flex items-center border-2 border-black rounded-full relative">
      <input
        className="flex-grow px-4 py-2 rounded-full"
        style={{ border: 'none', outline: 'none' }}
        name="password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Enter your password"
        value={details.password}
        onChange={handledetails}
      />
      <div 
        className="absolute right-2 p-2 cursor-pointer" 
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </div>
    </div>
      </div>
    </div>




    <div className="py-2  flex  px-40">

      <div className="">  
      <input
        type="checkbox"
        id="terms"
        checked={isChecked}
        onChange={handleCheckboxChange}
        className="form-checkbox h-5 w-5 text-blue-600 p-2"
      />
      </div>
      <div>
      <label  className="px-4  ">Agree to terms and conditions</label>
    </div>
    </div>

    <div className="justify-center items-center flex p-2 ">
<button onClick={handleClick}  className="border-2 rounded-full  px-40 text-white  border-black p-2   bg-red-800 ">Submit</button> 
</div>
    
    
    
    
    
    </div>

    </div>
    </>




    )
}