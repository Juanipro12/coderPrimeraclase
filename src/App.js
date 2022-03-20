import { useEffect, useState } from 'react';
import './App.css';
import { CargarProductos } from './components/ejerciciocuatro/getFetch';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/navBar';

import logo from './components/ejerciciocuatro/Load_Icon.gif'

function App() {
  const [categoria, setCategoria] = useState("")
  const [productos, setProductos] = useState([])
  const [auxProductos, setAuxProductos] = useState([])
  const [cargando, setCargando] = useState(true)
  useEffect(() => {
    setTimeout(()=>{CargarProductos
    .then(
      resp => {
      setProductos(resp)
      setAuxProductos(resp)
    })
    .catch(err => console.log(err))
    .finally(setCargando(false))},2000)
  }, []);
  useEffect(() => {
    if(categoria === "") { 
      setAuxProductos(productos)
    }
    else{
    const nuevoProductos = productos.filter(prod => { return (prod.categoria === categoria) })
     setAuxProductos(nuevoProductos)
    }
  }, [categoria])
  
  console.log(cargando)
  return (
    <div className="App">
      <NavBar onCategoria={(cat)=>setCategoria(cat)} />
      { cargando ? <img src={logo} alt={"cargando"} />
      :<ItemListContainer Productos={auxProductos} />}
    </div>
  );
}

export default App;
