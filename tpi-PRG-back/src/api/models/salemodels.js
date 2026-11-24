import connection from "../database/db.js";

const insertNewSale=(date,total_price,user_name)=>{
    const sql = "INSERT INTO sales(date,total_price,user_name) VALUES (?,?,?)"
    return connection.query(sql,[date,total_price,user_name]);
} 

const insertIntoProductSales=(productId,saleId)=>{
    const sql = "INSERT INTO product_sales(product_id,sale_id) VALUES (?,?)"
    return connection.query(sql,[productId,saleId]);
}

export default{
    insertNewSale,
    insertIntoProductSales
}