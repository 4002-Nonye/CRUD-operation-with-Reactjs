import React, { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import "./style.css";

const App = () => {
  const [books, setBooks] = useState([]);
  const createBook = (title) => {
    const updatedBooks = [
      ...books,
      {
        id: Math.round(Math.random() * 999),
        title,
      },
    ];
    setBooks(updatedBooks);
  };
  const deleteBookById = (id) => {
    //check if id of book is equal to id that was received, return true and delete
    //else return false and leave book
    const updatedBooks = books.filter((book) => {
      console.log(book.id)
      return book.id !== id
    });
    setBooks(updatedBooks);
  };
  return (
    <div>
      <BookCreate createBook={createBook} />
      <div className="grid lg:grid-cols-4 ">
        <BookList books={books} deleteBookById={deleteBookById} />
      </div>
    </div>
  );
};

export default App;
