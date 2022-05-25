import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StudentAuthContextProvider } from "./components/context/StudentAuthContext";
import Header from "./components/Header";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import StudentCard from "./components/StudentCard";

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <StudentAuthContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/student_card" element={<StudentCard />} />
          </Routes>
        </StudentAuthContextProvider>
      </Router>
    </div>
  );
};

export default App;
