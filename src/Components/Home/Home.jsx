import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../img.png'
import Type from './Type';
import {About, Projects, CodingProfiles, Education, ContactUs} from "../index.js"
export default function Home() {

    return (
        <div className=" bg-dark-gray mx-auto w-full max-w-7xl rounded-3xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
                <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
                        
                        <h2 className="text-4xl font-bold sm:text-5xl text-white">
                            <span className="helloWorld sm:block block text-xl">console.log("Hello World")</span>
                            <p className='myName'>I'm Avik Sain</p>
                            <span className="myName sm:block text-xl"><Type /></span>
                        </h2>

                        {/* We use 'link' tag in the place of 'a' tag because it did refreash the page */}

                        <button
                            className="inline-flex items-center 
                            hover:scale-110 transition duration-500 ease-in-out
                            text-yellow-400 hover:text-black border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-3xl text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
                            to="/"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
                            <span className='mx-1'>Resume</span>
                        </button>
                    </div>
                </div>

                <div className="absolute rounded-full inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full">
                    <img className="border-4 border-yellow-500 rounded-full w-80" src={img} alt="image1" />
                </div>
            </aside>
            {/* <About/>
            <Projects/>
            <CodingProfiles/>
            <Education/>
            <ContactUs/> */}
        </div>
    );
}