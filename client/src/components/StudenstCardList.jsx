import axios from "axios";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import CreateButton from "./CreateButton";
import CreateStudentCard from "./CreateStudentCard";
import DeleteButton from "./DeleteButton";
import Header from "./Header";

const StudentsCardList = () => {
  const [studentsList, setStudentsList] = useState([]);
  const [show, setShow] = useState(false);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/students/${id}`)
      .then((res) => {
        console.log("Deleted");
        handleRefresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleRefresh = () => {
    axios
      .get("http://localhost:5000/students")
      .then((res) => {
        setStudentsList(res.data.data);
        console.log(studentsList);
      })
      .catch((err) => {
        console.log(err);
      });
    setShow(false);
  };
  
  
  const handleEdit = (id, data) => {
    setShow(true)
    axios.put(`http://localhost:5000/students/${id}`, data)
    .then((res) => {
      console.log("Edit btn Clicked")
      console.log(id);
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/students")
      .then((res) => {
        setStudentsList(res.data.data);
        console.log(studentsList);
      })
      .catch((err) => {
        console.log(err);
      });
    setShow(false);
  }, []);

  return (
    <Fragment>
      <Header />
      <div>
        {show && (
          <CreateStudentCard setShow={setShow} handleRefresh={handleRefresh} />
        )}
      </div>
      <CreateButton setShow={setShow} handleRefresh={handleRefresh} />

      <div className="flex justify-center flex-wrap gap-5">
        {studentsList.map((student) => (
          <ul
            className="border border-gray-900 flex flex-col py-2 px-3 w-72 rounded-lg shadow-stone-200 shadow-md"
            key={student._id}
          >
            <li className="flex flex-col items-center py-2 px-0">
              <img
                src="https://theta.utoronto.ca/sites/default/files/styles/cms_bootstrap_1_2/public/2019-12/THETA%20grey%20default_user_icon_0.jpg?itok=OozdnHp8"
                alt="student"
                className="w-48 h-48 rounded-full inline-block"
              />
            </li>
            <li>
              <label>【Name】</label>
              <h4>{student.name}</h4>
            </li>
            <li>
              <label>【Email】</label>
              <p>{student.email}</p>
            </li>
            <li>
              <label>【Phone】</label>
              <p>{student.phone}</p>
            </li>
            <li>
              <label>【College】</label>
              <p className="mb-0">{student.college}</p>
            </li>
            <li className="flex justify-end gap-3">
              <p className="cursor-pointer" onClick={() => handleEdit(student._id)}> ✍🏼</p>
              <DeleteButton handleDelete={() => handleDelete(student._id)} />
            </li>
          </ul>
        ))}
      </div>
    </Fragment>
  );
};

export default StudentsCardList;
