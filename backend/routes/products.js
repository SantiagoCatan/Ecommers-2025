//llamo al servidor , llamo a las rutas
const express = require ('Express');
const router = express.Router();
const {getProducto,getIdProducto,addProducto,putProducto,deleteProducto} = require ("../controllers/products.controller.js");

// traigo con get todos los productos
router.get('/',getProducto);

// traigo con get los productos con id seleccionados
router.get('/:id' ,getIdProducto);

//agregar producto dentro de la api

router.post('/',addProducto);

//acutalizo el producto dentro de la api
router.put('/:id',putProducto);

router.delete('/:id',deleteProducto);

module.exports = router;