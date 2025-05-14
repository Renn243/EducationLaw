import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Course", path: "/course" },
        { name: "paket", path: "/paket" },
        { name: "Blog", path: "/blog" },
    ];

    return (
        <div className="p-5 flex justify-between items-center">
            <div className="flex items-center gap-10">
                <div className="bg-red-500 h-10 w-10 mr-10 rounded-lg"></div>

                <div className="flex gap-10 list-none">
                    {navItems.map((item, index) => (
                        <li
                            key={index}
                            className="relative hover:text-red-500 duration-300 after:content-[''] after:absolute after:left-0 after:right-0 after:bottom-[-5px] after:h-[4px] after:w-full after:bg-red-500 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-center after:rounded-lg"
                        >
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    ))}
                </div>
            </div>

            <div className="flex gap-4">
                <Link to="/register">
                    <button
                        className="px-5 py-2 border-2 border-red-500 rounded-md font-bold text-red-500 transition-all duration-300 hover:bg-red-500 hover:text-white active:scale-95"
                    >
                        Daftar
                    </button>
                </Link>
                <Link to="/login">
                    <button
                        className="px-5 py-2 bg-red-500 rounded-md font-bold text-white transition-all duration-300 hover:bg-red-600 active:scale-95"
                    >
                        Login
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
