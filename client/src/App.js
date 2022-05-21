import React from "react";
import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Inicial } from './components/Inicial.jsx';
import { Principal } from './components/Principal.jsx';
import { NotFound } from './components/NotFound/NotFound.jsx';
import DetallePais from "./components/DetallePais";
import ActividadT from "./components/ActividadT";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Inicial /> } />
        <Route exact path="/ruta-principal" element={ <Principal /> } />
        <Route path="/ruta-principal/:id" element={ <DetallePais /> } />
        <Route path="/ruta-actividad" element={ <ActividadT /> } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
