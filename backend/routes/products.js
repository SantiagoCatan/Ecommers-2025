//llamo al servidor , llamo a las rutas
const express = require ('Express');
const router = express.Router();
const products = require('../data/products.js')

// traigo con get todos los productos
router.get('/' , (req,res)=>{
    res.json(products);
})

// traigo con get los productos con id seleccionados
router.get('/:id' , ( req,res )=>{

    const id = parseInt(req.params.id);
    const product = products.find(p => p.id == id);

    if(product){
        res.json(product);}
    else{
        res.status(404).json(console.log("Producto no encontrado"));
        }});

//agregar producto dentro de la api

router.post('/',(req ,res)=>{
    
    const newProduct = req.body;
    newProduct.id = products.length +1;
    products.push(newProduct);

    res.status(201).json(newProduct);
});

//acutalizo el producto dentro de la api
router.put('/:id', (req , res)=>{   
    const id = parseInt(req.params.id);
    //recorrido de la lista y compara el id
    const index = products.findIndex(p => p.id == id)
    
    if(index !== -1){
        products[index]=
        {...products[index], ...req.body};
        res.json(products[index]);
    }else{
    res.status(404).json({error: "Producto no enontrado"});
    }
});

router.delete('/:id',(req , res )=>{
    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id == id);

    if(index != -1 ){
        const deleted = products.splice(index , 1);
            res.json({mensaje: ' producto eliminado', producto: deleted[0]});
    }else {res.status(404).json ({error: 'Producto no encontrado'});}

});

module.exports = router;