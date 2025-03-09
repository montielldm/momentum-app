import { Routes, Route } from "react-router-dom"

// import routes
// -----LOGIN----
import LayoutAuth from "@/pages/auth/LayoutAuth"
import LoginPage from "@/pages/auth/pages/login/LoginPage"
import ForgotPassword from "@/pages/auth/pages/forgot-password/ForgotPassword"
import ResetPassword from "@/pages/auth/pages/reset-password/ResetPassword"
import GroupsPage from "@/pages/protected/pages/groups/GroupsPage"
import LayoutProtected from "@/pages/protected/LayoutProtected"
import SettingsPage from "@/pages/protected/pages/settings/SettingsPage"

// -----Group Detail-----
import LayoutDetails from "@/pages/protected/pages/groups/pages/details/LayoutDetails"
import FeedPage from "@/pages/protected/pages/groups/pages/details/pages/feed/FeedPage"
import AssistencePage from "@/pages/protected/pages/groups/pages/details/pages/assistence/AssistencePage"
import SettingsDetailsPage from "@/pages/protected/pages/groups/pages/details/pages/settings/SettingsPage"
import ApprentincesGroupPage from "@/pages/protected/pages/groups/pages/details/pages/apprentinces/ApprentincesGroupPage"


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
          <Route element={<LayoutDetails />}>
            <Route path="/app/groups/:id/feed" element={<FeedPage />} />
            <Route path="/app/groups/:id/assistence" element={<AssistencePage />} />
            <Route path="/app/groups/:id/apprentices" element={<ApprentincesGroupPage />} />
            <Route path="/app/groups/:id/settings" element={<SettingsDetailsPage />} />
          </Route>

          <Route path="/app/settings" element={<SettingsPage />} />
        </Route>
    </Routes>
  )
}
