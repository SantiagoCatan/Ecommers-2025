// crear servidor Express

const express = require ('Express');
const app = express();
const PORT =  4000;
const cors = require ('cors');

app.use(cors());
app.use(express.json());


// importar rutas

const productsRoutes = require('./routes/products');
const carritoRoutes = require('./routes/carrito');

app.use('/products',productsRoutes);
app.use('/carrito' ,carritoRoutes);

//inciar el servidor

app.listen(PORT,()=> {console.log('iniciado el servidor');});


