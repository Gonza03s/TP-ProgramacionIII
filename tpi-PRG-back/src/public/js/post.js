const formularioCrearProducto = document.getElementById("form-post");
const productContainer = document.getElementById("contenedor-producto");
const urlBase = "http://localhost:25565";

function validarFormulario(data) {
  const errores = [];

  if (!data.name || data.name.trim().length < 2) {
    errores.push("El nombre debe tener al menos dos caracteres");
  }

  if (!data.price || data.price < 0) {
    errores.push("el precio debe ser mayor  a 0");
  }
  //validar imgs

  if (!data.category) {
    errores.push("debe seleccionar una categoria");
  }

  return errores;
}

function mostrarListaErrores(array) {
  let htmlErrores = "";

  array.forEach((error) => {
    htmlErrores += `
                    <p class= "mensaje error}">${error}</p>
                `;
  });
  productContainer.innerHTML = htmlErrores;
}

function mostrarMensaje(estado, mensaje) {
  productContainer.innerHTML = `<p class= "mensaje  ${estado} }">${mensaje}</p>`;
}

const obtenerDatosForm = () => {
  formularioCrearProducto.addEventListener("submit", async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObjJs = Object.fromEntries(formData.entries());

    formObjJs.price = Number(formObjJs.price);
    formObjJs.name = formObjJs.name.trim();

    const errores = validarFormulario(formObjJs);

    if (errores.length > 0) {
      console.error(errores);
      return mostrarListaErrores(errores);
    }

    const formJson = JSON.stringify(formObjJs);

    console.log("datos enviados desde el cliente: ", formJson);
    try {
      let respuesta = await fetch(`${urlBase}/api/products`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: formJson,
      });

      let data = await respuesta.json();

      let mensajeCompleto = `${data.message} con id ${data.productId}`;

      if (!respuesta.ok) {
        return mostrarMensaje("error", data.message);
      }

      mostrarMensaje("exito", mensajeCompleto);
    } catch (error) {
      return mostrarMensaje("error", "error al enviar los datos");
    }
  });
};

obtenerDatosForm();