import React, { useEffect, useState } from "react";
// import { getProducts,getProductsByCategory  } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../services/firebase";
import Alerta from "../Alert/Alerta";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const referenciaColeccionFirestore = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : collection(db, "products");

    getDocs(referenciaColeccionFirestore)
      .then((res) => {
        const poroductsConvertidos = res.docs.map((doc) => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(poroductsConvertidos);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
    // const asyncFunction = categoryId ? getProductsByCategory : getProducts

    // asyncFunction(categoryId).then(products => {
    //     setProducts(products)
    // }).catch(error => {
    //     console.log(error)
    // }).finally(() => {
    //   setLoading(false)
    // })
    // if(!categoryId) { //     getProducts().then(products => {    //         setProducts(products)    //     })    // } else {    //     getProductsByCategory(categoryId).then(products => {
    //         setProducts(products)    //     })    // }
  }, [categoryId]);

  if (loading) {
    return     <Alerta
    alerta={'Cargando Productos... no demoramos¡'}
  />;
  }

  return (
    <>
      <h2 className="text-center font-bold text-2xl mt-2 ">
        {` ${greeting} ${categoryId || ""} `}{" "}
      </h2>
      <div className="">
      <ItemList products={products} />
      </div>
     
    </>
  );
};

export default ItemListContainer;
