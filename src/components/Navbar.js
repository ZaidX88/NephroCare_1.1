import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaUsers, FaFileAlt, FaBell, FaHospital } from 'react-icons/fa';
import '../assets/css/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar bg-royal-blue text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Brand Logo */}
        <div className="text-2xl font-bold flex items-center space-x-2">
          <FaHospital className="text-purple" />
          <NavLink to="/" className="hover:text-purple transition-colors">
            NephroCare
          </NavLink>
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

        {/* Menu Links */}
        <div
          className={`lg:flex lg:items-center lg:space-x-6 ${
            isOpen ? 'block' : 'hidden'
          } w-full lg:w-auto mt-4 lg:mt-0 bg-royal-blue lg:bg-transparent`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-6">
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
      </div>
    </nav>
  );
}

export default Navbar;