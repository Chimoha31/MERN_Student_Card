import axios from "axios";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import { useStudentAuth } from "./context/StudentAuthContext";
import CreateButton from "./CreateButton";
import CreateStudentCard from "./CreateStudentCard";
import DeleteButton from "./DeleteButton";
import Header from "./Header";

const StudentsCardList = ({
  getStudentIdHandler,
  studentId,
  setStudentId,
  show,
  setShow,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [college, setCollege] = useState("");
  const [studentsList, setStudentsList] = useState([]);
  const [add, setAdd] = useState("Add");
  const { student } = useStudentAuth();

  useEffect(() => {
    getStudents();
    // eslint-disable-next-line
  }, []);

  const getStudent = (id) => {
    getStudentIdHandler(id)
    console.log(studentId);
    setAdd("Update")
    setShow(true);
    axios.get(`http://localhost:5000/students/${id}`).then((res) => {
      console.log(res.data.data)
      return res.data.data
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/students/${id}`)
      .then((res) => {
        console.log("Deleted");
        getStudents();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getStudents = () => {
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

  return (
    <Fragment>
      <Header />
      <div>
        {show && (
          <CreateStudentCard
            setShow={setShow}
            add={add}
            aetAdd={setAdd}
            getStudents={getStudents}
            studentId={studentId}
            setStudentId={setStudentId}
            name={name}
            setName={setName}
            email={email}
            setEmail={setEmail}
            phone={phone}
            setPhone={setPhone}
            college={college}
            setCollege={setCollege}
            getStudentIdHandler={getStudentIdHandler}
          />
        )}
      </div>
      <CreateButton
        setShow={setShow}
        getStudents={getStudents}
        setAdd={setAdd}
      />
      {student && (
        <p className="text-center mt-1 mb-4">
          Welcome,
          <strong className="text-lime-700 text-xl">{student.email}</strong>
        </p>
      )}

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
              <p className="cursor-pointer" onClick={() => getStudent(student._id)} >
                ✍🏼
              </p>
              <DeleteButton handleDelete={() => handleDelete(student._id)} />
            </li>
          </ul>
        ))}
      </div>
    </Fragment>
  );
};

export default StudentsCardList;
