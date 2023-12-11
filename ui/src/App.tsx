// App.tsx
import React, { useEffect, useState } from 'react';
import TopBar from './components/TopBar';
import HorizontalLinearStepper from './components/HorizontalLinearStepper';
import Footer from './components/Footer';

// import AppRoutes from './Routes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../login/AuthContext.tsx';
import LoginScreen from './pages/login/LoginScreen.tsx';
import { PrivateRoute } from './auth/PrivateRoute';
import Dashboard from './Components/SideBar';
import UsoInternoFinanzas from './pages/usointfinanzas/UsointernoFinanzasForm';
import UsoInternoDGEC from './pages/usointdgec/UsointernoDGEC';
import UsointernoDireccionEstudios from './pages/usointdireccionestudios/UsointernoDireccionEstudios';
import Formulario from '../Components/Form.tsx';

function App() {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);
  
  const handleLogin = (token:any) => {
    setIsAuthenticated(true);
    //Store token securely (e.g., in-memory)
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
          <Route path="/" element={<LoginScreen />} />
          <Route path="/home" element={<Dashboard/>} />
          <Route path="/formulario" element={<Formulario/>} />

          <Route path="/finanzas" element={<UsoInternoFinanzas />} />
          <Route path="/Dgec" element={<UsoInternoDGEC />} />
          <Route path="/DireccionEstudios" element={<UsointernoDireccionEstudios/>} /> 
       </Routes>
       </AuthProvider>   
      
    );
  };

export default App;


