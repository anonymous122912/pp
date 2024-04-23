import React from "react";
import { Link } from "react-router-dom";
import { leetcode, codeforces, codechef, gfg } from "../../public/index.js";

function CodingProfile() {
  return (
    <>
      <div className=" bg-dark-gray mx-auto w-full max-w-7xl rounded-3xl">
        <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16  sm:py-16">
          <div class=" w-full p-6 bg-transparent rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                LeetCode(Knight)
              </h5>
              <Link className="mx-4" to="">
              <img src={leetcode} alt="" /> 
              </Link>
            </div>
            <div className="mt-2 mb-2 h-2 w-20 bg-highlighted-yellow rounded-xl"></div>
            <ul class="mb-3 text-xl list-disc list-inside text-white dark:text-gray-400">
              <li>Knight Badge</li>
              <li>Problem Solved - 500+</li>
            </ul>
          </div>
          <div class=" w-full p-6 bg-transparent rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                Codeforces(Expert)
              </h5>
              <Link className="mx-4" to="/">
                <img src={codeforces} alt="" />
              </Link>
            </div>
            <div className="mt-2 mb-2 h-2 w-20 bg-highlighted-yellow rounded-xl"></div>
            <ul class="mb-3 text-xl list-disc list-inside text-white dark:text-gray-400">
              <li>Knight Badge</li>
              <li>Problem Solved - 500+</li>
            </ul>
          </div>
          <div class=" w-full p-6 bg-transparent rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                CodeChef(4 Star)
              </h5>
              <Link className="mx-4" to="">
                <img src={codechef} alt="" />
              </Link>
            </div>
            <div className="mt-2 mb-2 h-2 w-20 bg-highlighted-yellow rounded-xl"></div>
            <ul class="mb-3 text-xl list-disc list-inside text-white dark:text-gray-400">
              <li>Knight Badge</li>
              <li>Problem Solved - 500+</li>
            </ul>
          </div>
          <div class=" w-full p-6 bg-transparent rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
                GeeksforGeeks
              </h5>
              <Link className="mx-4 mt-2" to="">
                <img src={gfg} alt="" />
              </Link>
            </div>
            <div className="mt-2 mb-2 h-2 w-20 bg-highlighted-yellow rounded-xl"></div>
            <ul class="mb-3 text-xl list-disc list-inside text-white dark:text-gray-400">
              <li>Knight Badge</li>
              <li>Problem Solved - 500+</li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

export default CodingProfile;
