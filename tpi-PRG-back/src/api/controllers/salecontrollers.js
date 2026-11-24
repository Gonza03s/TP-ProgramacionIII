import salemodels from "../models/salemodels.js";


export const createSale = async (req, res) => {
  try {
    const { date, total_price, user_name, products } = req.body;

    console.log("datos que llegan al back de api sales crear venta");
    console.log(date, total_price, user_name, products);

    if (!date || !total_price || !user_name || !Array.isArray(products) || products.length ===0 ) {
        return res.status(400).json({
            message: "Datos invalidos. Debes enviar date, total_price, user_name y products como array"
        });
    }

    const [saleResult] = await salemodels.insertNewSale(date,total_price,user_name);

    // id de la venta creada -> (tabla sales)
    const saleId = saleResult.insertId;

    //se inserta en la tabla intermedia q describe cual venta le corresponde a un producto


    //para cada producto del array products, se insertan los ids en la tabla product_sales
    for(const productId of products){
        await salemodels.insertIntoProductSales(productId,saleId);
    }


    res.status(201).json({
       message:"Venta registrada exitosamente" 
    })


  } catch (error) {
    console.log("Error al crear una venta", error);
    res
      .status(500)
      .json({ message: "Error del servidor interno al crear una venta" });
  }
};
