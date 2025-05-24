import React, { use, useEffect, useState } from "react";
import { NavLink, Link } from "react-router";
import userIcon from "/assets/user-account.png";
import logoIcon from "/assets/green-home.png";
import AuthContext from "../../contexts/AuthContext";
import { RiMenuFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
import { IoMoon, IoSunny } from "react-icons/io5";
function Navbar() {
  const { user, logoutUser } = use(AuthContext);
  const [isActive, setIsActive] = useState(false);
  const [isName, setName] = useState(false);

  // theme control start
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPreferDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPreferDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  // console.log(user);
  const links = (
    <>
      <li className="font-medium text-lightGray">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="font-medium text-lightGray">
        <NavLink to="/explore-gardeners"> Explore Gardeners</NavLink>
      </li>
      <li className="font-medium text-lightGray">
        <NavLink to="/browse-tips">Browse Tips </NavLink>
      </li>
      {user && (
        <>
          {" "}
          <li className="font-medium text-lightGray">
            <NavLink to="/share-garden-tip">Share a Garden Tip </NavLink>
          </li>
          <li className="font-medium text-lightGray">
            <NavLink to="/my-tips">My Tips </NavLink>
          </li>
        </>
      )}
    </>
  );

  const handleLogOut = () => {
    logoutUser();
  };
  const showName = () => {
    if (user) {
      setName(true);
    }
  };
  const hideName = () => {
    if (user) {
      setName(false);
    }
  };
  return (
    <nav className="navbar py-5 fixed top-0 mb-10  max-w-[1400px] w-full mx-auto z-50  backdrop-blur-md   ">
      <div className="navbar-start gap-2">
        <img className="w-12" src={logoIcon} alt="" />
        <NavLink
          to="/"
          className="font-bold text-green-600  text-xl md:text-2xl"
        >
          EcoBari
        </NavLink>
      </div>

      <div className="navbar-center hidden min-[1100px]:flex">
        <ul className=" nav flex gap-x-10">{links}</ul>
      </div>

      <div className="navbar-end ">
        {/* theme controller */}
        <div>
          <button
            onClick={toggleTheme}
            className=" p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors mr-3"
          >
            {theme === "dark" ? (
              <span className="text-amber-400">
                <IoSunny size={24} />
              </span>
            ) : (
              <span className="">
                <IoMoon size={24} />
              </span>
            )}
          </button>
        </div>
        {user ? (
          <div className="relative dropdown">
            <img
              src={user ? user.photoURL : userIcon}
              className="w-10 h-10 mr-2 object-cover rounded-full"
              alt=""
              onMouseEnter={showName}
              onMouseLeave={hideName}
              tabIndex={0}
              role="button"
            />
            {isName && (
              <span className="absolute whitespace-nowrap bg-slate-200 rounded-md  shadow-md px-4   -left-23">
                {user.displayName}
              </span>
            )}

            <ul
              tabIndex={0}
              className="absolute -left-30  nav menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-42 p-2 shadow"
            >
              <div className="min-[1100px]:hidden border-b-2 border-orange-400">
                {links}
              </div>
              <li className="font-medium text-lightGray">
                <button onClick={handleLogOut} className="w-full">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <>
            <div className="dropdown min-[1100px]:hidden">
              <button
                className="pt-2 mr-2"
                onClick={() => setIsActive(!isActive)}
              >
                {isActive ? <RxCross2 size={24} /> : <RiMenuFill size={24} />}
              </button>

              {isActive && (
                <ul
                  tabIndex={0}
                  className="absolute -left-30  nav menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-42 p-2 shadow"
                >
                  <div className="min-[1100px]:hidden border-b-2 border-orange-400">
                    {links}
                  </div>
                  <li className="font-medium md:hidden text-lightGray">
                    <Link to="/login">
                      <button onClick={handleLogOut} className="w-full">
                        Login
                      </button>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
            <Link
              to="/login"
              className="btn hidden  md:flex bg-green-500 text-white px-10 text-lg"
            >
              Login
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
