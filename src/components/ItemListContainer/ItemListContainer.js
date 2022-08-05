import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products);
      
    });
  }, []);

  const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`);
  };

  return (
    <>
      <h2> {greeting}</h2>
   
       
        <ItemCount stock={10} onAdd={handleOnAdd} />

        <ItemList products={products} />
     
    </>
  );
};

export default ItemListContainer;
