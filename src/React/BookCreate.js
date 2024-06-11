import { useState } from "react";

function BookCreate ({onCreate}) {
const [title, setTitle] = useState('');


const handleChange = (event) =>{
    setTitle(event.target.value);
};

const handleSubmit = ( event) => {
 event.preventDefault();
 onCreate(title);
setTitle('');

    }

    return (
        <>
         <div className="bg-cyan-300 p-5" > <h3 className=" font-bold text-xl text-white">Add a book</h3>
          
            <form onSubmit={handleSubmit} >
                <label>Title</label>
                <input className="flex flex-col py-2 w-full border-2 rounded-md border-black" value={title} onChange={handleChange}/>
           <div className="py-2">   <button className="flex flex-col border-2 p-2  rounded-md bg-white">Create!</button>
           </div> 
                </form>
            
            
             </div>
         </>
    );
}
export default BookCreate;