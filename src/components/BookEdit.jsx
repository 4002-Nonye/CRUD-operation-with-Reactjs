import React, { useState } from "react";

const BookEdit = ({book,handleEditSubmit}) => {
  const [title, setTitle] = useState(book.title)
  const handleChange = (e) => {
    setTitle(e.target.value);
    // console.log(title);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditSubmit(book.id,title)
    
   
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col w-56 py-2">
        <label className="text-[#828fa3]">Title</label>{" "}
        <input
          value={title}
          onChange={handleChange}
          className="border-none outline-none caret-[#635fc7] w-11/12  p-2 rounded-md text-black"
        />
        <button className="bg-[#635fc7] text-[#fff] cursor-pointer py-1 w-3/6 mt-2 rounded-lg">
          Save
        </button>
      </form>
    </div>
  );
};

export default BookEdit;
