const btnAccesoRapido = document.getElementById("btn-acceso-rapido");

// al tocar el boton, completa los inputs del login con el usuario de prueba
btnAccesoRapido.addEventListener("click", () => {
  document.getElementById("emailUser").value = "test@test.com";
  document.getElementById("passwordUser").value = "test";
});