import React, { useState } from "react";

const BookCreate = ({ createBook }) => {
  const [title, setTitle] = useState("");
  const ontitleSubmit = (e) => {
    e.preventDefault();
    createBook(title);
    setTitle("");
  };
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  return (
    <div className="fixed w-[100%] h-[15rem] bottom-0 bg-[#20212c] flex p-8 flex-col  ">
        <h3 className="text-[#fff] text-lg">Add a Book</h3>
      <form onSubmit={ontitleSubmit} className="flex flex-col w-56 py-2">
        <label className="text-[#828fa3]" >Title</label>{" "}
        <input
          value={title}
          onChange={handleChange}
          className="border-none outline-none caret-[#635fc7] w-full lg:w-[30rem] p-3 rounded-md"
        />
        <button className="bg-[#635fc7] text-[#fff] cursor-pointer py-2 w-3/6 mt-2 rounded-lg">
          {" "}
          create Book!
        </button>
      </form>
    </div>
  );
};

export default BookCreate;
