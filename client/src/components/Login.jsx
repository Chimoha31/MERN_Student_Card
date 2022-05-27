import React from "react";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = () => {};

  return (
    <div className="w-full h-screen p-4 flex flex-col justify-center items-center">
      <div className="w-auto py-3 px-5 flex flex-col justify-center items-center border border-r-emerald-200">
        <h2 className="mb-3"> Login</h2>
        <form onSubmit={handleSubmit} className="">
          <input
            type="email"
            placeholder="Email address"
            className="block w-72 border border-stone-700 px-3 py-2 rounded-md mb-3"
            // onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="block w-72 border border-stone-700 px-3 py-2 rounded-md mb-3"
            // onChange={(e) => setPassword(e.target.value)}
          />

          <div className="w-full text-center">
            <button className="bg-blue-500 w-72 px-3 py-2 rounded-md text-white" variant="primary" type="Submit">
              Log In
            </button>
          </div>
        </form>

      <hr className="border border-stone-900 w-72" />

        <div>
          <GoogleButton
            className="!w-72"
            type="dark"
            // onClick={handleGoogleSignIn}
          />
        </div>
      </div>

      <div className="p-4 mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>
    </div>
  );
};

export default Login;
