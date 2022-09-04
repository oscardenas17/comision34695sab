
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <>
      <hr className="m-3" />

      <div className=" container justify-between flex-col lg:flex-row flex mx-auto h-2">
        {products.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </>
  );
};

export default ItemList;
