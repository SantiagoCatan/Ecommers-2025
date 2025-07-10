import {useState,useEffect} from 'react';
import './ProductList.css';

function ProductList(){
    const[products , setproducts] = useState([]);
useEffect (()=> {
  
    fetch('http://localhost:4000/products/')
    .then(res => res.json())
    .then(data => setproducts(data));

},[]);  
console.log(products);
    return(
        <div className= "seccion-producto">
            <h2 className ='sub'>Lista de productos</h2>
            
        <ul className = 'box'>{products.map(products => (
            <li>
                <div className = 'card' key = {products.id}>
                
                <h1>{products.name}</h1>
                <p>Precio de cada unidad: ${products.price}</p>
                
                </div>
            </li>

        ))}
            
        </ul>       
      </div>    
);
};
export default ProductList;