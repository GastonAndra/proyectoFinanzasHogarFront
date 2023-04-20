import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from '../components/home/Home';
import Ingresos from '../components/alta-ingresos/AltaIngresos';
import AltaEgresos from '../components/alta-egresos/AltaEgresos';
import Chart from '../components/estimaciones/Estimaciones';
import Error404 from '../components/error404/index';
import SignIn from '../components/loging/index';
import Router2 from './index';
import NavbarButton from '../NavbarButton';



const Router = () => (
  <> <React.StrictMode>
    <NavbarButton />
  </React.StrictMode> 
  <BrowserRouter>
      
{/*         <Routes>
         <Route index element={<SignIn/>} />
        <Route path="/home" element={<Router2/>} />

        </Routes> */}
       <Routes>

        <Route index element={<Home />} />
        <Route path="/LogIn/" element={<SignIn />} />
        <Route path="/Ingresos/" element={<Ingresos />} />
        <Route path="/Egresos/" element={<AltaEgresos />} />
        <Route path="/Estimaciones/" element={<Chart />} />
        <Route path="*" element={<Error404 />} />

      </Routes>

    </BrowserRouter></>

);



export default Router;