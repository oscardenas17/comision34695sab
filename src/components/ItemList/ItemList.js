
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <>
      <hr className="m-3" />

      <div className="container mx-auto justify-between flex ">
        {products.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
