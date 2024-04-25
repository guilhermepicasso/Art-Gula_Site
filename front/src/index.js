import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from './Pages/Home/index.js';
import PainelControle from './Pages/PainelControle/index.js';
import Painel_Controle_cardapios  from './Pages/PainelControle_cardapios/index.js'
import Cardapio from './Pages/Cardapio/index.js';
import Painel from './Pages/PainelControle/painel.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/painel_controle' element={<PainelControle/>}/>
        <Route path='/painel' element={<Painel/>}/>
        <Route path='/painel_controle2/cardapios' element={<Painel_Controle_cardapios/>}/>
        <Route path='/cardapio' element={<Cardapio/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
