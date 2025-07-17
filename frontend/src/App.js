import ProductList from './componentes/ProductList';
import Menu from './componentes/Menu';
import carrito from './componentes/Carrito';
import {useState} from 'react';

function App() {
  const [mostrarProducto , setmostarProducto] = useState(false);
  

  return (
   <>      
    <Menu onProductClick={()=> setmostarProducto(true)}/>
      {mostrarProducto && <ProductList/>}
   <carrito/>
   </>
  );
}

export default App;
