import React from "react";
import { Fragment } from "react";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";
import Header from "./Header";

const Login = () => {
  const handleSubmit = () => {};

  return (
    <Fragment>
      <Header />
      <div className="w-full h-screen p-3 flex flex-col justify-center items-center">
        <div className="w-auto py-4 px-4 md:px-5 shadow-md shadow-stone-400 flex flex-col justify-center items-center border border-r-emerald-200">
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
              <button
                className="bg-blue-500 w-72 px-3 py-2 rounded-md text-white"
                variant="primary"
                type="Submit"
              >
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
    </Fragment>
  );
};

export default Login;
