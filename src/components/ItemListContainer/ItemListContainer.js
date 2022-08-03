import React, { useEffect, useState } from "react";

import { getProducts,getProductsByCategory  } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { categoryId } = useParams()

  useEffect(() => {
    const asyncFunction = categoryId ? getProductsByCategory : getProducts

    asyncFunction(categoryId).then(products => {
        setProducts(products)
    }).catch(error => {
        console.log(error)
    })
    // if(!categoryId) {
    //     getProductsDeAlfredo().then(products => {
    //         setProducts(products)
    //     })
    // } else {
    //     getProductsByCategory(categoryId).then(products => {
    //         setProducts(products)
    //     })
    // }
}, [categoryId])

 

  return (
    <>
      <h2 className="text-center font-bold text-2xl mt-2"> {greeting}</h2>      
        

        <ItemList products={products} />
     
    </>
  );
};

export default ItemListContainer;
