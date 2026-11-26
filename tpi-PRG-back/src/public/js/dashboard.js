const urlBase = "http://localhost:25565";

const btnsDesactivar = document.querySelectorAll(".btn-desactivar");
const btnsActivar = document.querySelectorAll(".btn-activar");

btnsDesactivar.forEach(btn => btn.addEventListener("click", e => cambiarEstado(e, "desactivar")));
btnsActivar.forEach(btn => btn.addEventListener("click", e => cambiarEstado(e, "activar")));

const cambiarEstado = async (event, accion) => {
  const id = event.target.getAttribute("data-id");

  // modal de confirmacion (pasos 12 y 20 de la consigna)
  const confirmacion = confirm(`¿Seguro que queres ${accion} el producto ${id}?`);
  if (!confirmacion) return;

  // desactivar usa DELETE /api/products/:id, activar usa PUT /api/products/:id/activar
  let url = `${urlBase}/api/products/${id}`;
  let method = "DELETE";

  if (accion === "activar") {
    url = `${urlBase}/api/products/${id}/activar`;
    method = "PUT";
  }

  try {
    const response = await fetch(url, { method: method });
    const data = await response.json();

    if (!response.ok) {
      return alert(data.message);
    }

    alert(data.message);
    location.reload(); // recarga el dashboard para ver el nuevo estado
  } catch (error) {
    console.log("Error al cambiar estado del producto: ", error);
  }
};
