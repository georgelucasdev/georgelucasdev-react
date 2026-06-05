import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Privacidade from './pages/privacidade';
import Reembolso from './pages/reembolso';
import Terms from './pages/termos';
import Promocao from './pages/promocao';

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/promocao" element={<Promocao />} />
      <Route path="/politica-de-privacidade" element={<Privacidade />} />
      <Route path="/politica-de-reembolso" element={<Reembolso />} />
      <Route path="/termos-e-condicoes" element={<Terms />} />
    </Routes>
  );
};

export default RoutesApp;
