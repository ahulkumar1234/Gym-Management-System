import { Link } from "react-router-dom"
import { useState, useEffect, useContext } from "react"
import { AdminContext } from "./Admin";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Login = () => {

    const navigate = useNavigate()

    const admin = useContext(AdminContext);

    const [active, setActive] = useState("user")

    const [input, setinput] = useState({ email: "", password: "" })

    // useEffect(() => {
    //     localStorage.setItem("GYMUSER", JSON.stringify(input))
    // }, [])


    const handlechnage = (e) => {
        const { name, value } = e.target
        setinput({ ...input, [name]: value })
    }

    const handlesubmit = async (e) => {
        e.preventDefault();

        localStorage.setItem("isLoggedIn", "true");
        // localStorage.setItem("role", "admin");


        if (active === "admin") {
            if (admin.email === input.email && admin.password === input.password) {
                localStorage.setItem("Admin", JSON.stringify(admin));
                navigate('/dashboard');
                toast.success("Admin Login Successful!");
            } else {
                toast.error("Invalid Admin Credentials!");
            }
            return;
        }

        // 👇 JSON Server se users fetch karo
        try {
            const res = await fetch("http://localhost:3000/users");
            const users = await res.json();

            // match user credentials
            const foundUser = users.find(
                (u) => u.email === input.email && u.password === input.password
            );

            if (foundUser) {
                localStorage.setItem("loggedUser", JSON.stringify(foundUser));
                toast.success(`Welcome ${foundUser.name || "User"}!`);
                navigate("/");
            } else {
                toast.error("Invalid User Credentials!");
            }
        } catch (error) {
            console.error("Login Error:", error);
            toast.error("Server Error! Try again later.");
        }

        setinput({ email: "", password: "" });
    };


    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-[400px]">
                <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">Login</h1>
                <div className="heading flex justify-evenly items-center gap-6 mb-[50px] border border-gray-300 p-2 rounded-full bg-purple-700">
                    <button
                        onClick={() => setActive("user")}
                        className={`px-4 py-1 rounded cursor-pointer text-xl uppercase font-semibold transition-all duration-300 ${active === "user" ? "bg-purple-600 text-white hover:bg-purple-500" : "text-purple-700 text-white"
                            }`}
                    >
                        User
                    </button>

                    {/* Admin Button */}
                    <button
                        onClick={() => setActive("admin")}
                        className={`px-4 py-1 rounded cursor-pointer text-xl uppercase font-semibold transition-all duration-300 ${active === "admin" ? "bg-purple-600 text-white hover:bg-purple-500" : "text-purple-700 text-white"
                            }`}
                    >
                        Admin
                    </button>
                </div>
                <form className="flex flex-col gap-5" onSubmit={handlesubmit}>
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            name="email"
                            value={input.email}
                            onChange={handlechnage}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            name="password"
                            value={input.password}
                            onChange={handlechnage}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-purple-700 text-white py-3 rounded-lg mt-4 hover:bg-purple-800 transition-all duration-300 cursor-pointer"
                    >
                        Login
                    </button>

                    <p className="text-sm text-center text-gray-600 mt-4">
                        Don’t have an account? <Link to="/register" className="text-blue-600 font-medium hover:underline">Register</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
