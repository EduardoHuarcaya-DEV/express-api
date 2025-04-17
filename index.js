const express = require("express");
const morgan = require("morgan");
require('dotenv').config();

const app = express();

const HomeRoute = require("./routes/Home");

//Config
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(morgan("dev"));
app.use(express.json());

app.use(HomeRoute);

app.get("/", (req, res) => {
  res.send("Bienvenido a mi API REST");
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
