import { useState, createContext } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const agregarItem = (productToAdd) => {
    if (!productoEnCarro(productToAdd.id)) {
      setCart([...cart, productToAdd]);
    } else {
      const cartUpdated = cart.map((prod) => {
        if (prod.id === productToAdd.id) {
          const productUpdated = {
            ...prod,
            quantity: productToAdd.quantity,
          };
          return productUpdated;
        } else {
          return prod;
        }
      });

      setCart(cartUpdated);
    }
  };

  //Limpar array
  const limpiarCarrito = () => {
    setCart([]);
  };

  //ELIMINAR ITEM
  const eliminarProducto = (id) => {
    const newCartRemove = cart.filter((prod) => prod.id !== id);
    setCart(newCartRemove);
  };

  //RETORNA TRUE O FALSE CON SOME
  const productoEnCarro = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const obtenerCantidad = () => {
    let acumulado = 0;
    cart.forEach((prod) => {
      acumulado += prod.quantity;
    });
    return acumulado;
  };

  const obtenerCantidadPructo = (id) => {
    const product = cart.find((prod) => prod.id === id);
    return product?.quantity; // ? si existe en procut el item quiantity lo muestra
  };

  const totalPago = () => {
    let precioTotal = 0;
    cart.forEach((prod) => {
      precioTotal += parseInt(prod.price) * prod.quantity;
    });
    return precioTotal;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        agregarItem,
        obtenerCantidad,
        productoEnCarro,
        eliminarProducto,
        limpiarCarrito,
        obtenerCantidadPructo,
        totalPago,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
