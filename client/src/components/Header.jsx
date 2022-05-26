import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  return (
    <header className="flex justify-between py-3 px-4 border-2 bg-teal-500 text-white relative">
      <h2>Students Card</h2>
      <div className="flex gap-5">
        <button onClick={handleClick}>Logout </button>
      </div>
    </header>
  );
};

export default Header;
