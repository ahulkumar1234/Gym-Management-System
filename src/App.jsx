import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './components/Login'
import SignUp from './components/SignUp'
import AdminProvider from './components/Admin'
import { Toaster } from 'react-hot-toast';
import Dashboard from './components/Dashboard/Dashboard'
import Profile from './pages/Profile'
import AdminProfile from './components/Dashboard/AdminProfile'
import Registration from './components/Dashboard/Registration'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'



function App() {

  // const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return (
    <>
      <AdminProvider>
        <Router>
          <Navbar />
          <Routes>
            {/* 🔓 Public Routes */}
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<SignUp />} />
            {/* 🧍 User Routes */}
            <Route path='/' element={<ProtectedRoute allowedFor="user"> <Home /> </ProtectedRoute>} />
            <Route path='/about' element={<ProtectedRoute allowedFor="user"> <About /> </ProtectedRoute>} />
            <Route path='/contact' element={<ProtectedRoute allowedFor="user"> <Contact /> </ProtectedRoute>} />
            <Route path='/profile' element={<ProtectedRoute allowedFor="user"> <Profile /> </ProtectedRoute>} />

            {/* 🧑‍💻 Admin Routes */}
            
            <Route path='/dashboard' element={<ProtectedRoute allowedFor="admin"> <Dashboard /> </ProtectedRoute>} />
            <Route path='/admin/profile' element={<ProtectedRoute allowedFor="admin">  <AdminProfile /> </ProtectedRoute>} />
            <Route path='/admin/registration' element={<ProtectedRoute allowedFor="admin">  <Registration /> </ProtectedRoute>} />

          </Routes>
        </Router>
      </AdminProvider>
      <Toaster />
    </>
  )
}

export default App
