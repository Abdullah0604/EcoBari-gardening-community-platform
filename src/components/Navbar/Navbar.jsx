import React, { use, useState } from "react";
import { NavLink, Link } from "react-router";
import userIcon from "/assets/user-account.png";
import logoIcon from "/assets/green-home.png";
import AuthContext from "../../contexts/AuthContext";
import { RiMenuFill } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";
function Navbar() {
  const { user, logoutUser } = use(AuthContext);
  const [isActive, setIsActive] = useState(false);
  const [isName, setName] = useState(false);
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
    <nav className="navbar py-5 fixed top-0  max-w-[1400px] w-full mx-auto z-50 backdrop-blur-md   ">
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
        <label className="swap swap-rotat pt-1 mr-2">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" className="theme-controller" value="dark" />

          {/* sun icon */}
          <svg
            className="swap-off h-8 w-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-on h-7 w- fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
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
              <span className="absolute whitespace-break-spaces -left-10">
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
