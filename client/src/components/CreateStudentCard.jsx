import React, { useState, Fragment } from "react";

const CreateStudentCard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <form onSubnit={handleSubmit} className="border-2 border-stone-300 rounded-md flex flex-col justify-center items-center px-5 py-4">
          <label className="block mb-3">Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 block w-64 px-3 py-2 bg-gray-200 border border-gray-500 rounded-md text-md shadow-sm"
            placeholder="Your name"
          />
          </label>
          <label className="block mb-3">Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 block w-64 px-3 py-2 bg-gray-200 border border-gray-500 rounded-md text-md shadow-sm"
            placeholder="your_email@example.com"
          />
          </label>
          <label className="block mb-3">Phone:
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 block w-64 px-3 py-2 bg-gray-200 border border-gray-500 rounded-md text-md shadow-sm"
            placeholder="123-456-7890"
          />
          </label>
          <label className="block mb-4">College:
          <input
            type="text"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            className="mt-1 block w-64 px-3 py-2 bg-gray-200 border border-gray-500 rounded-md text-md shadow-sm"
            placeholder="Your college name"
          />
          </label>

          <button className= "w-64 bg-sky-500 border border-sky-600 px-5 py-1 rounded-lg text-white shadow-sm">
            Add
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default CreateStudentCard;
