import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/navBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import CartContextProvider from './context/CartContext'
import Cart from './components/Cart';
import { getFirestoreApp } from './firebase/config';
import PedidoExito from './pedidoexitos';

getFirestoreApp()

function App() {
  return (
    <div className="App">
      <CartContextProvider>
      <NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:categoria" element={<ItemListContainer />}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/pedidoexitoso' element={<PedidoExito/>}/>
      </Routes>
      </CartContextProvider>
    </div>
  );
}

export default App;
