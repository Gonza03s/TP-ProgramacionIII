const formulario = document.getElementById("form-put");
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

  array.foreach((error) => {
    htmlErrores += `
                    <p class= "mensaje error}">${error}</p>
                `;
  });
  productContainer.innerHTML = htmlErrores;
}

function mostrarMensaje(estado, mensaje) {
  productContainer.innerHTML = `<p class= "mensaje  ${estado} }">${mensaje}</p>`;
}

const obtenerProducto = () => {

  formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = Number(event.target.ProdId.value.trim());

    if (!id || id <= 0) {
      return mostrarMensaje("error", "Ingresa un id valido");
    }

    try {
      let response = await fetch(`${urlBase}/api/products/${id}`);
      let data = await response.json();

      if (!response.ok) {
        return mostrarMensaje("error", data.message);
      }

      let arrProducto = data.payload;
      renderizarProducto(arrProducto);
    } catch (error) {
      console.log("error al traer datos de la back: ", error);
    }
  });
};

const renderizarProducto = (arrProducto) => {
  let html = ``;

  arrProducto.forEach((prod) => {
    html += `
            <div class="card-producto">
                <img class="img-product" src="${prod.image}" alt="">
                <h4>${prod.name}</h4>
                <p>ID: ${prod.id}</p>
                <p class="card-price">$${prod.price}</p>
                <button class="btn-modificar">Modificar</button>
            </div>
            `;
  });

  productContainer.innerHTML = html;

  let btnModificar = document.querySelector(".btn-modificar");

  btnModificar.addEventListener("click", () => {
    let confirmacion = confirm("Queres actualizar?");
    if (!confirmacion) {
      alert("ok");
    } else {
      mostrarFormActualizacion(arrProducto[0]);
    }
  });
};

const mostrarFormActualizacion = async (producto) => {
  let html = `
            <form id="form-put-act">

            <input type="hidden" name="id" value="${producto.id}">

            <label for="categoryProd">Categoria</label>
            <select name="category" id="categoryProd" required>
                <option value="medications">medicamento</option>
                <option value="sports supplements">suplemento deportivo</option>
            </select>

            <label for="image-prod">Imagen</label>
            <input value=${producto.image} type="text" name="image" id="image-prod" required>

            <label for="name-prod">Nombre</label>
            <input value=${producto.name} type="text" name="name" id="name-prod" required>
        
            <label for="price-prod">Precio</label>
            <input value=${producto.price} type="number" name="price" id="price-prod" required>


            <label for="activeProd">Activo</label>
            <select name="active" id="activeProd" required>
                <option value="1">Activado</option>
                <option value="0">Desactivado</option>
            </select>

            <input type="submit" value="Modificar Producto">
        </form>
        `;

  productContainer.innerHTML = html;

  let formPut = document.getElementById("form-put-act");

  formPut.addEventListener("submit", async (event) => {
    actualizarProducto(event);
  });
};

const actualizarProducto = async (event) => {
  event.preventDefault();

  // el id esta en el input hidden formdata lo incluye
  const formData = new FormData(event.target);
  const formObj = Object.fromEntries(formData.entries());

  formObj.price = Number(formObj.price);
  formObj.name = formObj.name.trim();

  const errores = validarFormulario(formObj);

  if (errores.length > 0) {
    console.error(errores);
    return mostrarListaErrores(errores);
  }

  const dataJson = JSON.stringify(formObj);

  // {"id":"50","category":"sports supplements","image":"https://pedidosfarma.vtexassets.com/arquivos/ids/230758-219-219?v=639007481909730000&width=219&height=219&aspect=true","name":"sports","price":120}

  try {
    let response = await fetch(`${urlBase}/api/products`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: dataJson,
    });

    console.log("RESPUESTA Q LLEGA DESDE EL BACK PARA EL CLIENTE: ",response);

    if (!response.ok) {
      return mostrarMensaje("error", resultadoServer.message);
    }

    let dataBackend = await response.json();

    mostrarMensaje("exito", dataBackend.message);
  } catch (error) {
    console.log("error al mandar al back", error);
  }


};

obtenerProducto();

