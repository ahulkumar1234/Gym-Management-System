import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const Profile = () => {
    const navigate = useNavigate();
    const existLoggedUser = JSON.parse(localStorage.getItem("loggedUser"));
    const allUsers = JSON.parse(localStorage.getItem("NewGymUsers")) || [];

    const handleSignout = async () => {

        await fetch(`http://localhost:3000/users/${existLoggedUser.id}`, {
            method: "DELETE",
        });
        // Filter out the current user
        const updatedUsers = allUsers.filter(
            (user) => user.email !== existLoggedUser.email
        );

        // Update the users list in localStorage
        localStorage.setItem("NewGymUsers", JSON.stringify(updatedUsers));

        // Remove logged user session
        localStorage.removeItem("loggedUser");

        toast.success("Account removed successfully!");
        navigate("/register");
    };
    return (
        <>
            <div className="flex flex-col items-center mt-10">
                <h1 className="text-3xl font-bold text-purple-700 mb-4">Your Profile</h1>
                <div className="bg-gray-100 shadow-lg p-6 rounded-2xl w-[300px] text-center">
                    <p className="text-lg font-semibold mb-2">👤 Name: {existLoggedUser.name}</p>
                    <p className="text-lg font-semibold mb-2">📧 Email: {existLoggedUser.email}</p>
                    <p className="text-sm text-gray-500">🔒 Password (Hidden for security)</p>
                    <button onClick={handleSignout} className=' border py-1 px-2 rounded font-semibold hover:bg-gray-300  transition-all active:scale-90 cursor-pointer mt-2'>Remove Account</button>
                </div>
            </div>
        </>
    )
}

export default Profile