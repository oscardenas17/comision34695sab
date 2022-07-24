import React from 'react'

const Item = ( {product} ) => {

  const {name, description, img, stock, price} = product
  return (
    <div className=" ">
    <div className="block rounded-lg shadow-lg bg-white max-w-sm text-center">
      <div className="py-3 px-6 border-b border-gray-300">
        {name}
      </div>
      <div className="p-6">
        <h5 className="text-gray-900 text-xl font-medium mb-2">{description}</h5>
        
        <img src={img} alt="Imagen producto" className='mt-4 p-4'/>

        <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Ver detalle Producto</button>
      </div>
      <div className="py-3 px-6 border-t border-gray-300 text-gray-600">
        <p>Stock Disponible: {stock} </p>
        <p>Precio: {price} </p>
      </div>
    </div>
  </div>
  
  )
}

export default Item