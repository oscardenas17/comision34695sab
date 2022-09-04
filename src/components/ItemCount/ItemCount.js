import  { useEffect, useState } from "react";

const ItemCount = ({  initial=1  , stock=0, onAdd }) => {
  const [count, setCount] = useState(initial);


useEffect(() => {
  setCount(initial)
}, [initial]);


  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <>
      
      {/* elements botones */}
      <div className=" flex w-2/4 justify-center mx-auto mt-4">
        <button
          onClick={decrement}
          className=" flex items-center justify-center  mt-2  text-sm   text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  flex-auto md:w-1/4"
        >
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
          {/* <p className="ml-2"> Quitar </p> */}
        </button>

        <div className=" flex-auto  m-2 border-2 rounded  items-center justify-center ">
          <p className="text-lg text-center">{count}</p>
        </div>

        <button
          onClick={increment}
          className=" flex-auto flex  justify-center mt-2   text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800  items-center md:w-1/4"
        >
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
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          {/* <p  className="ml-2">Añadir</p> */}
        </button>
      </div>

      <div className="flex justify-center">
        <button
          onClick={() => onAdd(count) }
          className="text-white rounded-lg  bg-gradient-to-r from-[#d22196] to-[#ef3460] hover:from-[#ef3460] hover:to-[#d22196] p-2 mt-3 w-2/4	 text-base transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
        >
          Agregar al carrito
        </button>
      </div>
    </>
    //Fin contenedor
  );
};

export default ItemCount;
