const productContainer = document.getElementById("contenedor-producto");
const formulario = document.getElementById("form-delete");
const urlBase = "http://localhost:25565";

const obtenerDatosForm = async () => {
  formulario.addEventListener("submit", async (event) => {
    event.preventDefault();

    const id = Number(event.target.ProdId.value.trim());

    if (!id || id <= 0) {
      return mostrarMensaje("error", "Ingresa un id valido");
    }

    try {
      let response = await fetch(`${urlBase}/api/products/${id}`);

      if (!response.ok) {
        return mostrarMensaje("error", data.message);
      }

      response = await response.json();

      let arrProductos = response.payload;
      renderizarProducto(arrProductos);
    } catch (error) {
      console.log("error envio user a la bd: ", error);
    }
  });
};

const renderizarProducto = (arrProductos) => {
  let html = ``;

  arrProductos.forEach((prod) => {
    html += `
          <div class="card-producto card-get">
                          
              <img class="img-product" src="${prod.image}" alt="">

              <div class="card-text">
                  <h4>${prod.name}</h4>
                  <p>ID: ${prod.id}</p>
                  <p class="card-price">$${prod.price}</p>
                  <button class="btn-eliminar btn-enviar">Eliminar</button>     
              </div>
          </div>
                `;
  });

  productContainer.innerHTML = html;
  btnEliminar = document.querySelector(".btn-eliminar");

  btnEliminar.addEventListener("click", (e) => {
    let confirmacion = confirm("Queres eliminar este producto?");

    if (!confirmacion) {
      alert("operacion cancelada");
    } else {
      eliminarProducto(arrProductos[0].id);
    }
  });
};

const eliminarProducto = async (id) => {
  try {
    let response = await fetch(`${urlBase}/api/products/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      return mostrarMensaje("error", result.message);
    }

    response = await response.json();

    mostrarMensaje("exito", response.message);
  } catch (error) {
    console.log("Error eliminacion producto: ", error);
  }
};

function mostrarMensaje(estado, mensaje) {
  productContainer.innerHTML = `<p class= "mensaje  ${estado} }">${mensaje}</p>`;
}

obtenerDatosForm();
