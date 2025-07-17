const express = require ('Express');
const router = express.Router();
const carrito = require ('../data/carrito.js');
const products = require ('../data/products.js')

router.get('/', (res,req)=>{
    console.log('Dentro');
    res.json(carrito);
})
router.post('/:id', (res , req)=>{
    let newProduct = req.body;
    newProduct.id=products.length +1;
    carrito.push(newProduct);

    res.status(201).json(newProduct);
})

router.put('/:id', (res,req)=>{
    const id = parseInt(req.params.id);
    const index = carrito.find(p=> p.id ===id)

    if(index !== -1){
        carrito[index] = {...carrito[index], ...req.body};
        res.json(carrito[index]);
    }else {
        res.status(404).json({error: "producto no encontrado"});
    }

})

router.delete('/:id', (res ,req) => {
    let id = parseInt(req.params.body);
    let index = carrito.findIndex(p => index.p === id);
    if(index != -1){
        const deleted = products.slice(index , 1)
            res.json({mensaje: 'Producto eliminado', producto : deleted[0]})}
            else {res.status(404).json({error : 'Producto no se pudo eliminar'})}
})


module.exports = router;