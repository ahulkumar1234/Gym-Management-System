import { useState } from "react";
import toast from "react-hot-toast";
import AdminNav from "./AdminLayout";

const Registration = () => {

    const RegisterApi = 'http://localhost:3000/UserRegisterData'

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        gender: "",
        plan: "",
        phone: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            !formData.name ||
            !formData.email ||
            !formData.age ||
            !formData.gender ||
            !formData.plan ||
            !formData.phone
        ) {
            toast.error("All fields are required!");
            return;
        }

        const res = await fetch(RegisterApi);
        const data = res.json();
        console.log(data)

        toast.success("Member registered successfully!");
        console.log("New Member:", formData);
        setFormData({
            name: "",
            email: "",
            age: "",
            gender: "",
            plan: "",
            phone: "",
        });
    };

    return (
        <>
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <div className="bg-white shadow-xl p-8 rounded-2xl w-[65vw] sm:w-[600px] ">
                    <h1 className="text-2xl font-bold text-purple-700 text-center mb-6 uppercase">
                        Member Registration
                    </h1>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />

                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={formData.age}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />

                        <select
                            name="gender"
                            value={formData.gender}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Other">Other</option>
                        </select>

                        <select
                            name="plan"
                            value={formData.plan}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        >
                            <option value="">Choose Plan</option>
                            <option value="Monthly">Monthly</option>
                            <option value="Quarterly">Quarterly</option>
                            <option value="Yearly">Yearly</option>
                        </select>

                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />

                        <button
                            type="submit"
                            className="bg-purple-700 text-white font-semibold py-2 rounded-lg hover:bg-purple-800 transition-all duration-200 active:scale-95"
                        >
                            Register Member
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Registration;
