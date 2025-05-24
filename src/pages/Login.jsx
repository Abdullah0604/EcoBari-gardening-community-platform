import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";
import { errorMessage, successMessage } from "../utils/toasts";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import GoogleIcon from "../components/svgicons/GoogleIcon";

function Login() {
  const { loginUser, setLoading, googleLogin } = use(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [isShow, setIsShow] = useState();
  const [email, setEmail] = useState("");
  const takeEmail = (e) => {
    // console.log(e.target.value);
    setEmail(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    loginUser(email, password)
      .then(() => {
        successMessage("You have successfully logged in. Let's get started!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(() => {
        errorMessage(
          "Invalid Email or Password",
          "Please ensure your email or password"
        );
        setLoading(false);
      });
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        // console.log(result);
        successMessage("You have successfully logged in. Let's get started!");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(() => {
        errorMessage(
          "Invalid Email or Password",
          "Please ensure your email or password"
        );
      });
  };
  return (
    <div className="py-30">
      <div className="card bg-base-100 mx-auto  bg-[url('/assets/bg.png')] bg-no-repeat bg-[right_-60px_top_-20px] bg-contain  max-w-md shrink-0 shadow-2xl">
        <h2 className="text-center py-2 text-3xl font-bold">
          Please Login Now
        </h2>
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset space-y-3">
            <div>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="btn btn-block bg-white text-black border-[#e5e5e5]"
              >
                <GoogleIcon />
                Login with Google
              </button>
              <h3 className="text-center text-lg mt-5 font-semibold"> Or</h3>
            </div>

            <div>
              <label className="label text-base font-semibold dark:text-slate-200 text-gray-800">
                Email
              </label>
              <input
                onChange={takeEmail}
                name="email"
                type="email"
                className="input w-full text-base"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label className="label text-base dark:text-slate-200 font-semibold text-gray-800">
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
              <div className="mt-1">
                <Link
                  state={{ email }}
                  to="/reset-password"
                  className="link link-hover"
                >
                  Forgot password?
                </Link>
              </div>
            </div>

            <button className="btn bg-green-500 text-base text-slate-200 mt-4">
              Login
            </button>
            <p className="text-center text-base">
              Don't have an account? Please{" "}
              <Link
                to="/register"
                className="text-orange-500 underline  font-medium"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
