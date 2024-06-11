import { useState } from "react";
import BookCreate from "./BookCreate";
import BookList from "./BookList";

function Mainbook () {
    const[books, setBooks] = useState([ ]);

const editBookById = (id, newTitle)=> {
    const updatedBooks = books.map((book)=>{
        if(book.id === id){
            return{...book, title:newTitle};
        }
        return book;
}
    )

setBooks(updatedBooks); 

};
    

     const deleteBookById = (id) =>{
const updatedBooks = books.filter((book) => {
    return book.id !== id;
})

setBooks(updatedBooks);
     }

const createBook =(title)=>{
const updatedBooks = [ ...books, 
    {id:Math.round(Math.random() * 9999) , 
        title }];
setBooks(updatedBooks);
};


    return (
        <>
         <div className="">
            <h1 className="text-xl font-bold ">Reading List</h1>
               <BookList onEdit={editBookById} books={books} onDelete={deleteBookById}  />
             <BookCreate onCreate={createBook} />
             </div>
         </>
    );
}
export default Mainbook;
