import React from "react";
import BookShow from "./BookShow";
const BookList = ({ books,deleteBookById ,onEdit}) => {
  return books.map((book) => {
    return <BookShow key={book.id} book={book} deleteBookById={deleteBookById} onEdit={onEdit}/>
  });
};

export default BookList;
