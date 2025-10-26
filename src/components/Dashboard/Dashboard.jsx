import { Link } from "react-router-dom";
import { MdOutlineSpaceDashboard, MdOutlinePayment, MdInventory } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { FaPenToSquare, FaBookOpen } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { CgGym } from "react-icons/cg";
import { TbReportSearch } from "react-icons/tb";

const Dashboard = () => {
  const menuItems = [
    { icon: <MdOutlineSpaceDashboard />, label: "Dashboard", path: "/dashboard" },
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
    <>
      <section className="flex h-screen bg-gray-100">
        {/* ✅ Sidebar */}
        <aside className="w-[260px] bg-purple-800 text-white flex flex-col justify-between shadow-xl">
          <div>
            {/* Logo Section */}
            <div className="text-center py-6 border-b border-purple-700">
              <h2 className="text-2xl font-bold tracking-wide uppercase">Admin Panel</h2>
              <p className="text-sm text-purple-300 mt-1">Sky Fitness</p>
            </div>

            {/* Navigation Links */}
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

          {/* Footer */}
          <div className="py-4 text-center border-t border-purple-700 text-purple-300 text-sm">
            <p>© 2025 Sky Fitness</p>
          </div>
        </aside>

        {/* ✅ Main Content Area */}
        <main className="flex-1 p-8 overflow-y-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, Admin 👋</h1>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md p-6 rounded-2xl hover:shadow-lg transition-all">
              <h3 className="text-gray-600 font-medium">Total Members</h3>
              <p className="text-3xl font-bold text-purple-700 mt-2">120</p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-2xl hover:shadow-lg transition-all">
              <h3 className="text-gray-600 font-medium">Active Coaches</h3>
              <p className="text-3xl font-bold text-purple-700 mt-2">8</p>
            </div>

            <div className="bg-white shadow-md p-6 rounded-2xl hover:shadow-lg transition-all">
              <h3 className="text-gray-600 font-medium">Monthly Revenue</h3>
              <p className="text-3xl font-bold text-purple-700 mt-2">₹75,000</p>
            </div>
          </div>

          {/* Recent Activity Table */}
          <div className="mt-10 bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-4 border-b bg-purple-700 text-white font-semibold">
              Recent Registrations
            </div>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-gray-100 text-gray-600 text-sm uppercase">
                  <th className="p-3">Name</th>
                  <th className="p-3">Email</th>
                  <th className="p-3">Plan</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-50">
                  <td className="p-3">Rahul Kumar</td>
                  <td className="p-3">rahul@gmail.com</td>
                  <td className="p-3">Premium</td>
                  <td className="p-3 text-green-600 font-semibold">Active</td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="p-3">Aman Singh</td>
                  <td className="p-3">aman@gmail.com</td>
                  <td className="p-3">Basic</td>
                  <td className="p-3 text-yellow-500 font-semibold">Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </section>
    </>
  );
};

export default Dashboard;
