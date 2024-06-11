import { TiDeleteOutline } from "react-icons/ti";
import { GoPencil } from "react-icons/go";
import { useState } from "react";
import  BookEdit from './BookEdit';

function BookShow ({ book , onDelete , onEdit }) {
 const[showEdit,setShowEdit] = useState(false);
    const handleDeleteClick =() => {
        onDelete(book.id);

    }
    const handleEditClick =() => {
       setShowEdit(!showEdit);

    }

const handleSubmit = (id ,newTitle) =>{
    setShowEdit(false);
    onEdit(id ,newTitle);
}

let content = <h3> {book.title} </h3>;
if(showEdit)
{
    content = <BookEdit onSubmit={handleSubmit} book={book} />;
}
    return (
        <>

        <div className="border-2  w-48 py-3 px-4 border-black rounded-md">
        <div className="justify-end flex">
            <button onClick={handleEditClick}  ><div ><GoPencil  color="black" className="justify-center items-center flex"  /></div></button>
            <button onClick={handleDeleteClick}  ><div ><TiDeleteOutline color="black" className="justify-center items-center flex"  /></div> </button>
         </div>
        <img className="py-1 rounded-md" alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`}
        />
         <div className="text-red-800 w-40 p-1 rounded-md border-2 border-black">
          <div>  {content}</div>
       
         
         </div>
         </div>
         </>
    );
}
export default BookShow; 