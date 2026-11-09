import express from 'express';
import connection from './src/api/database/db.js'
import environments from './src/api/config/environments.js';
import cors from 'cors'

const app = express();
const PORT = environments.port;

app.use(cors()); 
app.use(express.json());

const validateId = (req,res,next)=>{
    const id = Number(req.params.id);

    if(!Number.isInteger(id) || id <=0 ){
        return res.status(404).json({
            message:"el id debe ser un numero entero positivo"
        })
    }
    req.id = id;
    next();
}

const validateProducts= (req,res,next)=>{

    const categoriaValidas= ["medications","sports supplements"];
    const {name, image, price, category} = req.body;
    const errors = [];

    if(!name || !image || !price || !category){
        errors.push("faltan campos requeridos");
    }
    
    if(typeof name !== "string" || name.trim().length < 2){
        errors.push("El nombre debe tener dos caracteres")
    }

    if(typeof price !== "number" || price<= 0){
        errors.push("el precio debe ser mayor a 0")
    }

    if(!categoriaValidas.includes(category)){
        errors.push("Categoria invalida");
    }

    if(errors.length > 0){
        res.status(400).json({
            message:"datos invalidos",
            listaErrores: errors
        })
    }

    next();
}


app.get("/", (_, res) => {
  res.send("Ruta por defecto");
});

// obtener todos
app.get("/api/products", async (req,res)=>{

    try {
      const sql = "SELECT * FROM products";
      const [rows] = await connection.query(sql);

      res.status(200).json({
          payload: rows
      })
      
    } catch (error) {
      console.log(error);
    }
  
})

//obtener uno
app.get("/api/products/:id",validateId, async (req,res)=>{

  try {

    let sql = "SELECT * from products WHERE products.id = ?"
    let [rows] = await connection.query(sql,req.id);

    if (!rows.length) {
      return res.status(404).json({
        message: `No se encontro producto con id ${req.id}`,
      });
    }

    res.status(200).json({
      payload:rows
    })

  } catch (error) {
    console.log("error obteniendo productos", error);

    res.status(500).json({
      message: "error interno del servidor al obtener producto por id",
    });

  }

})

//crear recurso
app.post("/api/products",validateProducts,async(req,res)=>{

  try {
    const {category,image,name,price} = req.body;

    let sql = "INSERT INTO products(name, image, category, price) VALUES (?, ?, ?, ?)";
    const [rows]= await connection.query(sql,[name,image,category,price]);   //pasar el mismo orden de columnas que hay en la Basededatos

    console.log(rows);
    console.log("ID base de datos: ",rows.insertId);
    
    res.status(201).json({
      message: "producto creado con exito",
      productId: rows.insertId
    });
    
  } catch (error) {
    console.log("error creando productos", error);

    res.status(500).json({
      message: "error interno del servidor al crear producto ",
    });
  }


});

//modificar recurso
app.put("/api/products",validateProducts ,async (req,res) =>{

  try {
    const {id, category,image,name,price} = req.body;
  
    const sql="UPDATE products SET name = ?, image = ?, price = ?, category = ? WHERE id = ?";

    const [rows] =await connection.query(sql,[name,image, price,category,id]);

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
 
})


app.delete("/api/products/:id",validateId,async (req,res)=>{

  try {
    const sql = "DELETE FROM products WHERE id = ?";
    await connection.query(sql,req.id);

    res.status(200).json({
      message: `producto con id ${req.id} eliminado correctamente`,
    });
    
  } catch (error) {
    console.log("error eliminado producto", error);

    res.status(500).json({
      message: "error interno del servidor al eliminar producto",
    });
  }

})


app.listen(PORT, () =>
  console.log(`Servidor encendido: http://localhost:${PORT}`),
);