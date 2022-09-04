import React from "react";
import Alerta from "../Alert/Alerta";
import CartContext from "../../context/CartContext";
import { useState, useContext } from "react";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  documentId,
  writeBatch,
} from "firebase/firestore";
import { db } from "../../services/firebase";
import { Link } from "react-router-dom";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [ordenExitosa, setOrdenExitosa] = useState(false);
  const [idCompra, setIdCompra] = useState(false);

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [direccion, setDireccion] = useState("");
  const [sinStock, setSinStock] = useState("");

  // const [nullStock, setNullStock] = useState('') // estado si no hay stock
  // const [noData, setNoData] = useState('') // comprobacion de datos del formulario

  const { cart, obtenerCantidad, totalPago, limpiarCarrito } = useContext(CartContext);

  const totalProductos = obtenerCantidad();
  const totalPagar = totalPago();

  const CrearOrden = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (nombre !== "") {
      try {
        //datos usuario
        const objOrden = {
          comprador: {
            nombre,
            apellido,
            telefono,
            direccion,
          },
          //objetos que compro
          items: cart, //se puede obtener del cart
          totalProductos, //se puede obtener del cart
          totalPagar, //se puede obtener del cart
          fecha: new Date(),
        };

        const ids = cart.map((prod) => prod.id); //Ids del producto seleccionado
        const productosRef = collection(db, "products");
        const ProductosAñadidosQueryFS = await getDocs(
          query(productosRef, where(documentId(), "in", ids))
        );
        //se obtienen los documentos de los productos añadidos a firestore
        const { docs } = ProductosAñadidosQueryFS;
        //array que almacena productos sin stock
        const sinStock = [];

        const batch = writeBatch(db);

        //recorrrer documentos para compararlos contra el carrito y validar stock
        docs.forEach((doc) => {
          const datosDocumento = doc.data();
          const stockProductoEnBD = datosDocumento.stock;
          //comprar sctok del producto agreado al carrito vs el de la bd
          const productoPedidoCarro = cart.find((prod) => prod.id === doc.id);
          //se obtiene la cantidad del producto
          const cantidadProduct = productoPedidoCarro?.quantity;

          stockProductoEnBD >= cantidadProduct
            ? batch.update(doc.ref, {
                stock: stockProductoEnBD - cantidadProduct,
              })
            : sinStock.push({ id: doc.id, ...datosDocumento });
        });

        if (sinStock.length === 0) {
          await batch.commit();

          const ordenNumero = collection(db, "orders");
          const ordenAgregada = await addDoc(ordenNumero, objOrden);

          setIdCompra(ordenAgregada.id);

          setOrdenExitosa(true);
          limpiarCarrito();
          // setTimeout(() => {
          //   redireccion("/");
          // }, 4000);
        } else {
          setSinStock(true);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  if (loading) {
    return (
      <div className="max-w-lg mx-auto">
        <div
          className=" flex bg-blue-100 rounded-lg p-4 m-6 text-xl text-blue-700"
          role="alert"
        >
          <svg
            className="w-5 h-5 inline mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clipRule="evenodd"
            ></path>
          </svg>
          <div className="text-center">
            <span className="font-medium">Un momento por favor!</span> Su orden
            se esta creando.
          </div>
        </div>
      </div>
    );
  }

  if (sinStock) {
    return (
      <div className="max-w-lg mx-auto mt-64 ">
        <div className="">
          <div
            className=" flex bg-yellow-100 rounded-lg p-4 m-6 text-xl "
            role="alert"
          >
            <svg
              className="w-5 h-5 inline mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              ></path>
            </svg>
            <div className="text-center">
              <span className="font-medium">
                Ups...Lo sentimos no hay disponibilidad del producto, alguien
                fue más rápido y se llevo el último
              </span>
            </div>
          </div>
        </div>
        {limpiarCarrito()}
        <Link
          to="/"
          className=" m-4 mx-36 bg-gradient-to-r from-[#d22196] to-[#ef3460] hover:from-[#ef3460] hover:to-[#d22196]   text-center p-3 rounded-xl uppercase font-bold  my-10  "
        >
          Volver al Inicio
        </Link>
      </div>
    );
  }

  if (ordenExitosa) {
    return (
      <div className="max-w-lg mx-auto mt-64">
        <Alerta
          alerta={`Orden Creada Con Exito... El Código de su compra es: ${idCompra}`}
        />
        <Link
          to="/"
          className=" mx-36 bg-gradient-to-r from-[#d22196] to-[#ef3460] hover:from-[#ef3460] hover:to-[#d22196]   text-center p-3 rounded-xl uppercase font-bold  my-10  "
        >
          Volver al catalogo
        </Link>
      </div>
    );
  }

  return (
    <>
      <div className="max-w-lg mx-auto mt-40">
        <form
          className="bg-white py-10 px-5 md:w-full rounded-lg shadow  bg-gradient-to-t from-[#a7dfff] to-[#a0aae5] "
          onSubmit={CrearOrden}
        >
          <h1 className="max-w-lg mx-auto text-center text-xl">
            Completa tus datos para la compra
          </h1>
          {/* //Mostrar la alerta */}

          <div className="mb-5 mt-6">
            <label
              htmlFor="nombre"
              className="text-gray-700 uppercase font-bold text-sm "
            >
              Nombres
            </label>
            <input
              required
              type="text"
              id="nombre"
              name="nombre"
              className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Nombre Proyecto"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="apellido"
              className="text-gray-700 uppercase font-bold text-sm"
            >
              Apellidos
            </label>
            <input
              required
              type="text"
              id="apellido"
              className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Apellidos"
              value={apellido}
              onChange={(e) => setApellido(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="telefono"
              className="text-gray-700 uppercase font-bold text-sm"
            >
              Telefono
            </label>
            <input
              required
              type="number"
              id="telefono"
              placeholder="Teléfono"
              className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              value={telefono}
              onChange={(e) => setTelefono(e.target.value)}
            />
          </div>

          <div className="mb-5">
            <label
              htmlFor="direccion"
              className="text-gray-700 uppercase font-bold text-sm"
            >
              Direccion
            </label>
            <input
              required
              type="text"
              id="direccion"
              className="border w-full p-2 mt-2 placeholder-gray-400 rounded-md"
              placeholder="Dirección de entrega"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-center">
            {" "}
            <input
              type="submit"
              className="text-white cursor-pointer  bg-gradient-to-r from-[#d22196] to-[#ef3460] hover:from-[#ef3460] hover:to-[#d22196]  px-24  p-4 rounded-xl uppercase font-bold  my-10  w-auto"
              value="Crear Orden"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default Checkout;
