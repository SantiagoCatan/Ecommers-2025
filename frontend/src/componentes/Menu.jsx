import './Menu.css';

function Menu({ onProductClick }) {
    const menu = [
    {
      id: 1 ,
      name: "Inicio",
      link: '#Inicio',
    },
    {
      id: 2 ,
      name: "Productos",
      link: '#Productos',
      action: onProductClick
    },
    {
      id:3,
    name: "Carrito",
    link: '#Carrito',
    }
  ]; 
  
function MenuClick(link , action){
    return(e)=>{e.preventDefault();
    if(action) action();
    document.querySelector(link);     
    };
}

    return(
     <nav className = 'navbar'>
            <ul className = 'links'>
            {menu.map(m =>(
                        <li className = 'sublinks' key ={m.id}>
                        <a href={m.link} onClick = {MenuClick(m.link , m.action)}>
                            {m.name}
                        </a>
                        </li>
            ))}
            </ul>
     </nav>
    )
};

export default Menu;