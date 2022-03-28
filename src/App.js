
import './App.css';

import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/navBar';
import { useState } from 'react';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  const [categoria, setCategoria] = useState("")
  const [Producto, setProducto] = useState("")
  return (
    <div className="App">
      <NavBar onCategoria={(cat)=>setCategoria(cat)} />
      
      {Producto === "" || categoria !== ""?
      <ItemListContainer categoria={categoria} onGuardarProducto={(prod)=>{setProducto(prod); setCategoria("")}} />:
       <ItemDetailContainer producto={Producto} />
      
      }
    </div>
  );
}

export default App;
