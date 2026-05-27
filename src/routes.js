import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Privacidade from './pages/privacidade';
import Reembolso from './pages/reembolso';
import Terms from './pages/termos';
import Amazon from './pages/amazon';

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/politica-de-privacidade" element={<Privacidade />} />
      <Route path="/politica-de-reembolso" element={<Reembolso />} />
      <Route path="/termos-e-condicoes" element={<Terms />} />
      <Route path="/amazon" element={<Amazon />} />
    </Routes>
  );
};

export default RoutesApp;
