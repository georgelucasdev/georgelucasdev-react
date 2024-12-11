import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Privacidade from './pages/privacidade';
import Reembolso from './pages/reembolso';
import Terms from './pages/termos';
import Enigmas from './pages/Enigmas';
import Sobre from './pages/sobre';
import Contato from './pages/contato';

const RoutesApp = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/politica-de-privacidade" element={<Privacidade />} />
            <Route path="/Enigmas" element={<Enigmas />} />
            <Route path="/Sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/politica-de-reembolso" element={<Reembolso />} />
            <Route path="/termos-e-condicoes" element={<Terms />} />
        </Routes>
    );
};

export default RoutesApp;
