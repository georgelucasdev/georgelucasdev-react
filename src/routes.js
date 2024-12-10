import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Privacidade from './pages/Privacidade';
import Reembolso from './pages/Reembolso';
import Terms from './pages/Termos';
import Enigmas from './pages/Enigmas';

const RoutesApp = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/politica-de-privacidade" element={<Privacidade />} />
            <Route path="/Enigmas" element={<Enigmas />} />
            <Route path="/politica-de-reembolso" element={<Reembolso />} />
            <Route path="/termos-e-condicoes" element={<Terms />} />
        </Routes>
    );
};

export default RoutesApp;
