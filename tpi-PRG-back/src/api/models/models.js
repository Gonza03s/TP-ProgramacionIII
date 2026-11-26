import connection from "../database/db.js";

const selectActiveProducts = () => {
  const sql =
    "SELECT id, name, price, image FROM products WHERE products.active = 1";
  return connection.query(sql);
};

const selectAllProducts = () => {
  const sql = "SELECT id, name, price, image FROM products";
  return connection.query(sql);
};

const selectProductById = (id) => {
  const sql =
    "SELECT id, name, price, image, category, active FROM products WHERE products.id = ?";
  return connection.query(sql, [id]);
};

const insertNewProduct = (name, image, category, price) => {
  const sql =
    "INSERT INTO products (name, image, category, price) VALUES (?, ?, ?, ?)";
  return connection.query(sql, [name, image, category, price]);
};

const updateProduct = (name, image, price, category, active, id) => {
  const sql =
    "UPDATE products SET name = ?, image = ?, price = ?, category = ?, active = ? WHERE id = ?";

  return connection.query(sql, [name, image, price, category, active, id]);
};

const deleteProduct = (id) => {
  const sql = "DELETE FROM products WHERE id = ?";
  return connection.query(sql, [id]);
};

export default {
  selectAllProducts,
  selectProductById,
  insertNewProduct,
  updateProduct,
  deleteProduct,
  selectActiveProducts,
};
