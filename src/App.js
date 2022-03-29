import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/navBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
      <Route path="/" element={<ItemListContainer/>}/>
      <Route path="/category/:categoria" element={<ItemListContainer />}/>
      <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </div>
  );
}

export default App;
