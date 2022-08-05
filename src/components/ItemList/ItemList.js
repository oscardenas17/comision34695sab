import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <>
      <hr className="m-3" />
      <p className="m-6 uppercase">Desafio catalogo con maps</p>

      <div className="container mx-auto justify-between flex ">
        {products.map((prod) => (
          <Item key={prod.id} product={prod} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
