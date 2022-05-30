import React, { Fragment, useEffect } from "react";
import axios from "axios";

const CreateStudentCard = ({
  setShow,
  add,
  getStudents,
  studentId,
  setStudentId,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  college,
  setCollege,
  getStudentIdHandler
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/students", {
        name,
        email,
        phone,
        college,
      })
      .then((res) => {
        alert(res.data.message);
        getStudents();
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    setShow(false);
  };

  const handleEdit = (id) => {
    console.log("Clicked")
    axios
      .put(`http://localhost:5000/students/${id}`, {
        name,
        email,
        phone,
        college
      })
      .then((res) => {
        alert(res.data.message);
        console.log("Edit button clicked");
        console.log(res);
        getStudents();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleHide = () => {
    setShow(false);
  };

  useEffect(() => {
    // eslint-disable-next-line
  }, [studentId]);

  return (
    <Fragment>
      <div
        className="bg-gray-900 w-full h-screen absolute opacity-90 cursor-pointer"
        onClick={getStudents}
      >
        {/* Modal bg */}
      </div>

      <div className="w-full h-auto flex flex-col justify-center items-center mb-5">
        <form
          onSubmit={handleSubmit}
          className="border-2 border-stone-300 rounded-md w-68 md:w-1/2 flex flex-col justify-center items-center px-5 py-4 absolute top-32 z-100"
        >
          <div className="flex w-full justify-end">
            <i
              className="fas fa-times text-white border-2 rounded-full p-1 px-2 cursor-pointer"
              onClick={handleHide}
            ></i>
          </div>

          <label className="block mb-3 text-white">
            Name:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-64 md:w-80 px-3 py-2 bg-gray-200 border border-gray-500 rounded-md text-md shadow-sm text-stone-900"
              placeholder="Your name"
            />
          </label>
          <label className="block mb-3 text-white">
            Email:
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-64 md:w-80 px-3 py-2 bg-gray-200 border border-gray-500 rounded-md text-md shadow-sm text-stone-900"
              placeholder="your_email@example.com"
            />
          </label>
          <label className="block mb-3 text-white">
            Phone:
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 block w-64 md:w-80 px-3 py-2 bg-gray-200 border border-gray-500 rounded-md text-md shadow-sm text-stone-900"
              placeholder="123-456-7890"
            />
          </label>
          <label className="block mb-4 text-white">
            College:
            <input
              type="text"
              value={college}
              onChange={(e) => setCollege(e.target.value)}
              className="mt-1 block w-64 md:w-80 px-3 py-2 mb-3 bg-gray-200 border border-gray-500 rounded-md text-md shadow-sm text-stone-900"
              placeholder="Your college name"
            />
          </label>
          {add === "Add" ? (
            <button className="w-64 md:w-80 bg-sky-500 border border-sky-600 md:mb-5 px-5 py-1 rounded-lg text-white shadow-sm">
              Add
            </button>
          ) : (
            <button
              className="w-64 md:w-80 bg-red-500 border border-red-600 md:mb-5 px-5 py-1 rounded-lg text-white shadow-sm"
              // onClick={(e) => handleEdit(student._id)}
            >
              Update
            </button>
          )}
        </form>
      </div>
    </Fragment>
  );
};

export default CreateStudentCard;
