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

export{
    validateId,
    validateProducts
}