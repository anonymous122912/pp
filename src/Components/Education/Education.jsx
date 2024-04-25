import React from 'react'

function Education() {
    return (
        <div className="bg-dark-gray mx-auto w-full max-w-7xl rounded-3xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16  sm:py-16">
                <div class=" w-full p-6 bg-transparent rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className='flex justify-between'>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Haldia Institute of Technology</h5>
                        <h4 class="mb-2 text-xl tracking-tight text-white dark:text-white">Aug 2021 - Jul 2025</h4>
                    </div>
                    <p class="mb-3 font-normal text-white dark:text-gray-400">BTech in Information Technology</p>
                    <div className='mt-2 mb-2 h-2 w-20 bg-highlighted-yellow rounded-xl'></div>
                </div>
                <div class=" w-full p-6 bg-transparent rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
                    <div className='flex justify-between'>
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">Sodepur High School</h5>
                        <h4 class="mb-2 text-xl tracking-tight text-white dark:text-white">Jun 2018 - Jul 2020</h4>
                    </div>
                    <p class="mb-3 font-normal text-white dark:text-gray-400">11th-12th, WBCHSE</p>
                    <div className='mt-2 mb-2 h-2 w-20 bg-highlighted-yellow rounded-xl'></div>
                </div>

            </aside>
        </div>
    )
}

export default Education