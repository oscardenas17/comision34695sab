import { useEffect, useState } from "react";
// import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);

    getDoc(doc(db, "products", productId))
      .then((res) => {
        const data = res.data();
        const productoConvertido = { id: data.id, ...data };
        setProduct(productoConvertido);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);
  // useEffect(() => {
  //   getProductsById(productId)
  //     .then((product) => {
  //       setProduct(product);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [productId]);

  // if (loading) {
  //   return <h1> Cargando...</h1>;
  // }

  return (
    <div>
      <h1 className="text-center text-4xl mt-4">Detalle</h1>
      {loading ? <h1> Cargando...</h1> : <ItemDetail {...product} />}
    </div>
  );
};

export default ItemDetailContainer;
