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
  
    const gastosEgres =[
      crearGasto(1,"Gas","Bimestral","12-06","1347","10","Pagado"),
      crearGasto(2,"Luz","Bimestral","13-06","2000","10","Pagado"),
      crearGasto(3,"Alquiler","Bimestral","18-06","20000","10","Pagado"),
      crearGasto(4,"Tarjeta","Bimestral","17-06","35000","10","Pagado"),
      crearGasto(5,"Cochera","Bimestral","16-06","5000","10","Pagado"),
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
          {gastosEgres.map((gasto) => (
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
