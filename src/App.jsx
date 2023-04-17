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
      // console.log(book.id)
      return book.id !== id
    });
    setBooks(updatedBooks);
  };

  const setNewTitle =(id,newTitle)=>{
  const updatedBooks=books.map((book)=>{
    if(book.id===id){
      return{...book,title:newTitle}
    }else return book
  })
  setBooks(updatedBooks)
  }
  return (
    <>
<h1 className="m-4 text-white text-xl">Reading List</h1>
      <BookCreate createBook={createBook} />
      <div className="grid lg:grid-cols-4 ">
        <BookList books={books} deleteBookById={deleteBookById} onEdit={setNewTitle}/>
      </div>
    </>
  );
};

export default App;
