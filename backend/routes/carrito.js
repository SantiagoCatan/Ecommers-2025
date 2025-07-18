const express = require ('Express');
const router = express.Router();
const {getCarrito,agregarCarrito,eliminarCarrito} = require ('../controllers/carrito.controller.js');

//rutas unicamente , como su respectivos slash
router.get ('/',getCarrito);
router.post ('/',agregarCarrito);
router.delete('/:id',eliminarCarrito);


module.exports = router;