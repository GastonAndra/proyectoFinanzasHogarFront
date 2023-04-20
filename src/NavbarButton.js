import * as React from 'react';
import './Navbar.css';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ImgTitle from './imgTitle.png';

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (

    <div className='nabvar-box'>
      <h1 className='nabvar-text'> {<img src={ImgTitle} />} Sistema de Gestión de Gastos</h1>


    <Box>
      <BottomNavigation 
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }} 
      >

        <BottomNavigationAction href='/' label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction href='/Ingresos/' label="Ingresos" icon={<MonetizationOnIcon />} />
        <BottomNavigationAction href='/Egresos/' label="Egresos" icon={<PriceCheckIcon />} />
        <BottomNavigationAction href='/Estimaciones/' label="Estimaciones" icon={<InsertChartIcon />} />
        <BottomNavigationAction href='/Login/' label="Login"  icon={<LockOpenIcon />} />
        
      </BottomNavigation>
    </Box>
    </div>
  );
}