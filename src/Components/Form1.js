import { useState } from "react"
export const  Form1 = () =>{
    const [formdata, setFormData] = useState ({
            name: '',
            collage: '',
            email: '',
            phone: '',
         
    });

    const handleDataChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formdata, [name]: value});
        };
     const handleClick = () => {
        console.log(formdata);
     }   
        
    return(

        <div className=" h-[100vh] justify-center items-center flex py-20   ">
<div className="  h-[80vh] w-[100vh] p-4 border-2 border-blue-900 rounded-2xl py-20 hover:bg-sky-900  "> 
<div className="text-xl font-bold justify-center items-center flex p-4 ">Form</div>

<div className="py-2 justify-center flex items-center  px-40">
<div className="flex-1"><label className="" >Name: </label></div>
<div className="flex-1">
<input className="border-2 border-black p-1 text-black rounded-full" type="text" placeholder="Enter your Name" value={formdata.name} onChange={handleDataChange}    /></div>
</div>

<div className="py-2 justify-center flex items-center  px-40">
<div className="flex-1"><label className="" >College: </label></div>
<div className="flex-1"><input className="border-2 border-black p-1 text-black   rounded-full" type="text" placeholder="Enter your collage" value={formdata.collage} onChange={handleDataChange} />
</div>
     </div>                                          

 <div className="py-2 justify-center flex items-center  px-40">
 <div className="flex-1"><label className="" >Email: </label> </div>
 <div className="flex-1"> <input className="border-2 border-black p-1 text-black rounded-full "  type="email" placeholder="Enter your Email"value={formdata.email} onChange={handleDataChange} />
    </div>
    </div>

    <div className="py-2 justify-center flex items-center  px-40">
    <div className="flex-1"> <label className="" >PhoneNumber:</label> </div>
    <div className="flex-1">  <input className="border-2 border-black p-1 text-black  rounded-full" type="number" placeholder="Enter your Phonenumber" value={formdata.phone} onChange={handleDataChange} />
</div>
    </div>

<div className="py-2 justify-center items-center flex">
<button onClick={handleClick}  className="border-2 rounded-full   border-black p-2  px-6 bg-white hover:text-black ">Submit</button> 
</div>
   

<div>


    
</div>




</div>
</div>



    )

}