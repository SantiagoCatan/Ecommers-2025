const cart = require('../data/carrito.js');


const getCarrito = (req,res) =>{
 res.json(cart);
};

const agregarCarrito = (req,res) =>{
    const product = req.body;
    cart.push(product);

    res.status(201).json({menssage : 'Producto aniadido',cart});
};

const eliminarCarrito = (req,res) =>{
    const id = req.params.id;
    const index = cart.indexOf(p => p.id == id);

    if(index != -1){
        cart.slice(index,1);
        res.json({message: 'Producto eliniado',cart});
    }else {res.status(404).json({error: 'Producto no encontrado en el carrito'})}
};


module.exports = {
    getCarrito,
    agregarCarrito,
    eliminarCarrito
}