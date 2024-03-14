// Esta función convierte un string a formato kebab-case.
// Por ejemplo, "Hello World" se convertirá a "hello-world".
function kebabCase(str) {
    return str
      .replace(/([a-z])([A-Z])/g, '$1-$2')
      .replace(/[\s_]+/g, '-')
      .toLowerCase();
  }

module.exports = {kebabCase};