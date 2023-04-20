import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../components/home/Home';
import Ingresos from '../components/alta-ingresos/AltaIngresos';
import AltaEgresos from '../components/alta-egresos/AltaEgresos';
import Chart from '../components/estimaciones/Estimaciones';
import Error404 from '../components/error404/index';


const Router2 = () => (

  <BrowserRouter>

      <Routes>  

          <Route index element={<Home/>} />
          <Route path="/Ingresos/" element={<Ingresos/>} />
          <Route path="/Egresos/" element={<AltaEgresos/>} />
          <Route path="/Estimaciones/" element={<Chart/>} />
          <Route path="*" element={<Error404/> } />

      </Routes>

  </BrowserRouter>

);

export default Router2;