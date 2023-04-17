import React, { useState } from "react";
import BookEdit from "./BookEdit";
import deleteIcon from "../assets/trash.svg";
import editIcon from "../assets/pencil.svg";

const BookShow = ({ book, deleteBookById,onEdit }) => {
  const [showEdit, setShowEdit] = useState(false);
  const handleDelete = () => {
    deleteBookById(book.id);
  };
  const handleEdit = (i) => {
    setShowEdit(!showEdit);
    

  };
  const handleEditSubmit =(id,title)=>{
    setShowEdit(false)
    onEdit(id,title)
  }
  const content = showEdit ? <BookEdit book={book} handleEditSubmit={handleEditSubmit}/> : <p>{book.title}</p>;
  return (
    <div className="h-full ">
    <div className="text-white p-3 m-auto w-[300px] my-3 justify-center items-center bg-[#20212c] rounded-md shadow-lg flex relative">
      <div className="flex flex-col pt-4">
      <img src={`https://picsum.photos/seed/${book.id}/300/200`}/>
      {content}
      </div>
      <img
        src={editIcon}
        alt="edit"
        onClick={handleEdit}
        className="absolute right-11 w-4 cursor-pointer top-2"
      />

      <img
        alt="delete"
        src={deleteIcon}
        onClick={handleDelete}
        className="absolute right-3 w-3 cursor-pointer top-2"
      />
    </div>
    </div>
  );
};

export default BookShow;
