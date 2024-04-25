import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from './Pages/Home/index.js';
import PainelControle from './Pages/PainelControle/painel.js';
import Cardapio from './Pages/Cardapio/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/painel_controle' element={<PainelControle/>}/>
        <Route path='/cardapio' element={<Cardapio/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
