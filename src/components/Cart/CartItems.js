import React from "react";
import { useContext } from "react";
import CartContext from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartItems = () => {
  const { cart, removeItem, clearCart, getQuantity, totalPay } =
    useContext(CartContext);

  //console.log("carro", cart);
  const totalPagar = totalPay();
  const cantidadEnCarro = getQuantity();

  return (
    <div className="overflow-x-auto relative shadow-md sm:rounded-lg mt-6 w-5/6 mx-auto ">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              Imagen
            </th>
            <th scope="col" className="py-3 px-6 flex justify-center">
              Cantidad
            </th>
            <th scope="col" className="py-3 px-6">
              Descripción
            </th>
            <th scope="col" className="py-3 px-6">
              $ Unidad
            </th>
            <th scope="col" className="py-3 px-6">
              $ Subtotal
            </th>

            <th scope="col" className="py-3 px-6">
              Eliminar
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.map((prod) => {
            return (
              <tr
                className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                key={prod.id}
              >
                <td>
                  <Link
                    className="flex justify-center"
                    to={`../Detail/${prod.id}`}
                  >
                    <img src={prod.img} width={90} alt="img product" />
                  </Link>
                </td>
                <td className="py-4 px-6 flex justify-center">
                  {prod.quantity}
                </td>
                <td>
                  <Link to={`../Detail/${prod.id}`}>{prod.name}</Link>
                </td>
                <td className="py-4 px-6">${prod.price}</td>

                <td className="py-4 px-6">${prod.price * prod.quantity}</td>
                <td>
                  <button onClick={() => removeItem(prod.id)}>
                    {" "}
                    <span className="text-center text-red-700 font-black m-9">
                      X
                    </span>
                  </button>
                </td>
              </tr>
            );
          })}

          <tr className="text-center container mx-auto"></tr>
        </tbody>
      </table>

      <div className="flex justify-center mt-8">
        <td>Total a pagar por {cantidadEnCarro} Detalles:</td>
        <td className="py- px-6">${totalPagar}</td>
      </div>
      <div className="flex justify-center mt-8">
        {cantidadEnCarro > 0 ? (
          <button
            onClick={clearCart}
            className=" m-2 text-center text-white rounded-lg  bg-blue-700  hover:bg-blue-800 p-2 mt-3 w-36 text-base"
          >
            {" "}
            Vaciar Carrito
          </button>
        ) : (
          <Link
            to="/"
            className="m-2 text-center text-white rounded-lg  bg-blue-700  hover:bg-blue-800 p-2 mt-3 w-36 text-base"
          >
            {" "}
            Volver al Inicio{" "}
          </Link>
        )}
      </div>
    </div>
  );
};

export default CartItems;
