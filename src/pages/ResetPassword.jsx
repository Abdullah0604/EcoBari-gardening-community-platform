import React, { use } from "react";
import { useLocation } from "react-router";
import AuthContext from "../contexts/AuthContext";

function ResetPassword() {
  const { resetPassword } = use(AuthContext);
  const location = useLocation();
  const email = location.state?.email || "";
  //   console.log(location.state?.email);
  const handleResetPassword = (e) => {
    const userEmail = email || e.target.email.value;
    e.preventDefault();
    resetPassword(userEmail).then(() => {
      window.location.href = "https://mail.google.com/";
    });
  };
  return (
    <div className="py-52">
      <div className="max-w-[350px] mx-auto w-full shadow-md rounded-xl py-7 md:items-start">
        <h2 className="text-xl  md:text-2xl font-bold mb-16 text-center">
          Reset Your Password
          <span className=" block mt-3 mx-auto w-16 h-1 bg-green-600"></span>
        </h2>
        <form onSubmit={handleResetPassword} className="px-4">
          <div className="text-lg font-semibold py-3">
            <label>Email: </label>
            <input
              defaultValue={email}
              name="email"
              type="text"
              className="input"
            />
          </div>

          <button
            type="submit"
            className="btn bg-green-500 text-slate-200 mt-3"
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;
