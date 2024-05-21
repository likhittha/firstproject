import { useState } from "react"

export const Form = () => {



const[firstname,setFirstname]=useState("")
const[lastname,setLastname]=useState("")
const[email,setEmail]=useState("")
const[phone,setPhone]=useState("")


const handleFirstChange = (e) =>{
    setFirstname(e.target.value)

}

const handleLastChange =(e) =>{
    setLastname(e.target.value)
}


const handleEmailChange =(e) => {
    setEmail(e.target.value)


}

const handlePhoneChange =(e) => {
    setPhone(e.target.value)
}

const handleClick = () =>{
    console.log("firstname:",firstname);
    console.log("lastname:",lastname);
    console.log("email:",email);
    console.log("phone:",phone);

    console.log("submitted")
}

    return(
        <>
        <div className=" h-[100vh] justify-center items-center flex py-20   ">
<div className="  h-[80vh] w-[100vh] p-4 border-2 border-green-500 rounded-2xl py-20 hover:bg-green-400 "> 
<div className="text-xl font-bold justify-center items-center flex p-4  ">Form</div>



<div className="py-2 justify-center flex items-center  px-40">
<div className="flex-1"><label className="" >FirstName: </label></div>
<div className="flex-1"><input className="border-2 border-black p-1 text-black rounded-full" type="firstname" placeholder="Enter your FirstName" value={firstname} onChange={handleFirstChange}    /></div>

     </div>

<div className="py-2 justify-center flex items-center  px-40">
<div className="flex-1"><label className="" >LastName: </label></div>
<div className="flex-1"><input className="border-2 border-black p-1 text-black   rounded-full" type="lastname" placeholder="Enter your LastName" value={lastname} onChange={handleLastChange} />
</div>
     </div>                                          

 <div className="py-2 justify-center flex items-center  px-40">
 <div className="flex-1"><label className="" >Email: </label> </div>
 <div className="flex-1">  <input className="border-2 border-black p-1 text-black rounded-full px"  type="email" placeholder="Enter your Email"value={email} onChange={handleEmailChange} />
    </div>
    </div>

    <div className="py-2 justify-center flex items-center  px-40">
    <div className="flex-1"> <label className="" >PhoneNumber:</label> </div>
    <div className="flex-1">  <input className="border-2 border-black p-1 text-black  rounded-full" type="phone" placeholder="Enter your Phonenumber" value={phone} onChange={handlePhoneChange} />
</div>
    </div>

<div className="py-2 justify-center items-center flex">
<button onClick={handleClick}  className="border-2 rounded-full   border-black p-2  px-6 hover:bg-white hover:text-black ">Submit</button> 
</div>

</div>





            </div>
      
        </>
    )

} 