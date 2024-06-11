import { useState } from "react";

function BookEdit ({ book , onSubmit }) {
const[title , setTitle] = useState(book.title);

const handleChange = (event) =>{
    setTitle(event.target.value);
}


const handleSubmit = (event) =>{
    event.preventDefault();

onSubmit(book.id, title);
}

    return (
        <>
        <form className="" onSubmit={handleSubmit}>
<label> Title </label>
<input className=" w-32" value={title} onChange={handleChange} />
<button className="bg-gray-500 border-2 rounded-md text-white" >
    Save
</button>

        </form>
         </>
    );
}
export default BookEdit;