import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {BrowserRouter,Routes,Route} from "react-router-dom";

import Home from './Pages/Home/index.js';
import Painel_Controle from './Pages/Painel_Controle/index.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/painel_controle' element={<Painel_Controle/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
