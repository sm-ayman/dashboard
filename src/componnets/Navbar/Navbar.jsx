import React from "react";
import { Link } from "react-router";
import icon from "/dashboard.png";
import { IoMdLogOut } from "react-icons/io";
const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li className="font-semibold">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold">
              <Link to="/about">About</Link>
            </li>
            <li className="font-semibold">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <a className="flex gap-2 font-bold text-xl text-indigo-600">
            <span>Dashboard</span>
            <img src={icon} alt="" className="w-8" />
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li className="font-semibold">
            <Link to="/">Home</Link>
          </li>
          <li className="font-semibold">
            <Link to="/about">About</Link>
          </li>
          <li className="font-semibold">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">
          <IoMdLogOut size={20}/>
          Log Out
        </a>
      </div>
    </div>
  );
};

export default Navbar;
