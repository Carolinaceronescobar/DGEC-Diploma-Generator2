// App.tsx
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { setupAxiosInterceptors } from '../src/pages/login/axiosConfig'; 
import { AuthProvider } from '../src/pages/login/AuthContext';
import SideBar from "./Components/SideBar";
import Login from "./pages/login/LoginScreen";
import AuthCallback from "./pages/login/AuthCallback";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (token: any) => {
    setIsAuthenticated(true);
    // Store token securely (e.g., in-memory)
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  useEffect(() => {
    setupAxiosInterceptors(handleLogout);
  }, []);

  return (
    <AuthProvider login={handleLogin} logout={handleLogout}>
      {isAuthenticated && <SideBar />}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
        </Routes>
    </AuthProvider>
  );
}

export default App;


