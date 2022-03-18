import { useEffect, useState } from 'react';
import './App.css';
import { CargarProductos } from './components/ejerciciocuatro/getFetch';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/navBar';



function App() {
  const [categoria, setCategoria] = useState("")
  const [productos, setProductos] = useState([])
  const [auxProductos, setAuxProductos] = useState([])
  const [cargando, setCargando] = useState(false)
  useEffect(() => {
    CargarProductos
    .then(
      resp => {
      setProductos(resp)
      setAuxProductos(resp)
    })
    .catch(err => console.log(err))
    .finally()
  }, [])
  useEffect(() => {
    if(categoria === "") { 
      setAuxProductos(productos)
    }
    else{
    const nuevoProductos = productos.filter(prod => { return (prod.categoria === categoria) })
     setAuxProductos(nuevoProductos)
    }
  }, [categoria])
  
  
  return (
    <div className="App">
      <NavBar onCategoria={(cat)=>setCategoria(cat)} />
      <ItemListContainer Productos={auxProductos} />
    </div>
  );
}

export default App;
