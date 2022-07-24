import React, { useState } from "react";

const ItemCount = ( { onAdd}) => {
  const [count, setCount] = useState(1);


  const increment = () => {
    if(count < 10 ) {
        setCount(count + 1)
    }
}

const decrement = () => {
    if(count > 1) {
        setCount(count - 1)
    }
}


  return (
<>
<div className="flex items-center justify-center  mx-auto w-3/$">
      {/* <div className="grid grid-cols-2 content-center mx-auto w-3/$"> */}
 

  
      <div className="  content-center mt-6 p-5 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
  

          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Desafio contador con boton
          </h5>

          <img src="https://i.imgur.com/5v22Iv6.jpeg" alt="" />


            {/* elements botones */}
          <div className=" grid grid-cols-3">

            <button
            onClick={decrement}
            className=" flex items-center justify-center  mt-2 py-2 px-3 text-sm font-medium  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              {" "}
              <svg
                className="w-6 h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </button>

            <p className="text-white flex items-center justify-center">
              {count}
            </p>

            <button
              onClick={increment}
                className=" flex items-center justify-center mt-2  py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                {" "}
                <svg
                    className="w-6 h-6  "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
            </button>

            
          </div>
           {/* elements botones */}


           <button onClick={() => onAdd(count)} className="text-white rounded-lg text-sm  bg-green-700  hover:bg-green-800 p-2 mt-3">Agregar al carrito</button>


      </div>
    {/* Card */}




    </div>
    </>
    //Fin contenedor
  );
};

export default ItemCount;
