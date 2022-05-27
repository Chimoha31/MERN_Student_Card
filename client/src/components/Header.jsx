import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStudentAuth } from "./context/StudentAuthContext";

const Header = () => {
  const [error, setError] = useState("");
  const {student, logOut} = useStudentAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    setError("")
    try{
      await logOut();
      navigate("/");
    }catch(err) {
      setError(err.message);
    }
  };

  return (
    <header className="flex justify-between py-3 px-4 border-2 bg-teal-500 text-white relative">
      <h2>Students Card</h2>
      <div className="flex gap-5">
        <button onClick={handleLogOut}>Logout </button>
      </div>
    </header>
  );
};

export default Header;
