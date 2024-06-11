import BookShow from './BookShow';

function BookList ({books , onDelete , onEdit }) {
const renderedBooks = books.map((book) => {
return <BookShow onEdit={onEdit} key={book.id} book={book} onDelete={onDelete} />;

}
)

    return (
        <>
         <div className="flex gap-6 flex-wrap" > {renderedBooks} </div>
         </>
    );
}
export default BookList;