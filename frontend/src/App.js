import ProductList from './componentes/ProductList';
import Menu from './componentes/Menu';
import react,{useState} from 'react';

function App() {
  const [mostrarProducto , setmostarProducto] = useState(false);
  
  return (
   <>      
    <Menu onProductClick={()=> setmostarProducto(true)}/>
      {mostrarProducto && <ProductList/>}
   </>
  );
}

export default App;
