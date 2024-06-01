import { useState } from "react";

function Searchbar ({onSubmit }) {
    const [term, setTerm] = useState('');




     const handleFormSubmit = (event) =>{
        event.preventDefault();
        onSubmit(term);
     }  

     const handleChange = (event ) =>{
        setTerm(event.target.value);

     }

return(
    <>
    <div className="border-2 border-gray-600 rounded-xs p-2"> 
        <form className="flex flex-col p-2" onSubmit={handleFormSubmit}>
       <label>Enter search Term</label>
        <input  className="border-2 border-black "  onChange={handleChange} value={term}/> 
        </form>
        </div>
    </>
)
}
export default Searchbar;