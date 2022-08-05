import React from "react";

import ItemCount from "../../components/ItemCount/ItemCount";

const ItemDetail = ({ name, description, price,img, }) => {
  const handleOnAdd = (quantity) => {
    console.log(`la cantidad agregada es: ${quantity}`);
  };

  return (
    <div className=" mt-24 flex  items-center justify-center  mx-auto h-2/3 ">
      {/* <div className="grid grid-cols-2 content-center mx-auto w-3/$"> */}

      <div className="  content-center mt-4 p-5 w-9/12  bg-white rounded-lg border border-gray-200
       shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
          {name}
        </h5>

        <div className="md:grid grid-cols-2 content-center  ">
          <div  className="w-4/5 m-auto bg-blue-500">
          <img src={img} alt="" className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-115 duration-300 w-3/4 shadow rounded max-w-full align-middle border-none mx-auto" />
          </div>
         
          <div className=" mt-12">
            <p className="p-2 mb-2 text-lg ">{description}</p>
            <ItemCount stock={10} onAdd={handleOnAdd} />
          </div>
          <div><p className="p-1 text-center text-2xl ">$ {price}</p></div>
        </div>

        {/* elements botones */}

    
      </div>
      {/* Card */}
    </div>
  );
};

export default ItemDetail;
