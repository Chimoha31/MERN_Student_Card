import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { StudentAuthContextProvider } from "./components/context/StudentAuthContext";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import SignUp from "./components/SignUp";
import StudentsCardList from "./components/StudenstCardList";

const App = () => {
  return (
    <div className="font-serif">
      <Router>
        <StudentAuthContextProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route
              path="/students_list"
              element={
                <ProtectedRoute>
                  <StudentsCardList />
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
