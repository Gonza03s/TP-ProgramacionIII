import productModels from "../models/models.js";

export const vistaProductos = async (req, res) => {
  try {
    const [rows] = await productModels.selectAllProducts();
    console.log(rows);
    res.render("index", {
      title: "Pagina principal",
      listaProductos: rows,
    });
  } catch (error) {
    res.status(500).send("Error al cargar los productos");
  }
};

export const vistaConsultar = (req, res) => {
  res.render("get", { title: "Obtener un producto" });
};

export const vistaCrear = (req, res) => {
  res.render("post", { title: "Crear Producto" });
};

export const vistaModificar = (req, res) => {
  res.render("put", { 
    title: "Modificar Producto",
    id: req.params.id });
};

export const vistaEliminar = (req, res) => {
  res.render("delete", { title: "Eliminar Producto" });
};
