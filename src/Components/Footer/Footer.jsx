import React from "react";
import { Socials } from "../index.js";

export default function Footer() {
  return (
    <footer class="m-5 mx-auto w-full max-w-7xl bg-dark-gray rounded-3xl shadow  dark:bg-gray-800">
      <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {" "}
          <a href="" class="hover:underline">
            AvikSain
          </a>
          . All Rights Reserved.
        </span>
        <Socials/>
      </div>
    </footer>
  );
}
