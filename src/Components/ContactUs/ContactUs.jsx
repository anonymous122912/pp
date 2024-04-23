import React from "react";
import { Link } from "react-router-dom";
import { Socials } from "../index.js";

export default function Contact() {
  return (
    <>
      <div className=" bg-dark-gray mx-auto w-full max-w-7xl rounded-3xl">
        <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16  sm:py-16">
          <div class=" w-full p-6 bg-transparent rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
            <div>
              <div className="flex">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                  Mail Me:{" "}
                </h5>
                <Link
                  target="_blank"
                  className="mx-4 text-xl text-white underline hover:opacity-75"
                  to="https://mail.google.com/mail/u/0/?fs=1&to=aviksain007@gmail.com&tf=cm"
                >
                  {" "}
                  aviksain007@gmail.com
                </Link>
              </div>
            </div>
            <div className="mt-2 mb-2 h-2 w-20 bg-highlighted-yellow rounded-xl"></div>
          </div>
          <div class=" w-full p-6 bg-transparent rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                Follow Me :{" "}
              </h5>
              <div className="mx-4 text-xl text-white">
                <Socials/>
              </div>
            </div>
            <div className="mt-2 mb-2 h-2 w-20 bg-highlighted-yellow rounded-xl"></div>
          </div>
        </aside>
      </div>
    </>
  );
}
