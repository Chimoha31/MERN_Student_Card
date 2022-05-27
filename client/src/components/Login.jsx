import React from "react";
import GoogleButton from "react-google-button";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = () => {

  }

  return (
    <div>
      <div className="p-4 flex flex-col justify-center items-center">
        <h2 className="mb-3">Firebase Auth Login</h2>
        <form onSubmit={handleSubmit} className="w-64 border bg-blue-50" >
            <input
              type="email"
              placeholder="Email address"
              className="block"
              // onChange={(e) => setEmail(e.target.value)}
              />

            <input
              type="password"
              placeholder="Password"
              className="block"
              // onChange={(e) => setPassword(e.target.value)}
            />
  

          <div className="w-full text-center">
            <button className="bg-sky-600" variant="primary" type="Submit">
              Log In
            </button>
          </div>
        </form>
        <hr />
        <div>
          <GoogleButton
            className=""
            type="dark"
            // onClick={handleGoogleSignIn}
          />
        </div>
      </div>
      <div className="p-4 mt-3 text-center">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </div>



      {/* <form>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Username
          </span>

          <input
            type="text"
            value="tbone"
            className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
        </label>
        <label className="block">
          <span className="block text-sm font-medium text-slate-700">
            Email
          </span>
          <input
            type="email"
            className="peer mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
          />
          <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
            Please provide a valid email address.
          </p>
        </label>
      </form> */}
    </div>
  );
};

export default Login;
