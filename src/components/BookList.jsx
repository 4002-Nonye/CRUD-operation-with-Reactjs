import React from "react";
import BookShow from "./BookShow";
const BookList = ({ books,deleteBookById }) => {
  return books.map((book) => {
    return <BookShow key={book.id} book={book} deleteBookById={deleteBookById}/>
  });
};

export default BookList;
