import './App.css';
// import ItemCount from './components/ItemCount/ItemCount';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import Navbar from './components/Navbar/Navbar';


function App() {
  // const imagen = <img src="url" alt="imagen" />

  const handleOnAddCart = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`)
   
  }

  return (
    <div className="App">
     
      {/* <header id="header" className="App-header OtraClase">
        <p>
          Bienvenidos
        </p>
        <button style={{ color: 'red', backgroundColor: 'green', fontSize: '30px'}}>Boton</button>
        {imagen}
      </header> */}
      <Navbar />
      <ItemListContainer greeting={' La saludación'} addCart={handleOnAddCart}/>
     
    </div>
  );
}

export default App;