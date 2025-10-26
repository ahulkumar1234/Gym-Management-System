import { NavLink } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useLocation } from "react-router-dom";
import Logo from "../asset/Logo.jpg"
import { FaBarsStaggered } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import './Navbar.css'
const Navbar = () => {

    const [menuOpen, SetmenuOpen] = useState(false)

    const handleHamMenu = () => {
        SetmenuOpen(!menuOpen)
        console.log("clicked")
    }

    const navigate = useNavigate()
    const location = useLocation();

    const loggedUser = localStorage.getItem("loggedUser");
    // Admin Login check
    const loggedAdmin = localStorage.getItem("Admin");


    const handlelogout = () => {
        if (loggedUser) {
            localStorage.removeItem("loggedUser");
            toast.success("Logged out successfully!");
            localStorage.removeItem("isLoggedIn");
            navigate("/login");
        }
        if (loggedAdmin) {
            localStorage.removeItem("Admin");
            toast.success("Logged out successfully!");
        }
        navigate("/login");
    }

    return (
        <nav className="flex justify-between items-center p-5 bg-purple-700 text-white w-full z-50 shadow-md shadow-gray-100">
            <div className="logo font-bold">
                <h1 className="uppercase text-3xl text-yellow-400 md:block hidden">Sky <span className="text-white">Fitness</span></h1>
                <img src={Logo} className="md:hidden block w-13" alt="" />
            </div>

            <div className="flex items-center gap-10">
                {/* large screen menu */}
                <div className={`links ${loggedUser ? "block md:block" : "hidden"} hidden`}>
                    <NavLink
                        to="/"
                        className={({ isActive }) => isActive ? "bg-purple-500 px-3 py-2 rounded font-semibold uppercase m-1" : "hover:bg-purple-500 px-3 py-2 rounded uppercase m-1"}
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about"
                        className={({ isActive }) => isActive ? "bg-purple-500 px-3 py-2 rounded font-semibold uppercase mx-1" : "hover:bg-purple-500 px-3 py-2 rounded uppercase mx-1"}
                    >
                        About
                    </NavLink>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) => isActive ? "bg-purple-500 px-3 py-2 rounded font-semibold uppercase mx-1" : "hover:bg-purple-500 px-3 py-2 rounded uppercase mx-1"}
                    >
                        Contact
                    </NavLink>
                    <NavLink
                        to="/profile"
                        className={({ isActive }) => isActive ? "bg-purple-500 px-3 py-2 rounded font-semibold uppercase mx-1" : "hover:bg-purple-500 px-3 py-2 rounded uppercase mx-1"}
                    >
                        Profile
                    </NavLink>
                </div>

                <div className={`registration ${loggedUser || loggedAdmin ? "hidden" : "block"}`}>
                    {/* Login Button */}
                    <NavLink to="/login">
                        <button className="bg-amber-500 px-4 py-2 rounded hover:bg-amber-600 transition-all duration-300 cursor-pointer uppercase active:scale-90 mx-1">
                            Login
                        </button>
                    </NavLink>

                    {/* Register Button */}
                    <NavLink to="/register">
                        <button className="bg-amber-500 px-4 py-2 rounded hover:bg-amber-600 transition-all duration-300 cursor-pointer uppercase active:scale-90 mx-1">
                            Register
                        </button>
                    </NavLink>
                </div>
                <div
                    className={`logged flex justify-center items-center 
                     ${(loggedUser || loggedAdmin) && location.pathname !== "/login" && location.pathname !== "/register"
                            ? "block"
                            : "hidden"
                        }`}
                >
                    <button
                        onClick={handlelogout}
                        className="bg-red-600 py-1.5 px-3 rounded font-semibold hover:bg-red-700 transition-all active:scale-90 cursor-pointer"
                    >
                        Logout
                    </button>
                </div>

                <div className={`${loggedUser ? "block" : "hidden"}`} onClick={handleHamMenu}>
                    {
                        menuOpen ? <RxCross1 className="text-2xl md:hidden cursor-pointer -z-50" /> : <FaBarsStaggered className="text-2xl md:hidden cursor-pointer" />
                    }
                </div>
                {/* Mobile menu (only for logged users) */}
                <div
                    className={`${loggedUser ? "block md:hidden" : "hidden"
                        } absolute top-23 left-0 h-full w-full bg-white/10 backdrop-blur-xl text-white flex flex-col justify-center items-center gap-5 py-10 px-6 transform transition-transform duration-500 ease-in-out z-40
                     ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
                >

                    <NavLink
                        to="/"
                        onClick={() => SetmenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-purple-600 px-4 py-2 rounded font-semibold uppercase text-left"
                                : "hover:bg-purple-600 px-4 py-2 rounded uppercase  text-left"
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/about"
                        onClick={() => SetmenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-purple-600 px-4 py-2 rounded font-semibold uppercase text-left"
                                : "hover:bg-purple-600 px-4 py-2 rounded uppercase  text-left"
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/contact"
                        onClick={() => SetmenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-purple-600 px-4 py-2 rounded font-semibold uppercase text-left"
                                : "hover:bg-purple-600 px-4 py-2 rounded uppercase  text-left"
                        }
                    >
                        Contact
                    </NavLink>

                    <NavLink
                        to="/profile"
                        onClick={() => SetmenuOpen(false)}
                        className={({ isActive }) =>
                            isActive
                                ? "bg-purple-600 px-4 py-2 rounded font-semibold uppercase text-left"
                                : "hover:bg-purple-600 px-4 py-2 rounded uppercase  text-left"
                        }
                    >
                        Profile
                    </NavLink>
                </div>
            </div>

        </nav>
    )
}

export default Navbar
