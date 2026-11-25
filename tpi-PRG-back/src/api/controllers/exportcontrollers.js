import productModels from "../models/models.js"
import ExcelJS from "exceljs"



export const excelProducts = async (req, res) => {
    try {
        const [rows] = await productModels.selectAllProducts();
        // Creamos un libro de excel y una hoja
        const workbook = new ExcelJS.Workbook(); // Crea un nuevo archivo de Excel en memoria 
        const worksheet = workbook.addWorksheet("Productos")

        worksheet.columns = [ 
            { header: "ID", key: "id", width: 10 },
            { header: "Nombre", key: "name", width: 50 },
            { header: "Precio", key: "price", width: 20 },
        ];

        // Agregamos los datos, inserta cada registro como un nueva fila en la hoj
        rows.forEach(row => worksheet.addRow(row)); // Recorremos todos los registros que nos provee la BBDD

        // configuracion de la respuesta HTTP para la descarga
        // indicamos al navegador que la respuesta es un archivo excel
        res.setHeader( 
            "Content-Type", // MIME oficial para archivos ".xlsx"
            "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        );

        // escribe el contenido del libro en la respuesta HTTP
        await workbook.xlsx.write(res); 

        res.end(); //cierra conexion http y brinda respuesta

    } catch (error) {
        console.log("Error descargando excel de productos: ", error);

        res.status(500).json({
            message: "Error interno del servidor al obtener productos activos"
        });
    }
}