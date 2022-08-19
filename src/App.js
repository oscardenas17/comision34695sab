import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import { CartContextProvider } from './context/CartContext'
import CartItems from "./components/Cart/CartItems";




function App() {



  return (
    <div className="App"> 
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Listado de todos los productos'/>}/>
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado filtrado'/>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer  />} />  
          <Route path="/cart" element={<CartItems />}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  </div>
);
}

export default App;