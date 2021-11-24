import React from "react";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useBanner from "../../../Hooks/useBanner";
import useShowHeader from "../../../Hooks/useShowHeader";
import logo from "../../../images/logos/Group 1329.png";

const Header = () => {
  const [showHeader] = useShowHeader();
  const [showBanner] = useBanner();
  const { user, userSignOut } = useAuth();
  // console.log(user);
  // console.log(showBanner);
  return (
    <>
      {showHeader && (
        <header className=" py-3">
          <div className="flex justify-between items-center container mx-auto ">
            <div>
              <img className="w-56" src={logo} alt="" />
            </div>
            <div className="w-2/3 lg:w-1/2 flex justify-end items-center">
              <div>
                <NavLink
                  exact
                  activeClassName="text-green-700 border-b-2 border-green-700"
                  to="/"
                  className=" px-4 py-3 font-semibold transition-all"
                >
                  Home
                </NavLink>
                <NavLink
                  activeClassName="text-green-700 border-b-2 border-green-700"
                  to="/registered-list"
                  className=" px-4 py-3 font-semibold transition-all"
                >
                  Registered List
                </NavLink>
                <NavLink
                  activeClassName="text-green-700 border-b-2 border-green-700"
                  to="/my-events"
                  className=" px-4 py-3 font-semibold transition-all"
                >
                  Events
                </NavLink>
              </div>

              {user.email ? (
                <div className="flex items-center ml-9">
                  <img className="w-9 rounded-3xl" src={user.photoURL} alt="" />
                  <h3 className="mx-2 font-bold">{user.displayName}</h3>
                  <button
                    onClick={userSignOut}
                    className="bg-blue-500 px-7 py-3 text-white rounded-md"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <div className="ml-9">
                  <Link to="/log-in">
                    <button className="bg-blue-500 px-7 py-3 text-white rounded-md">
                      Log in
                    </button>
                  </Link>
                  <Link to="/register">
                    <button className="bg-gray-600 px-7 py-3 ml-2 text-white rounded-md">
                      Register
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>
          {showBanner && (
            <div className="text-center my-12">
              <h2 className="text-4xl mb-4 font-bold uppercase py-5  tracking-wide ">
                i grow by helping people in need
              </h2>
              <div className="flex justify-center items-center  bg-red-100 w-1/4 mx-auto border rounded-sm overflow-hidden">
                <input
                  className="w-full outline-none bg-white px-2 py-2  "
                  type="text"
                  placeholder="search..."
                />
                <button className="bg-blue-500 px-5 py-2 text-white   ">
                  Search
                </button>
              </div>
            </div>
          )}
        </header>
      )}
    </>
  );
};

export default Header;
