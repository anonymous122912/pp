import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import GIF from "./Code.gif";
export default function Header() {
  return (
    <>
      <header className="m-5 mx-auto w-full max-w-7xl shadow sticky z-50 top-0 ">
        <nav className="bg-dark-gray text-white dark:bg-gray-900 z-20 top-0 start-0 rounded-3xl">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
            <Link to="/" className="flex items-center">
              <img className="h-7 mr-1" src={GIF} alt="Logo" />
              <h1 className="text-3xl font-bold italic">Avik</h1>
            </Link>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:border-2 focus:outline-none hover:border-yellow-300 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FDC965"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-align-right"
                >
                  <line x1="21" y1="6" x2="3" y2="6" />
                  <line x1="21" y1="12" x2="9" y2="12" />
                  <line x1="21" y1="18" x2="7" y2="18" />
                </svg>
              </button>
            </div>
            <div
              className="bg-dark-gray items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-900 rounded-lg bg-dark-gray text-white md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) => `${
                      isActive
                        ? "md:text-highlighted-yellow bg-highlighted-yellow text-black"
                        : "text-white"
                    } block py-2 px-3 rounded md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-yellow-100
                                        md:dark:text-highlighted-yellow

                                        transform hover:translate-y-[-3px] transition-transform duration-300 ease-in-out
                                        `}
                                        aria-current="page"
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) => `${
                      isActive
                        ? "md:text-highlighted-yellow bg-highlighted-yellow text-black"
                        : "text-white"
                    } block py-2 px-3 rounded md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-yellow-100
                                        md:dark:text-highlighted-yellow

                                        transform hover:translate-y-[-3px] transition-transform duration-300 ease-in-out
                                        `}
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/projects"
                    className={({ isActive }) => `${
                      isActive
                        ? "md:text-highlighted-yellow bg-highlighted-yellow text-black"
                        : "text-white"
                    } block py-2 px-3 rounded md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-yellow-100
                                        md:dark:text-highlighted-yellow

                                        transform hover:translate-y-[-3px] transition-transform duration-300 ease-in-out
                                        `}
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/coding-profiles"
                    className={({ isActive }) => `${
                      isActive
                        ? "md:text-highlighted-yellow bg-highlighted-yellow text-black"
                        : "text-white"
                    } block py-2 px-3 rounded md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-yellow-100
                                        md:dark:text-highlighted-yellow

                                        transform hover:translate-y-[-3px] transition-transform duration-300 ease-in-out
                                        `}
                  >
                    Coding Profiles
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/education"
                    className={({ isActive }) => `${
                      isActive
                        ? "md:text-highlighted-yellow bg-highlighted-yellow text-black"
                        : "text-white"
                    } block py-2 px-3 rounded md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-yellow-100
                                        md:dark:text-highlighted-yellow

                                        transform hover:translate-y-[-3px] transition-transform duration-300 ease-in-out
                                        `}
                  >
                    Education
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) => `${
                      isActive
                        ? "md:text-highlighted-yellow bg-highlighted-yellow text-black"
                        : "text-white"
                    } block py-2 px-3 rounded md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-yellow-100
                                        md:dark:text-highlighted-yellow

                                        transform hover:translate-y-[-3px] transition-transform duration-300 ease-in-out
                                        `}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
