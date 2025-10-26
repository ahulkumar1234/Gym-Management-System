// src/components/Dashboard/AdminLayout.jsx
import { Outlet, Link } from "react-router-dom";
import { MdOutlineSpaceDashboard, MdOutlinePayment, MdInventory } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaPenToSquare, FaBookOpen } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { CgGym } from "react-icons/cg";
import { TbReportSearch } from "react-icons/tb";

const AdminLayout = () => {
  const menuItems = [
    { icon: <MdOutlineSpaceDashboard />, label: "Dashboard", path: "/admin/dashboard" },
    { icon: <IoHome />, label: "Admin Profile", path: "/admin/profile" },
    { icon: <FaPenToSquare />, label: "Registration", path: "/admin/registration" },
    { icon: <FaBookOpen />, label: "Plans", path: "/admin/plans" },
    { icon: <MdOutlinePayment />, label: "Payments", path: "/admin/payments" },
    { icon: <MdInventory />, label: "Inventory", path: "/admin/inventory" },
    { icon: <FiUsers />, label: "View Members", path: "/admin/members" },
    { icon: <CgGym />, label: "Coaches", path: "/admin/coaches" },
    { icon: <TbReportSearch />, label: "Reports", path: "/admin/reports" },
  ];

  return (
    <section className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-[260px] bg-purple-800 text-white flex flex-col justify-between shadow-xl">
        <div>
          <div className="text-center py-6 border-b border-purple-700">
            <h2 className="text-2xl font-bold tracking-wide uppercase">Admin Panel</h2>
            <p className="text-sm text-purple-300 mt-1">Sky Fitness</p>
          </div>

          <nav className="mt-6 flex flex-col gap-1">
            {menuItems.map((item, i) => (
              <Link
                to={item.path}
                key={i}
                className="flex items-center gap-3 py-3 px-5 hover:bg-purple-700 transition-all duration-300 text-sm font-medium cursor-pointer"
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="py-4 text-center border-t border-purple-700 text-purple-300 text-sm">
          <p>© 2025 Sky Fitness</p>
        </div>
      </aside>

      {/* Page Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <Outlet /> {/* <-- Har admin page ka content yahan load hoga */}
      </main>
    </section>
  );
};

export default AdminLayout;
