import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import { AuthProvider } from './contexts/AuthContext'
import { LanguageProvider } from './contexts/LanguageContext'
import ProtectedRoute from './components/shared/ProtectedRoute'
import LandingPage from './pages/LandingPage'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import ClientDashboard from './pages/client/ClientDashboard'
import AdminDashboard from './pages/admin/AdminDashboard'
import TeamDashboard from './pages/team/TeamDashboard'
import OwnerDashboard from './pages/owner/OwnerDashboard'

function App() {
  return (
    <Router>
      <LanguageProvider>
        <AuthProvider>
          <div className="App">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/client"
                element={
                  <ProtectedRoute allowedRoles={['client']}>
                    <ClientDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/admin"
                element={
                  <ProtectedRoute allowedRoles={['admin']}>
                    <AdminDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/team"
                element={
                  <ProtectedRoute allowedRoles={['admin', 'owner']}>
                    <TeamDashboard />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/owner"
                element={
                  <ProtectedRoute allowedRoles={['owner']}>
                    <OwnerDashboard />
                  </ProtectedRoute>
                }
              />
            </Routes>
            <Toaster position="top-right" />
          </div>
        </AuthProvider>
      </LanguageProvider>
    </Router>
  )
}

export default App 