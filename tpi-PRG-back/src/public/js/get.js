const productContainer = document.getElementById("contenedor-producto");
const formulario = document.getElementById("form-get");
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
      let data = await response.json();

      // si el back respondio 400, 404 o 500, mostramos su mensaje y cortamos
      if (!response.ok) {
        return mostrarMensaje("error", data.message);
      }

      renderizarProducto(data.payload);
    } catch (error) {
      console.log("error al traer los datos: ", error);
    }
  });
};

const renderizarProducto = (array) => {
  console.log("ARRAY Q LLEGA DEL PAYLOAD", array);
  let html = ``;

  array.forEach((prod) => {
    html += `
                <div class="card-producto card-get">
                
                    <img class="img-product" src="${prod.image}" alt="">

                    <div class="card-text">
                      <h4>${prod.name}</h4>
                      <p>ID: ${prod.id}</p>
                      <p class="card-price">$${prod.price}</p>
                    </div>
                </div>
                `;
  });

  productContainer.innerHTML = html;
};

function mostrarMensaje(estado, mensaje) {
  productContainer.innerHTML = `<p class= "mensaje  ${estado} }">${mensaje}</p>`;
}

obtenerDatosForm();
