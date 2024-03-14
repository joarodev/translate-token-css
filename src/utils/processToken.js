const { kebabCase } = require("./kebabCase");

//Esta función recibe un objeto json con propiedades y lo traduce a formato css
function processTokens(obj) {
    let css = ':root {\n';
  
    for (const category in obj) {
      const properties = obj[category];
  
      for (const property in properties) {
        const cssVarName = `--${kebabCase(category)}-${kebabCase(property)}`;
  
        const cssValue = properties[property];
        css += `${cssVarName}: ${cssValue};\n`;
      }
    }
  
    css += '}';
    return css;
  }

module.exports = { processTokens };