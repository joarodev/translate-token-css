const { Router } = require("express");
const { processTokens } = require("../utils/processToken");
const uploadFile = require("../middlewares/multer.middleware");

const routerIndex = Router();

routerIndex
  // Ruta para mostrar el formulario
  .get("/", (req, res) => {
    res.render("form");
  });

// Ruta para procesar el formulario
routerIndex.post("/convert", uploadFile, async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send("No se proporcionó un archivo JSON");
    }

    const jsonData = req.file.buffer.toString("utf8");
    const cssData = processTokens(JSON.parse(jsonData));

     // Establecer los encabezados Content-Type y Content-Disposition
     res.setHeader("Content-Type", "text/css");
     res.setHeader("Content-Disposition", "attachment; filename=\"converted_styles.css\"");
 
     // Enviar el contenido del archivo CSS como respuesta
     res.send(cssData);
  } catch (error) {
    console.error("Error al procesar el archivo:", error);
    res.status(500).send("Error interno del servidor");
  }
});

module.exports = routerIndex;
