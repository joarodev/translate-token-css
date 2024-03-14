const express = require("express");
const { engine } = require("express-handlebars");
const bodyParser = require("body-parser");
const routerIndex = require("./router/router");
const path = require("path");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// Ejecución de handlebars como motor de plantillas

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./views");

// Middleware para procesar datos del formulario
app.use(bodyParser.urlencoded({ extended: false }));

// Manejo de rutas
app.use("/", routerIndex);

// Iniciar el servidor si se ejecuta directamente
if (require.main === module) {
  // Escucha del servidor en el puerto 3000 o el puerto definido en la variable de entorno PORT.
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
  });
}

module.exports = app;