import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";


function App() {
  // const imagen = <img src="url" alt="imagen" />

  // const handleOnAdd = (quantity) => {
  //   console.log(`la cantidad agregada es: ${quantity}`);
  // };

  return (
    <div className="App"> 
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='Listado de todos los productos'/>}/>
        <Route path='/category/:categoryId' element={<ItemListContainer greeting='Listado filtrado'/>} />
        <Route path='/detail/:productId' element={<ItemDetailContainer />} />  
        <Route path='*' element={<h1>404 NOT FOUND</h1>} /> 
      </Routes>
    </BrowserRouter>
  </div>
);
}

export default App;