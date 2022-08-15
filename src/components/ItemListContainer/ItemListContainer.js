import React, { useEffect, useState } from "react";

import { getProducts,getProductsByCategory  } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true) 
    const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId).then(products => {
        setProducts(products)
    }).catch(error => {
        console.log(error)
    }).finally(() => {
      setLoading(false)
    })
    // if(!categoryId) {
    //     getProducts().then(products => {
    //         setProducts(products)
    //     })
    // } else {
    //     getProductsByCategory(categoryId).then(products => {
    //         setProducts(products)
    //     })
    // }
}, [categoryId])

 if(loading){
   return <p> Cargando </p>
  }

  return (
    <>
      <h2 className="text-center font-bold text-2xl mt-2">{ ` ${greeting} ${categoryId || '' } ` } </h2>      
        
     
        <ItemList products={products} />
     
    </>
  );
};

export default ItemListContainer;
