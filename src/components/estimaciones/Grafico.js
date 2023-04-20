import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer } from 'recharts';//npm i recharts
import Title from '../Title/Title';
import Typography from '@mui/material/Typography';



// Generate Sales Data
 function createData(time, amount) {
  return { time, amount };
}

const data = [
  createData('Agosto', 1000),
  createData('Septiembre', 1300),
  createData('Octubre', 1600),
  createData('Noviembre', 2800),
  createData('Diciembre', 1500),
  createData('Enero', 2000),
  createData('Marzo', 1400),
  createData('Abril', 2400),
  createData('Mayo', 1000),
  createData('Junio', 2400),
  createData('Julio', 2000),
  createData('Agosto', 4000),
];

export default function Chart() {
  const theme = useTheme();

  let fechaActual = new Date();

  return (
    <React.Fragment>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        {`Fecha: ${fechaActual.getDate()}/${fechaActual.getMonth()+1} /${fechaActual.getFullYear()}  Hora: ${fechaActual.getHours()}:${fechaActual.getMinutes()}`}
      </Typography>
       <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              Capacidad de ahorro ($)
            </Label>
          </YAxis>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}