const express = require('express');
const morgan =require("morgan");
const dotenv = require("dotenv");
const db = require('./config/db');


// configurando dotenv
dotenv.config();

const app = express();
// middlewares
app.use(express.json());
app.use(morgan("dev"));




// rutas
app.use('/students', require('./routes/studentRoutes'));
app.get('/', (req, res) => {
  res.send('<h1>hola mi serverNava Node Mysql APP</h1>');
});


const PORT = process.env.PORT || 8000;

// Conexión a la base de datos
db.query('SELECT 1').then(() => {
  console.log('Conexión a la base de datos exitosa');

  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}).catch((err) => {
  console.error('Error al conectar a la base de datos:', err);
});
