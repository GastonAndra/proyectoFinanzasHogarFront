import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from 'react';
import axios from 'axios';
import Router2 from '../../application/index';
/* import routes from "../../routes/routes"; */

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center"    {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#" style={{ textDecoration: 'none' }}>
        Finanzas del Hogar 
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const [body,setBody] = useState ({usuario:'', password: ''})

  const inputChange = ({target}) =>{
    const {name, value} = target
    setBody ({
      ...body,
      [name]: value
    })
  }

  const onSubmit = () =>{
    axios.post('http://127.0.0.1:3001/usuarios/login', body)
    .then(({data})=>{
      console.log(data)
    })
    .catch(({response})=>{
      console.log(response.data)
    })
  }


 /*  const [usuario, setUsuario]= useState ()
  const handleUsuario = (text) => {
    setUsuario (text.target.value)
  }

  const [password, setPassword]= useState ()
  const handlePassword = (text) => {
    setPassword (text.target.value)
  } */

   const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      usuario: data.get('usuario'),
      password: data.get('password'),
    });
  };

//Dejamos esto comentado para verlo durante la presentacion

/*   const handleIngresar = () => {

  axios({
    method:'get',
    url: routes.URL + routes.USUARIOS_LOGIN,
  })
  .then (function (response) {
    console.log(response);
    console.log(response.data);
  })
  .catch (function (error){
    console.log(error);
  })

}*/

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="usuario"
              label="Usuario"
              name="usuario"
              autoComplete="email"
              autoFocus
              onChange={inputChange}
              value= {body.usuario}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={inputChange}
              value={body.password}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordarme"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={onSubmit}>
              ACEPTAR
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  ¿Olvidaste la contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"¿No tenés cuenta? Registrate acá"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );


  
}