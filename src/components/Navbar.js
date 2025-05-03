import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUsers, FaBell, FaHospital } from 'react-icons/fa';
import '../assets/css/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar bg-royal-blue text-white shadow-lg relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand Logo */}
        <div className="text-2xl font-bold flex items-center space-x-2">
          <FaHospital className="text-purple" />
          <NavLink to="/" className="hover:text-purple transition-colors">
            NephroCare
          </NavLink>
        </div>

        {/* Desktop Menu (Always Visible) */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <ul className="flex flex-row space-x-6">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center space-x-2 py-2 px-4 rounded transition-colors ${
                    isActive
                      ? 'bg-purple text-white'
                      : 'hover:bg-purple hover:text-white'
                  }`
                }
              >
                <FaHome />
                <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/patients"
                className={({ isActive }) =>
                  `flex items-center space-x-2 py-2 px-4 rounded transition-colors ${
                    isActive
                      ? 'bg-purple text-white'
                      : 'hover:bg-purple hover:text-white'
                  }`
                }
              >
                <FaUsers />
                <span>Patients</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/alerts"
                className={({ isActive }) =>
                  `flex items-center space-x-2 py-2 px-4 rounded transition-colors ${
                    isActive
                      ? 'bg-purple text-white'
                      : 'hover:bg-purple hover:text-white'
                  }`
                }
              >
                <FaBell />
                <span>Alerts</span>
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="lg:hidden focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu (Mobile Only) */}
      <div
        className={`absolute top-full left-0 w-full bg-royal-blue shadow-lg transition-transform duration-300 ${
          isOpen ? 'block' : 'hidden'
        } lg:hidden`}
      >
        <ul className="flex flex-col space-y-2 py-2">
          <li>
            <NavLink
              to="/"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center space-x-2 py-2 px-4 rounded transition-colors ${
                  isActive
                    ? 'bg-purple text-white'
                    : 'hover:bg-purple hover:text-white'
                }`
              }
            >
              <FaHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/patients"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center space-x-2 py-2 px-4 rounded transition-colors ${
                  isActive
                    ? 'bg-purple text-white'
                    : 'hover:bg-purple hover:text-white'
                }`
              }
            >
              <FaUsers />
              <span>Patients</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/alerts"
              onClick={closeMenu}
              className={({ isActive }) =>
                `flex items-center space-x-2 py-2 px-4 rounded transition-colors ${
                  isActive
                    ? 'bg-purple text-white'
                    : 'hover:bg-purple hover:text-white'
                }`
              }
            >
              <FaBell />
              <span>Alerts</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;