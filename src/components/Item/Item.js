import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {id, name, img, price, stock,description} ) => {

  // const {name, description, img, stock, price} = product
  return (
    <div className=" mt-12 m-2 max-h-full">
    <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
      <div className="py-3 px-6 border-b border-gray-300 h-16 text-lg">
        {name}
      </div>
      <div className="p-4">
        <h5 className="text-gray-900 text-xl font-medium mb-2 p-2">{description}</h5>
        
        <img src={img} alt="Imagen producto" className='mt-4 p-4 h-auto '/>

        <Link  to={`/detail/${id}`} className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg ease-out duration-150  mb-2 ">Ver detalle Producto</Link>
      </div>
      <div className=" py-3 px-6 border-t border-gray-300 text-gray-600">
        <p>Stock Disponible: {stock} </p>
        <p>Precio: {price} </p>
      </div>
    </div>
  </div>
  
  )
}

export default Item