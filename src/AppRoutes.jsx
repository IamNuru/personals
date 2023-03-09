import { Routes, Route } from "react-router-dom"


import AddNewPersonal from "./pages/AddNewPersonal"
import MainLayout from "./pages/layouts/MainLayout"
import Personals from "./pages/Personals"
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ProtectedRoute from "./components/routes/ProtectedRoute"
import VerifyOtp from "./pages/VerifyOtp"
import Page404 from "./pages/erro-pages/Page404"
import Home from "./pages/Home"

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/personals" element={<Personals />} />
          <Route path="/add-new-personal" element={<AddNewPersonal />} />
        </Route>
        <Route path="/verify" element={<VerifyOtp />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  )
}

export default AppRoutes