import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function crearGasto( id, nombre, frecuencia, vencimiento, cobro,aumento,estado ) {
    return {id, nombre, frecuencia, vencimiento, cobro, aumento, estado};
  }

  export default function Inicio() {  
  
    const gastos =[
      crearGasto(1,"Sueldo","Mensual","10-06","5000","5%","Cobrado"),
      crearGasto(2,"Cuota Alquiler","Mensual","10-06","23000","2%","Cobrado"),
      crearGasto(3,"Pintura","Quincena","12-06","3000","4%","Cobrado"),
      crearGasto(4,"Paseo de perros","Por hora","15-06","600","1%","Cobrado"),
    ];

    return (
      <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell align="right"> Nombre </TableCell>
              <TableCell align="right"> Frecuencia </TableCell>
              <TableCell align="right"> Fecha </TableCell>
              <TableCell align="right"> Monto </TableCell>
              <TableCell align="right"> Aumento </TableCell>
              <TableCell align="right"> Estado </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {gastos.map((gasto) => (
              <TableRow
                key={gasto.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row"> {gasto.id} </TableCell>
                <TableCell align="right">{gasto.nombre}</TableCell>
                <TableCell align="right">{gasto.frecuencia}</TableCell>
                <TableCell align="right">{gasto.vencimiento}</TableCell>
                <TableCell align="right">{gasto.cobro}</TableCell>
                <TableCell align="right">{gasto.aumento}</TableCell>
                <TableCell align="right">{gasto.estado}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
);
}
