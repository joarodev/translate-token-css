document.getElementById("file").addEventListener("change", function () {
  // Verifica si se ha cargado un archivo
  if (this.files && this.files[0]) {
    // Muestra el indicador de carga
    document.getElementById("fileLoadedIndicator").style.display = "block";
  } else {
    // Oculta el indicador de carga si no hay archivo cargado
    document.getElementById("fileLoadedIndicator").style.display = "none";
  }
});
