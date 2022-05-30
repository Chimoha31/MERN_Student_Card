import React, { Fragment, useEffect } from "react";
import axios from "axios";
import AddForm from "./inputForm/AddForm";
import UpdateForm from "./inputForm/UpdateForm";

const CreateStudentCard = ({
  setShow,
  add,
  getStudents,
  studentId,
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  college,
  setCollege,
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
    setName("");
    setEmail("");
    setPhone("");
    setCollege("");
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setShow(false);
    const id = studentId;
    console.log("Clicked");
    axios
      .put(`http://localhost:5000/students/${id}`, {
        name,
        email,
        phone,
        college,
      })
      .then((res) => {
        alert(res.data.message);
        console.log("Edit button clicked");
        getStudents();
      })
      .catch((err) => {
        console.log(err);
      });
    setName("");
    setEmail("");
    setPhone("");
    setCollege("");
  };

  const handleHide = () => {
    setShow(false);
    setName("");
    setEmail("");
    setPhone("");
    setCollege("");
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
        {add === "Add" ? (
          <AddForm name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} college={college} setCollege={setCollege} handleSubmit={handleSubmit} handleHide={handleHide} />
        ) : (
         <UpdateForm name={name} setName={setName} email={email} setEmail={setEmail} phone={phone} setPhone={setPhone} college={college} setCollege={setCollege} handleEditSubmit={handleEditSubmit} handleHide={handleHide} />
        )}
      </div>
    </Fragment>
  );
};

export default CreateStudentCard;
