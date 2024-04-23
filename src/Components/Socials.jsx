import React from "react";
import {linkedin, twitter, github2} from "../public/index"

function Socials() {
  return (
    <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      <div class="sm:flex sm:items-center sm:justify-between">
        <div class="flex mt-4 sm:justify-center sm:mt-0">
          <a
            href="#"
            class="text-gray-500 hover:fill-blue dark:hover:text-white transform hover:translate-y-[-5px] transition-transform duration-300 ease-in-out"
            target="_blank"
          >
            <img src={twitter} alt="" /> 
            <span class="sr-only">Twitter page</span>
          </a>
          <a
            href="https://github.com/aviksain007"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 transform hover:translate-y-[-5px] transition-transform duration-300 ease-in-out"
            target="_blank"
          >
            <img src={github2} alt="" /> 
            <span class="sr-only">GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/avik-sain-387452226/"
            class="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5 transform hover:translate-y-[-5px] transition-transform duration-300 ease-in-out"
            target="_blank"
          >
            
            <img src={linkedin} alt="" /> 
            <span class="sr-only">LinkedIn</span>
          </a>
        </div>
      </div>
    </ul>
  );
}

export default Socials;
