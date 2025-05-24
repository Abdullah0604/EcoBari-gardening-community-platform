import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";
import passwordChecker from "../utils/passwordChecker";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  errorMessage,
  passwordErrorMessage,
  successMessage,
} from "../utils/toasts";
import Input from "../components/Input/Input";

function Register() {
  const { registerUser, updateUserProfile, setUser, setLoading, googleLogin } =
    use(AuthContext);
  const navigate = useNavigate();
  const [isShow, setIsShow] = useState();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { name, email, password, photo } = Object.fromEntries(
      formData.entries()
    );
    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const password = e.target.password.value;
    // const photo = e.target.photo.value;
    // console.log(name, email, password, photo);
    const isPassword = passwordChecker(password);

    if (isPassword) {
      passwordErrorMessage(isPassword);
      return;
    }
    registerUser(email, password)
      .then((result) => {
        const user = result.user;
        successMessage("You have successfully signed up. Let's get started!");
        updateUserProfile(name, photo)
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch(() => {
            errorMessage(
              "Profile is not updated",
              "Profile is not updated, Please give correct name and photo url"
            );
          });
        navigate("/");
      })
      .catch(() => {
        errorMessage(
          "Account Already Exists",
          "An account with this email already exists. Please try logging in."
        );
        setLoading(false);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin().then(() => {
      // console.log(result);
      navigate("/");
    });
  };
  return (
    <div>
      <div className="card bg-base-100 mx-auto my-24 max-w-md shrink-0 shadow-2xl">
        <h2 className="text-center py-2 text-3xl font-bold">
          Please Register Now
        </h2>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset space-y-3">
            {/* name */}
            <Input label="name" type="text" />

            {/* photo URL */}
            <Input label="photo" type="text" />

            {/* email */}
            <Input label="email" type="email" />

            {/* password */}
            <div>
              <label className="label text-base font-semibold text-gray-800">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={isShow ? "text" : "password"}
                  className="input w-full text-base"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  className="absolute top-2 right-5"
                  onClick={() => setIsShow((prev) => !prev)}
                >
                  {isShow ? <FaEyeSlash size={22} /> : <FaEye size={22} />}
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-center text-lg mb-3 font-semibold"> Or</h3>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn btn-block bg-white text-black border-[#e5e5e5]"
              >
                <svg
                  aria-label="Google logo"
                  width="20"
                  height="20"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <path d="m0 0H512V512H0" fill="#fff"></path>
                    <path
                      fill="#34a853"
                      d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                    ></path>
                    <path
                      fill="#4285f4"
                      d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                    ></path>
                    <path
                      fill="#fbbc02"
                      d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                    ></path>
                    <path
                      fill="#ea4335"
                      d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                    ></path>
                  </g>
                </svg>
                Sign up with Google
              </button>
            </div>
            <button
              type="submit"
              className="btn bg-green-500 text-base text-slate-200 mt-4"
            >
              Register
            </button>
            <p className="text-center text-base">
              Already have an account? Please
              <Link
                to="/login"
                className="text-orange-500 underline  font-medium"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
