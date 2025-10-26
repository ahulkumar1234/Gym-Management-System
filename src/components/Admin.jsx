import { createContext, useEffect, useState } from "react";

export const AdminContext = createContext();

const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(null);

    useEffect(() => {
        // Step 1: Try getting admin from localStorage
        const localAdmin = JSON.parse(localStorage.getItem("Admin"));

        if (localAdmin) {
            setAdmin(localAdmin);
        } else {
            // Step 2: If not found in localStorage, fetch from JSON server
            fetch("http://localhost:3000/Admin")
                .then((res) => res.json())
                .then((data) => {
                    if (data.length > 0) {
                        setAdmin(data[0]); // first admin from array
                        localStorage.setItem("Admin", JSON.stringify(data[0]));
                    }
                })
                .catch((err) => console.log("Error fetching Admin data:", err));
        }
    }, []);

    return (
        <AdminContext.Provider value={admin}>
            {children}
        </AdminContext.Provider>
    );
};

export default AdminProvider;
