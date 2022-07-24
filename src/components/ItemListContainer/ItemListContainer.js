import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

const ItemListContainer = ( {greeting} ) => {


  
  const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`)
  }

  return (

  

    <>
      <h2> {greeting}</h2>

      <ItemCount stock={10} onAdd={handleOnAdd}/>
    </>
  )
}

export default ItemListContainer