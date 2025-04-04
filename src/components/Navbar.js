import React, { useState, memo } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useMyContext } from "../store/ContextApi";

const Navbar = () => {
  const [headerToggle, setHeaderToggle] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { token, setToken, setCurrentUser, isAdmin, setIsAdmin } = useMyContext();

  const handleLogout = () => {
    ["JWT_TOKEN", "USER", "CSRF_TOKEN", "IS_ADMIN"].forEach(item => localStorage.removeItem(item));
    setToken(null);
    setCurrentUser(null);
    setIsAdmin(false);
    navigate("/login");
  };

  // Memoized NavLink for optimization
  const NavLink = memo(({ to, label, isUpperCase }) => (
    <li>
      <Link
        to={to}
        className={`py-2 transition-all duration-200 ${
          pathname === to ? "font-semibold text-blue-600" : "text-white"
        } hover:text-blue-900 ${isUpperCase ? "uppercase" : ""}`}
      >
        {label}
      </Link>
    </li>
  ));

  return (
    <header className="h-headerHeight z-50 bg-blue-600/30 backdrop-blur-lg shadow-lg flex items-center sticky top-0 text-white">
      <nav className="container mx-auto flex items-center justify-between px-4 lg:px-10 h-full">
        
        {/* Logo */}
        <Link to="/">
          <h3 className="font-dancingScript text-red-500 text-3xl">Safe Note</h3>
        </Link>

        {/* Navigation Links */}
        <ul
          className={`lg:flex lg:gap-8 items-center absolute lg:static left-0 top-16 w-full lg:w-auto bg-blue-600/30 rounded-md lg:bg-transparent shadow-md lg:shadow-none transition-all duration-200 ${
            headerToggle ? "max-h-screen py-4" : "h-0 overflow-hidden lg:h-auto"
          }`}
        >
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
                className="w-24 bg-gradient-to-r from-pink-700 to-pink-900 text-white font-semibold px-4 py-2 rounded-md cursor-pointer hover:from-pink-800 hover:to-pink-950 transition-all duration-200"
              >
                LogOut
              </button>
            </>
          ) : (
            <Link
              to="/signup"
              className="w-24 text-center bg-gradient-to-r from-pink-700 to-pink-900 text-white font-semibold px-4 py-2 rounded-md cursor-pointer hover:from-pink-800 hover:to-pink-950 transition-all duration-200"
            >
              Sign Up
            </Link>
          )}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setHeaderToggle(!headerToggle)}
          className="lg:hidden text-white text-2xl hover:text-gray-300"
        >
          {headerToggle ? <RxCross2 /> : <IoMenu />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
