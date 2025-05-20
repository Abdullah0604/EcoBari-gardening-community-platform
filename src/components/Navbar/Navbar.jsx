import React, { useState } from "react";
import { NavLink, Link } from "react-router";
import userIcon from "/assets/user-account.png";
import logoIcon from "/assets/green-home.png";
// import AuthContext from "../../contexts/AuthContext";

function Navbar() {
  // const { user, logoutUser } = use(AuthContext);
  const user = {
    displayName: "Ahad Uddin",
  };
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
      <li className="font-medium text-lightGray">
        <NavLink to="/share-garden-tip">Share a Garden Tip </NavLink>
      </li>
      <li className="font-medium text-lightGray">
        <NavLink to="/my-tips">My Tips </NavLink>
      </li>
    </>
  );

  // const handleLogOut = () => {
  //   logoutUser();
  // };
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
    <nav className="navbar py-8 ">
      <div className="navbar-start gap-2">
        <img className="w-12" src={logoIcon} alt="" />
        <NavLink
          to="/"
          className="font-bold   text-green-600 text-xl md:text-2xl"
        >
          EcoBari
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className=" nav flex gap-x-10">{links}</ul>
      </div>

      <div className="navbar-end ">
        {user ? (
          <div className="relative dropdown">
            <img
              src={userIcon}
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
              <div className="lg:hidden border-b-2 border-orange-600">
                {links}
              </div>
              <li className="font-medium text-lightGray">
                {user && (
                  <button
                    //  onClick={handleLogOut}
                    className="w-full"
                  >
                    Log out
                  </button>
                )}
              </li>
            </ul>
          </div>
        ) : (
          <Link
            to="/login"
            className="btn hidden md:flex bg-yellow-400 px-10 text-lg"
          >
            Login
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
