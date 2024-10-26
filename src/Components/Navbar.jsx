import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { NavLink, Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const onToggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="bg-orange-300 py-3 w-full z-50 transition-all duration-300 sticky top-0">

            <nav className="flex justify-between items-center w-[94%] h-14 mx-auto">
                <Link to="/">
                    <img
                        className="w-40  object-contain cursor-pointer"
                        src="./Images/fournetwork.png"
                        alt="Logo"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex flex-row text-[20px] items-center gap-[3vw]">
                    {menuItems.map((item, index) => (
                        <li key={index}>
                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `group ${isActive ? "active" : ""}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {item.name}
                                        <div
                                            className={`bg-[#ffa75c] h-[2px] ${isActive ? "w-full" : "w-0"} group-hover:w-full transition-all duration-500`}
                                        ></div>
                                    </>
                                )}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Icon */}
                <div
                    onClick={onToggleMenu}
                    className="text-3xl cursor-pointer md:hidden text-black"
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </nav>

            {/* Mobile Dropdown Menu with Slide-in Animation */}
            <ul
                className={`fixed top-4 left-0 w-[350px] h-[350px] bg-white z-40 flex flex-col text-xl gap-3 mt-12 p-1 transition-transform duration-500 ease-out ${
                    menuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                {menuItems.map((item, index) => (
                    <li key={index} className="w-full">
                        <NavLink
                            to={item.path}
                            className={({ isActive }) =>
                                `block text-center py-2 ${isActive ? "text-[#ffa75c]" : "text-black"}`
                            }
                            onClick={() => setMenuOpen(false)} // Close menu on selection
                        >
                            {item.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </header>
    );
}

const menuItems = [
    { name: 'Home', path: '/' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Therapysessions', path: '/therapysessions' },
    { name: 'About Us', path: '/aboutus' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'Contact Us', path: '/contactus' },
];

export default Navbar;
