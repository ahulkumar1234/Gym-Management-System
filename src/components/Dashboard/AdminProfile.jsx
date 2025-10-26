import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import AdminNav from "./AdminLayout";

const AdminProfile = () => {
    const adminData = JSON.parse(localStorage.getItem("Admin"));

    const navigate = useNavigate();
    let backbtn = () => {
        navigate("/dashboard")
    }

    if (!adminData) {
        return (
            <div className="flex justify-center items-center h-screen">
                <h2 className="text-2xl font-semibold text-gray-600">No Admin Data Found 😢</h2>
            </div>
        );
    }

    return (
        <>
            <section className="min-h-screen flex justify-center items-center bg-gray-100 w-full p-6">
                <div className="bg-white shadow-2xl rounded-3xl p-10 w-full max-w-lg transition-all hover:shadow-purple-300">
                    {/* Profile Header */}
                    <div className="flex flex-col items-center text-center">
                        <div className="relative w-32 h-32 mb-6">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                                alt="Admin Avatar"
                                className="w-full h-full object-cover rounded-full border-4 border-purple-600 shadow-md"
                            />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-800">{adminData.name}</h2>
                        <p className="text-purple-600 text-lg font-medium mt-1">Administrator</p>
                    </div>

                    {/* Profile Info */}
                    <div className="mt-8 space-y-4">
                        <div className="bg-purple-50 rounded-lg p-4 flex items-center justify-between">
                            <span className="text-gray-700 font-semibold">Email:</span>
                            <span className="text-gray-800">{adminData.email}</span>
                        </div>
                        <div className="bg-purple-50 rounded-lg p-4 flex items-center justify-between">
                            <span className="text-gray-700 font-semibold">Password:</span>
                            <span className="text-gray-800">{adminData.password}</span>
                        </div>
                    </div>

                    {/* Button Section */}
                    <div className="mt-8 flex justify-center">
                        <button
                            className="bg-purple-700 text-white px-6 py-2 rounded shadow-md hover:bg-purple-800 active:scale-95 transition-all duration-200 cursor-pointer"
                            onClick={() => toast.error("Oops Edit Coming Soon")}
                        >
                            Edit Profile
                        </button>
                        <button className="border border-gray-200 mx-2 px-6 py-2 rounded shadow-md hover:bg-gray-100 active:scale-95 transition-all duration-200 cursor-pointer" onClick={backbtn}>Back to Dashboard</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AdminProfile;
