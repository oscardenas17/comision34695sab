import  { useEffect, useState } from 'react'
import { getProductsById } from '../../asyncMock';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({});

    const { productId } = useParams()

    useEffect(() => {
        getProductsById(productId)
        .then(product => {
            setProduct(product);
        })
        .catch(error =>{console.log(error)} )
    }, [productId]);

  return (
    <div>
        <h1 className="text-center text-4xl mt-4">Detalle</h1>
        <ItemDetail {...product} />
    </div>
  )
}

export default ItemDetailContainer