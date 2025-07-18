const productos = require('../data/products.js');

const getProducto = (req,res)=>{
    res.json(productos);
}

const getIdProducto = (req,res) =>{
    const id = parseInt(req.params.id);
    const product = productos.find(p => p.id == id);

    if(product){
        res.json(product);}
    else{
        res.status(404).json(console.log("Producto no encontrado"));
        }
}

const addProducto = (req,res) =>{
    
    const newProduct = req.body;
    newProduct.id = productos.length +1;
    products.push(newProduct);

    res.status(201).json(newProduct);

}

const putProducto = (req,res) =>{
    const id = parseInt(req.params.id);
    //recorrido de la lista y compara el id
    const index = productos.findIndex(p => p.id == id)
    
    if(index !== -1){
        productos[index]=
        {...productos[index], ...req.body};
        res.json(productos[index]);
    }else{
    res.status(404).json({error: "Producto no enontrado"});
    }
}

const deleteProducto = (req,res) =>{
    
    const id = parseInt(req.params.id);
    const index = productos.findIndex(p => p.id == id);

    if(index != -1 ){
        const deleted = products.splice(index , 1);
            res.json({mensaje: ' producto eliminado', producto: deleted[0]});
    }else {res.status(404).json ({error: 'Producto no encontrado'});}
}

module.exports = {
    getProducto,
    getIdProducto,
    addProducto,
    putProducto,
    deleteProducto
};