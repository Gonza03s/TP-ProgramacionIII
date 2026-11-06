import express from 'express';
import connection from './src/api/database/db.js'
import environments from './src/api/config/environments.js';
import cors from 'cors'

const app = express();
const PORT = environments.port;

app.use(cors()); 
app.use(express.json());

app.get("/", (_, res) => {
  res.send("Ruta por defecto");
});

// obtener todos
app.get("/api/products", async (req,res)=>{

    const sql = "SELECT * FROM products";
    const [rows] = await connection.query(sql);

    res.status(200).json({
        payload: rows
    })
})

//obtener uno
app.get("/api/products/:id", async (req,res)=>{

  const id = req.params.id

  let sql = "SELECT * from products WHERE products.id = ?"
  let [rows] = await connection.query(sql,[id]);

  res.status(200).json({
    payload:rows
  })

})


//crear recurso
app.post("/api/products",async(req,res)=>{

  const {category,image,name,price} = req.body;

  let sql = "INSERT INTO products(name, image, category, price) VALUES (?, ?, ?, ?)";
  await connection.query(sql,[name,image,category,price]);   //pasar el mismo orden de columnas que hay en la Basededatos
  
  res.status(200).json({
    message:"Producto creado con exito"
  })
});


app.delete("/api/products/:id",async (req,res)=>{

  const id = req.params.id;

  const sql = "DELETE FROM products WHERE id = ?";

  await connection.query(sql,[id]);

  res.status(200).json({
    message:"Producto eliminado exitosamente"
  })

})


app.put("/api/products", async (req,res) =>{

  const {id, category,image,name,price} = req.body;
  
  const sql="UPDATE products SET name = ?, image = ?, price = ?, category = ? WHERE id = ?";

  await connection.query(sql,[name,image, price,category,id]);

  res.status(200).json({
    message:`Producto con id ${id} actualizado`
  })
})





app.listen(PORT, () =>
  console.log(`Servidor encendido: http://localhost:${PORT}`),
);