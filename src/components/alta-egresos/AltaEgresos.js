import * as React from 'react';
import ReactDOM from "react-dom";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';

import axios from 'axios';
import routes from "../../routes/routes";

const AltaEgresos = ()  => { 
  const [gastoEgresos, setGastoEgresos] = useState([])

  useEffect(() => {
    const fecthData = async () => {
      const result = await fetch(routes.URL + routes.EGRESOS_LIST)
      const jsonResult = await result.json()

      setGastoEgresos(jsonResult)
    }
    fecthData()
  }, [gastoEgresos])


    const [nombre, setNombre]= useState ()
    const handleNombre = (text) => {
      setNombre (text.target.value)
    }
    const [frecuencia, setFrecuencia]= useState ()
    const handleFrecuencia = (text) => {
      setFrecuencia (text.target.value)
    }

    const [monto, setMonto] = useState ()
    const handleMonto = (text) => {
        setMonto (text.target.value)
    }

    const [fecha, setFecha]= useState ()
    const handleFecha = (text) => {
      setFecha (text.target.value)
    }

    const [aumento, setAumento]= useState ()
    const handleAumento = (text) => {
      setAumento (text.target.value)
    }

    const [estado, setEstado]= useState ()
    const handleEstado = (text) => {
      setEstado (text.target.value)
    }

    const handleGuardar = () => {

  //POST
     axios({
      method:'post',
      url: routes.URL + routes.EGRESOS_CREATE,
      data:{
      nombre: nombre,
      frecuencia: frecuencia,
      monto: monto,
      fecha: fecha,
      aumento: aumento,
      estado : estado
      },  
    })
      .then (function (response){
        console.log(response);
      })
      .catch (function (error){
      console.log (error);
      });
  }

    return(
      
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead><TableRow>
          <TableCell><TextField
              id="nombre"
              type="text"
              label="Nombre"
              variante="outlined"
              onChange={handleNombre}
            /></TableCell>
          <TableCell><TextField
              id="frecuencia"
              type="text"
              label="Frecuencia"
              variante="outlined"
              onChange={handleFrecuencia}
          /></TableCell>
          <TableCell><TextField
              id="monto"
              type="text"
              label="Monto"
              variante="outlined"
              onChange={handleMonto}
            /></TableCell>
          <TableCell><TextField
              id="fecha"
              type="text"
              label="Fecha"
              variante="outlined"
              onChange={handleFecha}
          /></TableCell>
          <TableCell><TextField
              id="aumento"
              type="text"
              label="aumento"
              variante="outlined"
              onChange={handleAumento}/></TableCell>
            <TableCell><TextField
              id="estado"
              type="text"
              label="Estado"
              variante="outlined"
              onChange={handleEstado}
          /></TableCell>
          <TableCell>
            <Button variant="contained" className='botonAgregar' onClick={handleGuardar}>
              Agregar egreso
            </Button>
            </TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
              <TableCell align="right"> Nombre </TableCell>
              <TableCell align="right"> Frecuencia </TableCell>
              <TableCell align="right"> Monto </TableCell>
              <TableCell align="right"> Fecha </TableCell>
              <TableCell align="right"> Aumento </TableCell>
              <TableCell align="right"> Estado </TableCell>
              <TableCell align="right"> Editar </TableCell>
            </TableRow>
          {gastoEgresos.map((gasto, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="right">{gasto.nombre}</TableCell>
                <TableCell align="right">{gasto.frecuencia}</TableCell>
                <TableCell align="right">{gasto.monto}</TableCell>
                <TableCell align="right">{gasto.fecha}</TableCell>
                <TableCell align="right">{gasto.aumento}</TableCell>
                <TableCell align="right">{gasto.estado}</TableCell>
                <TableCell align="right"><Button variant="contained">Editar</Button></TableCell></TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
}
export default AltaEgresos;