import productModels from "../models/models.js";

export const getActiveProducts = async (req, res) => {
  try {
    const [rows] = await productModels.selectActiveProducts();

    if (rows.length === 0) {
      return res.status(404).json({
        message: "No hay productos activos",
      });
    }

    res.status(200).json({
      payload: rows,
    });
  } catch (error) {
    console.log("Error obteniendo productos activos: ", error);

    res.status(500).json({
      message: "Error interno del servidor al obtener productos activos",
    });
  }
};

export const getAllProducts = async (req, res) => {
  try {
    const [rows] = await productModels.selectAllProducts();

    res.status(200).json({
      payload: rows,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProductById = async (req, res) => {
  try {
    const [rows] = await productModels.selectProductById(req.id);

    if (!rows.length) {
      return res.status(404).json({
        message: `No se encontro producto con id ${req.id}`,
      });
    }

    res.status(200).json({
      payload: rows,
    });
  } catch (error) {
    console.log("error obteniendo productos", error);

    res.status(500).json({
      message: "error interno del servidor al obtener producto por id",
    });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { category, image, name, price } = req.body;

    const [rows] = await productModels.insertNewProduct(
      name,
      image,
      category,
      price,
    );

    res.status(201).json({
      message: "producto creado con exito",
      productId: rows.insertId,
    });
  } catch (error) {
    console.log("error creando productos", error);

    res.status(500).json({
      message: "error interno del servidor al crear producto ",
    });
  }
};

export const modifyProduct = async (req, res) => {
  try {
    const { id, category, image, name, price,active } = req.body;

    console.log("CONTROLLER MODIFY DATOS Q LLEGAN DESDE EL FRONT", req.body);

    const [rows] = await productModels.updateProduct(
      name,
      image,
      price,
      category,
      active,
      id,
    );

    if (rows.changedRows === 0) {
      return res.status(404).json({
        message: `no se actualizo el producto`,
      });
    }

    res.status(200).json({
      message: `producto con id ${id} actualizado correctamente`,
    });
  } catch (error) {
    console.log("error modificar producto", error);

    res.status(500).json({
      message: "error interno del servidor al modificar producto",
    });
  }
};

export const removeProduct = async (req, res) => {
  try {
    const [rows] = await productModels.deleteProduct(req.id);

    res.status(200).json({
      message: `producto con id ${req.id} eliminado correctamente`,
    });
  } catch (error) {
    console.log("error eliminado producto", error);

    res.status(500).json({
      message: "error interno del servidor al eliminar producto",
    });
  }
};
