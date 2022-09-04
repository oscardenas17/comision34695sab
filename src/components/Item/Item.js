import { Link } from "react-router-dom";

const Item = ({ id, name, img, price, stock, description }) => {
  // const {name, description, img, stock, price} = product

  return (
    <div className="mt-9 mr-2">
      <article className="relative mb-8 lg:mb-0">
        <div className="bg-white rounded-full flex flex-col items-center justify-center w-[100px] h-[100px] mx-auto drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] absolute left-[50%] -translate-x-[50%] -top-12 z-20">
          <h1 className="text-2xl font-bold text-[#d22196]">$ {price}</h1>
        </div>

        <div className="relative bg-gradient-to-t from-[#d22196] to-[#ef3460] h-[300px] rounded-xl drop-shadow-[0_10px_10px_rgba(0,0,0,0.3)] rounded-tl-[100px] rounded-tr-[100px] rounded-bl-[100%] rounded-br-[100%]">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="flex items-center justify-center">
              <img
                src={img}
                alt="Imagen producto"
                className="m-4 p-4 h-40  flex items-center justify-center"
              />
            </div>
            <p className="font-bold text-xl">{name}</p>
          </div>
        </div>

        <div className="bg-white w-[90%] mx-auto p-8 pt-32 -mt-20 rounded-xl shadow-2xl">
          <div className="flex flex-col items-center">
            <p className="text-2sm tracking-[5px] font-medium mb-2">
              {description}
            </p>
            <p>Stock Disponible: {stock} </p>
          </div>
          <div className="mt-6 py-2"></div>
        </div>
        {stock > 0 ? (
          <div className="w-[50%] mx-auto -mt-7 flex flex-col items-center">
            <Link
              to={`/detail/${id}`}
              className="text-center w-full bg-gradient-to-r from-[#d22196] to-[#ef3460] hover:from-[#ef3460] hover:to-[#d22196] text-white p-4 rounded-full"
            >
              Ordenar ahora
            </Link>
          </div>
        ) : (
          <div className="w-[50%] mx-auto -mt-7 flex flex-col items-center">
            <Link
              to={`/`}
              className=" cursor-auto text-center w-full bg-gradient-to-r from-[#d22196] to-[#ef3460] hover:from-[#ef3460] hover:to-[#d22196] text-white p-4 rounded-full"
            >
              No tenemos disponibilidad de este producto
            </Link>{" "}
          </div>
        )}
      </article>
    </div>
  );
};

export default Item;
