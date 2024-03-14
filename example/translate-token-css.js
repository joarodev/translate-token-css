const fs = require("fs/promises");

function kebabCase(str) {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();
}

function processTokens(obj) {
  let css = ":root {\n";

  for (const category in obj) {
    const properties = obj[category];

    for (const property in properties) {
      const cssVarName = `--${kebabCase(category)}-${kebabCase(property)}`;

      const cssValue = properties[property];
      css += `${cssVarName}: ${cssValue};\n`;
    }
  }
  css += "}";
  return css;
}

async function main() {
  try {
    const data = await fs.readFile("./desing-tokens.json", "utf-8");

    if (!data) return console.error("File .json no exits");

    const json = JSON.parse(data);

    const css = processTokens(json);
    await fs.writeFile("./tokens.css", css, "utf-8");

    //if (!jsonFile) return console.error("Error has create file");

    console.log("CSS file generate");
  } catch (error) {
    console.error(error);
  }
}

main();
