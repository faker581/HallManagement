import React from 'react'

export default function Navbar1() {
    return (
        <>
            <nav className="sticky top-0 z-10 bg-white bg-opacity-30  backdrop-filter backdrop-blur-lg border-b border-gray-200">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="flex items-center justify-between h-16">
                        <span className="text-2xl text-gray-900 font-semibold">SD Management</span>
                        <div className="flex space-x-4 text-gray-900 ">
                            <a href="/" className=' hover:text-gray-500  hover:underline  hover:bg-opacity-30 '>Home</a>
                            <a href="/" className=' hover:text-gray-500  hover:underline  hover:bg-opacity-30 '>About</a>
                            <a href="/" className=' hover:text-gray-500  hover:underline  hover:bg-opacity-30 '>Contact Us</a>
                            <a href="/student" className=' hover:text-gray-500  hover:underline  hover:bg-opacity-30 ' >Student Portal</a>
                            <a href='/admin' className=' hover:text-gray-500  hover:underline  hover:bg-opacity-30 '>Admin Portal</a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}
