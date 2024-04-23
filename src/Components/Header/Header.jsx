import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import GIF from "./Code.gif";
export default function Header() {
  return (
    <>
      <header className="m-5 mx-auto w-full max-w-7xl shadow sticky z-50 top-0 ">
        <nav className="bg-dark-gray text-white dark:bg-gray-900 z-20 top-0 start-0 rounded-3xl">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
            <Link className="flex">
              {/* <svg className="mt-3 mx-1 h-7 svg-inline--fa fa-code text-3xl" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="code" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" style={{ color: "rgb(220, 192, 69)" }}><path fill="currentColor" d="M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z"></path></svg> */}
              <img className=" mt-3 mx-1 h-7" src={GIF} alt="" />
              <h1 className="m-2 text-3xl text-white italic bold">Avik</h1>
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-align-right"
                >
                  <line x1="21" x2="3" y1="6" y2="6" />
                  <line x1="21" x2="9" y1="12" y2="12" />
                  <line x1="21" x2="7" y1="18" y2="18" />
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
                                        
                                        transform hover:translate-y-[-3px] transition-transform duration-300 ease-in-out`}
                    aria-current="page"
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
                                        
                                        transform hover:translate-y-[-3px] transition-transform duration-300 ease-in-out`}
                    aria-current="page"
                  >
                    Projects
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="coding-profiles"
                    className={({ isActive }) => `${
                      isActive
                        ? "md:text-highlighted-yellow bg-highlighted-yellow text-black"
                        : "text-white"
                    } block py-2 px-3 rounded md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-yellow-100
                                        md:dark:text-highlighted-yellow
                                        
                                        transform hover:translate-y-[-3px] transition-transform duration-300 ease-in-out`}
                  >
                    Coding Profiles
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="education"
                    className={({ isActive }) => `${
                      isActive
                        ? "md:text-highlighted-yellow bg-highlighted-yellow text-black"
                        : "text-white"
                    } block py-2 px-3 rounded md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-yellow-100
                                        md:dark:text-highlighted-yellow
                                        
                                        transform hover:translate-y-[-3px] transition-transform duration-300 ease-in-out`}
                  >
                    Education
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="contact-us"
                    className={({ isActive }) => `${
                      isActive
                        ? "md:text-highlighted-yellow bg-highlighted-yellow text-black"
                        : "text-white"
                    } block py-2 px-3 rounded md:bg-transparent md:p-0 md:hover:bg-transparent md:hover:text-yellow-100
                                        md:dark:text-highlighted-yellow
                                        
                                        transform hover:translate-y-[-3px] transition-transform duration-300 ease-in-out`}
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
