import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/")
  }

  return (
  <header className="flex justify-between py-3 px-4 border-2 bg-teal-400 text-gray-600">
    <h2>Students Card</h2>
    <button onClick={handleClick}>Logout</button>
  </header>
  );
};

export default Header;
