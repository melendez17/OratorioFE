import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/pages/landing/landing';
import AboutUs from './components/pages/landing/nosotros';
import Login from './components/auth/login';
import Dashboard from './components/pages/app/dashboard';
import Calendar from './components/pages/app/calendar';
import Jornadas from './components/pages/app/jornadas';
import Inventario from './components/pages/app/inventario';
import Actividades from './components/pages/app/actividades';
import Participantes from './components/pages/app/participantes';
import JornadaDetalle from './components/pages/app/jornadaDetalle';
// import Navbar from './components/navigation/navbar';
import './index.css';

function App() {
  return (
    <ChakraProvider>
    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* <Route path="/home" element={<HomePage />} /> */}
        <Route path="/Nosotros" element={<AboutUs />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Calendario" element={<Calendar />} />
        <Route path="/Jornadas" element={<Jornadas />} />
        <Route path="/Jornadas/:id" element={<JornadaDetalle />} />
        <Route path="/Inventario" element={<Inventario />} />
        <Route path="/Actividades" element={<Actividades />} />
        <Route path="/Participantes" element={<Participantes />} />
      </Routes>
    </Router>
    </ChakraProvider>
  );
}

export default App;
