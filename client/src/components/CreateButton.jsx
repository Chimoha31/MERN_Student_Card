import React from "react";

const CreateButton = ({ setShow }) => {
  const handleClick = () => {
    setShow(true);
  }

  return (
    <div className="w-full p-4">
      <button
        className="border-2 px-3 py-1 rounded-md bg-neutral-200 shadow-md shadow-stone-400"
        onClick={handleClick}
      >
        Add Student<i className="fas fa-user-plus pl-2"></i>
      </button>
    </div>
  );
};

export default CreateButton;
