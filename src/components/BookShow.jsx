import React, { useState } from "react";
import BookEdit from "./BookEdit";
import deleteIcon from "../assets/trash.svg";
import editIcon from "../assets/pencil.svg";

const BookShow = ({ book, deleteBookById }) => {
  const [showEdit, setShowEdit] = useState(true);
  const handleDelete = () => {
    deleteBookById(book.id);
  };
  const handleEdit = () => {
    setShowEdit(!showEdit);
  };
  const istrue = showEdit ? <BookEdit /> : <p>{book.title}</p>;
  return (
    <div className="text-black p-2 m-auto w-[300px] my-3 justify-center items-center bg-white rounded-md shadow-lg flex relative">
      {istrue}

      <img
        src={editIcon}
        alt="edit"
        onClick={handleEdit}
        className="absolute right-11 w-4 cursor-pointer"
      />

      <img
        alt="delete"
        src={deleteIcon}
        onClick={handleDelete}
        className="absolute right-3 w-3 cursor-pointer"
      />
    </div>
  );
};

export default BookShow;
