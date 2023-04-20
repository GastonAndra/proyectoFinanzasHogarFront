import * as React from 'react';
import Typography from '@mui/material/Typography';
import fotoHome from './fotoHome.png';

  export default function Inicio() {  
    let fechaActual = new Date();
    return (
      <>
      <React.Fragment>
      <Typography component="p" variant="h4">
        Saldo Cuenta: $3,000.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {`Fecha: ${fechaActual.getDate()}/${fechaActual.getMonth()+1} /${fechaActual.getFullYear()}  Hora: ${fechaActual.getHours()}:${fechaActual.getMinutes()}`}
      </Typography>
    </React.Fragment>
    <img alt='foto-finanzas' title='foto-home' src={fotoHome} />

    </>
);
}
