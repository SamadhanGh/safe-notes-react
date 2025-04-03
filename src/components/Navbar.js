import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useMyContext } from "../store/ContextApi";

const Navbar = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // Access context values
  const { token, setToken, setCurrentUser, isAdmin, setIsAdmin } = useMyContext();

  const handleLogout = () => {
    ["JWT_TOKEN", "USER", "CSRF_TOKEN", "IS_ADMIN"].forEach(item => localStorage.removeItem(item));
    setToken(null);
    setCurrentUser(null);
    setIsAdmin(false);
    navigate("/login");
  };

  const NavLink = ({ to, label, isButton, isUpperCase }) => (
    <Link to={to}>
      <li
        className={`
          ${pathname === to ? "font-semibold" : ""}
          ${isButton
            ? "w-24 text-center bg-gradient-to-r from-pink-700 to-pink-900 text-white font-semibold px-4 py-2 rounded-md cursor-pointer hover:from-pink-800 hover:to-pink-950 transition-all duration-200"
            : "py-2 cursor-pointer hover:text-blue-800"
          } ${isUpperCase ? "uppercase" : ""}`}
      >
        {label}
      </li>
    </Link>
  );

  const renderLinks = () => (
    <>
      {token && (
        <>
          <NavLink to="/notes" label="My Notes" />
          <NavLink to="/create-note" label="Create Note" />
        </>
      )}
      <NavLink to="/contact" label="Contact" />
      <NavLink to="/about" label="About" />
      {token ? (
        <>
          <NavLink to="/profile" label="Profile" />
          {isAdmin && <NavLink to="/admin/users" label="Admin" isUpperCase />}
          <button
            onClick={handleLogout}
            className="w-24 text-center bg-gradient-to-r from-pink-700 to-pink-900 text-white font-semibold px-4 py-2 rounded-md cursor-pointer hover:from-pink-800 hover:to-pink-950 transition-all duration-200"
          >
            LogOut
          </button>
        </>
      ) : (
        <NavLink to="/signup" label="Sign Up" isButton />
      )}
    </>
  );

  return (
    <header className="h-headerHeight z-50 text-white bg-blue-600/30 backdrop-blur-lg shadow-lg flex items-center sticky top-0">
      <nav className="sm:px-10 px-4 flex w-full h-full items-center justify-between">
        <Link to="/">
          <h3 className="font-dancingScript text-red-500 text-3xl">Safe Note</h3>
        </Link>
        <ul
          className={`lg:static absolute left-0 top-16 w-full lg:w-fit lg:px-0 sm:px-10 px-4 lg:bg-transparent bg-blue-600/30 rounded-md ${
            headerToggle
              ? "min-h-fit max-h-navbarHeight lg:py-0 py-4 shadow-md shadow-slate-700 lg:shadow-none"
              : "h-0 overflow-hidden"
          } lg:h-auto transition-all duration-100 font-montserrat text-white flex lg:flex-row flex-col lg:gap-8 gap-2`}
        >
          {renderLinks()}
        </ul>
        <span
          onClick={() => setHeaderToggle(!headerToggle)}
          className="lg:hidden block cursor-pointer text-white shadow-md hover:text-gray-400"
        >
          {headerToggle ? <RxCross2 className="text-2xl" /> : <IoMenu className="text-2xl" />}
        </span>
      </nav>
    </header>
  );
};

export default Navbar;
