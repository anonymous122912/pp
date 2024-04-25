import React from "react";
import {
  html,
  css,
  tailwind,
  javascript,
  react,
  nodejs,
  expressjs,
  mysql,
  mongodb,
  git,
  github
} from "../../public/index.js";

export default function About() {
  return (
    <div className=" bg-dark-gray mx-auto w-full max-w-7xl rounded-3xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16  sm:py-16">
        <div class=" w-full p-6 bg-transparent rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              About Me
            </h5>
          </a>
          <div className="mt-2 mb-2 h-2 w-20 bg-highlighted-yellow rounded-xl"></div>
          <p class="mb-3 font-normal text-white dark:text-gray-400">
            Hi i am avik
          </p>
        </div>
        <div class=" w-full p-6 bg-transparent rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">
              What I know
            </h5>
          </a>
          <div className="mt-2 mb-2 h-2 w-20 bg-highlighted-yellow rounded-xl"></div>

          <div class="text-white col-span-2 p-6 md:col-span-2 lg:col-span-3">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div class="flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg">
                <div class="text-primary font-medium text-lg tracking-wider">
                  Frontend
                </div>
                <div class="flex flex-wrap gap-2">
                  <div class="rounded-md bg-body text-xs text-primary p-2">
                    <img src={html} alt="" />
                  </div>
                  <div class="rounded-md bg-body text-xs text-primary p-2">
                    <img src={css} alt="" />
                  </div>
                  <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                    <img src={tailwind} alt="" />
                  </div>
                  <div class="rounded-md bg-body text-xs text-primary p-2 border border-yellow-500/60">
                    <img src={javascript} alt="" />
                  </div>
                  <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                    <img src={react} alt="" />
                  </div>
                </div>
              </div>
              <div class="flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg">
                <div class="text-primary font-medium text-lg tracking-wider">
                  Backend
                </div>
                <div class="flex flex-wrap gap-2">
                  <div class="rounded-md bg-body text-xs text-primary p-2 border border-green-500/60">
                    <img src={nodejs} alt="" />
                  </div>
                  <div class="rounded-md bg-body text-xs text-primary p-2 border border-gray-500/60">
                    <img src={expressjs} alt="" />
                  </div>
                </div>
              </div>
              <div class="flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg">
                <div class="text-primary font-medium text-lg tracking-wider">
                  Database
                </div>
                <div class="flex flex-wrap gap-2">
                  <div class="rounded-md bg-body text-xs text-primary p-2 border border-blue-500/60">
                    <img src={mysql} alt="" />
                  </div>
                  <div class="rounded-md bg-body text-xs text-primary p-2 border border-emerald-500/60">
                    <img src={mongodb} alt="" />
                  </div>
                </div>
              </div>
              <div class="flex-1 flex flex-col gap-4 bg-cardPrimary p-4 rounded-md shadow-lg">
                <div class="text-primary font-medium text-lg tracking-wider">
                  Others
                </div>
                <div class="flex flex-wrap gap-2">
                  <div class="rounded-md bg-body text-xs text-primary p-2 border border-orange-500/60">
                  <img src={git} alt="" />
                  </div>
                  <div class="rounded-md bg-body text-xs text-primary p-2">
                  <img src={github} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
