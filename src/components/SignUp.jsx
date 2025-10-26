import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const SignUp = () => {

    const navigate = useNavigate()

    const [Input, SetInput] = useState({ name: "", email: "", password: "" })

    const [GymUsers, SetGymUsers] = useState([])


    const handleChnage = (e) => {
        const { name, value } = e.target
        SetInput({ ...Input, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // ✅ Validation check
        if (!Input.name || !Input.email || !Input.password) {
            toast.error("All fields are required!");
            return;
        }

        // ✅ Get existing users from local storage
        const existingUsers = JSON.parse(localStorage.getItem("NewGymUsers")) || [];

        // ✅ Check for duplicate email
        const userExists = existingUsers.find(
            (user) => user.email === Input.email
        );

        if (userExists) {
            toast.error("User already exists!");
            return;
        }

        // ✅ Add new user to local storage
        existingUsers.push(Input);
        localStorage.setItem("NewGymUsers", JSON.stringify(existingUsers));

        // ✅ Optional: Save to JSON server
        try {
            const res = await fetch("http://localhost:3000/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(Input),
            });

            if (res.ok) {
                toast.success("User Registered Successfully!");
                navigate("/login");
            } else {
                toast.error("Registration Failed!");
            }
        } catch (err) {
            console.error("Server error:", err);
            toast.error("Server not running!");
        }
    };



    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-[400px]">
                <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">Register</h1>

                <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your Name"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            name="name"
                            value={Input.name}
                            onChange={handleChnage}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            name="email"
                            value={Input.email}
                            onChange={handleChnage}
                        />
                    </div>

                    <div className="flex flex-col">
                        <label className="text-gray-700 font-medium mb-2">Password</label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            name="password"
                            value={Input.password}
                            onChange={handleChnage}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-purple-700 text-white py-3 rounded-lg mt-4 hover:bg-purple-800 transition-all duration-300 cursor-pointer"
                    >
                        Login
                    </button>

                    <p className="text-sm text-center text-gray-600 mt-4">
                        Already have an account? <Link to="/login" className="text-blue-600 font-medium hover:underline">Login</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default SignUp
