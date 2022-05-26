import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StudentAuthContextProvider } from "./components/context/StudentAuthContext";
import Header from "./components/Header";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import SignUp from "./components/SignUp";
import StudentCard from "./components/StudentCard";

const App = () => {
  return (
    <div className="font-serif">
      <Router>
        <Header />
        <StudentAuthContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/student_card"
              element={
                <ProtectedRoute>
                  <StudentCard />
                </ProtectedRoute>
              }
            />
          </Routes>
        </StudentAuthContextProvider>
      </Router>
    </div>
  );
};

export default App;
