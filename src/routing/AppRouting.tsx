import { Routes, Route } from "react-router-dom"

// import routes
// -----LOGIN----
import LayoutAuth from "@/pages/auth/LayoutAuth"
import LoginPage from "@/pages/auth/pages/login/LoginPage"
import ForgotPassword from "@/pages/auth/pages/forgot-password/ForgotPassword"
import ResetPassword from "@/pages/auth/pages/reset-password/ResetPassword"
import GroupsPage from "@/pages/protected/pages/groups/GroupsPage"
import LayoutProtected from "@/pages/protected/LayoutProtected"

export default function AppRouting() {
  return (
    <Routes>
        <Route element={<LayoutAuth />}>
            <Route path="/auth/login" element={<LoginPage />} />
            <Route path="/auth/forgot-password" element={<ForgotPassword />} />
            <Route path="/auth/reset-password" element={<ResetPassword />} />
        </Route>
        <Route element={<LayoutProtected />}>
          <Route path="/app/groups" element={<GroupsPage />} />
        </Route>
    </Routes>
  )
}
