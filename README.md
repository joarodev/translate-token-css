
# Conversor de desing token JSON a CSS
Mi proyecto viene a solucionar el problema que sufren la mayoría de los desarrolladores/programadores frontend, basicamente en la mayor parte de la web podemos encontrar archivos de diseño ".json" que contienen tokens en forma de arrays u objetos, el problema está en pasar todos estos archivos a como variables CSS, hacer esta conversión manualmente suele ser algo agotador.

Este proyecto viene a simplificar este problema, le proporcionamos el archivo JSON y gracias a la logica planteada te devolverá como respuesta un archivo CSS que contendrá todas tus variables en cuestion de milisegundos.

## Instalación

Una vez descargamos el proyecto instalamos las dependencias

```bash
  npm install
```
Posteriormente procedemos a ejecutar el archivo server.js

```bash
  cd ./src
```
```bash
  node server.js
```

#### Deberías visualizar la siguiente salida por consola:
```bash
  Servidor corriendo en el puerto: *Puerto*
```
## Variables de entorno

En el caso de que no configures una puerto el proyecto utilizará como predeterminado el numero _3000_, en el caso que quieras cambiarlo simplemente crea un archivo _.env_ y coloca:

`PORT` = "Numero de puerto"

Puedes guiarte del archivo .env.example


## Stack de tecnologías utilizadas

**Node.js:** Entorno de desarrollo de JavaScript 

**Express.js:** Framework de node para desarrollar servidores

**Handlebars** Motor de plantillas para enviar al cliente desde el servidor.
## Ejemplo de uso

Importamos nuestro archivo desing token pulsando el botón _"Archivo .json"_

#### Ejemplo: desing-token.json:

```yaml
{
    {
    "colors": {
      "primary": "#007bff",
      "secondary": "#6c757d",
      "success": "#28a745",
      "error": "#dc3545",
      "warning": "#ffc107",
      "info": "#17a2b8"
    },
    "shadows": {
      "small": "0px 1px 2px rgba(0, 0, 0, 0.1)",
      "medium": "0px 3px 6px rgba(0, 0, 0, 0.1)",
      "large": "0px 5px 10px rgba(0, 0, 0, 0.1)"
    },
    "fonts": {
      "heading": "Roboto, sans-serif",
      "body": "Open Sans, sans-serif"
    },
    "spacing": {
      "small": "8px",
      "medium": "16px",
      "large": "24px"
    },
    "margins": {
      "small": "8px",
      "medium": "16px",
      "large": "24px"
    },
    "paddings": {
      "small": "8px",
      "medium": "16px",
      "large": "24px"
    }
  }
}
```

Pulsamos el botón _"Convertir"_  y automaticamente se descargará nuestro archivo CSS. 

#### Para este ejemplo el archivo debería tener la siguiente estructura:

```css
:root {
--colors-primary: #007bff;
--colors-secondary: #6c757d;
--colors-success: #28a745;
--colors-error: #dc3545;
--colors-warning: #ffc107;
--colors-info: #17a2b8;
--shadows-small: 0px 1px 2px rgba(0, 0, 0, 0.1);
--shadows-medium: 0px 3px 6px rgba(0, 0, 0, 0.1);
--shadows-large: 0px 5px 10px rgba(0, 0, 0, 0.1);
--fonts-heading: Roboto, sans-serif;
--fonts-body: Open Sans, sans-serif;
--spacing-small: 8px;
--spacing-medium: 16px;
--spacing-large: 24px;
--margins-small: 8px;
--margins-medium: 16px;
--margins-large: 24px;
--paddings-small: 8px;
--paddings-medium: 16px;
--paddings-large: 24px;
}
```

Todas las variables generadas automaticamente para que el usuario ahorre tiempo y energía y pueda utilizarlo en otra etapa del desarrollo.

## Video de uso

Link


## Desarrollado por Joaquín Rodríguez

- [GitHub](https://www.github.com/joarodev)
- [LinkedIn](https://www.github.com/joarodev)
- [Youtube](https://www.github.com/joarodev)


