import { useState } from "react"
import { FaEye, FaEyeSlash } from "react-icons/fa";



export const  Form1 = () =>{
    const [formdata, setFormData] = useState ({
            name: '',
            collage: '',
            email: '',
            phone: '',
            password: '',
         
    });
   

    const [showPassword, setShowPassword] = useState(false);

    const handleDataChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formdata, [name]: value});
        };
     const handleClick = () => {
        console.log(formdata);
     }  
     
    

    return(

        <div className=" h-[100vh] justify-center items-center flex ">
<div className="  h-[80vh] w-[100vh] p-4 border-2 border-blue-900 rounded-2xl py-10   "> 
<div className="text-xl font-bold justify-center items-center flex p-4 ">Form</div>

<div className="py-2 justify-center flex items-center  px-40">
<div className="flex-1"><label className="" >Name: </label></div>
<div className="flex-1">
<input className="border-2 border-black p-1 text-black rounded-full" name="name"  type="text" placeholder="Enter your Name" value={formdata.name} onChange={handleDataChange}    /></div>
</div>

<div className="py-2 justify-center flex items-center  px-40">
<div className="flex-1"><label className="" >College: </label></div>
<div className="flex-1"><input className="border-2 border-black p-1 text-black rounded-full" type="text" name="collage"   placeholder="Enter your collage" value={formdata.collage} onChange={handleDataChange} />
</div>
     </div>                                          

 <div className="py-2 justify-center flex items-center  px-40">
 <div className="flex-1"><label className="" >Email: </label> </div>
 <div className="flex-1"> <input className="border-2 border-black p-1 text-black rounded-full "  type="email" name="email"   placeholder="Enter your Email"value={formdata.email} onChange={handleDataChange} />
    </div>
    </div>

   
   
    <div className="py-2 justify-center flex items-center  px-40">
    <div className="flex-1"> <label className="" >PhoneNumber:</label> </div>
    <div className="flex-1">  <input className="border-2 border-black p-1 text-black  rounded-full" type="number" name="phone"   placeholder="Enter your Phonenumber" value={formdata.phone} onChange={handleDataChange} />
</div>
    </div>


   



    <div className="py-2 justify-center flex items-center px-40">
      <div className="flex-1">
        <label>Password:</label>
      </div>
      <div className="flex-1 gap-10  ">
        <div className="flex border-[2px]  border-[#000] rounded-full ">
          <input
            style={{ border: 'none', outline: 'none' }}
            name="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={formdata.password} 
            onChange={handleDataChange}
          />
          <div className="p-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </div>
        </div>
      </div>
    </div>
    







<div className="py-2 justify-center items-center flex">
<button onClick={handleClick}  className="border-2 rounded-full   border-black p-2  px-6 bg-white hover:text-black ">Submit</button> 
</div>
   
<div className="px-40">
<div className="flex-col flex  hover:bg-white rounded-2xl border-2 w-[350px] hover:border-black">
<div className="">name: {formdata.name}
</div>
<div className="">collage: {formdata.collage}
</div>
<div className="">email: {formdata.email}
</div>
<div className="">PhoneNumber: {formdata.phone} 
</div>
<div className="">Password: {formdata.password} 
</div>

</div>
</div>

</div>
</div>



    )

}