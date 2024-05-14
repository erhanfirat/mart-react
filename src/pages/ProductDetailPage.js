import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const ProductDetailPage = () => {
  // URL delki :productId değerini nasıl yakalayabilirim?
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    console.warn("PRODUCT ID > ", productId);

    axios
      .get(
        "https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/" + productId
      )
      .then((res) => {
        console.log("productId get res > ", res.data);
        setProduct(res.data);
      });
  }, [productId]);

  return (
    <div>
      <h1>{product.name}</h1>
      <hr />
      <img src={product.img} />
      <p>{product.description}</p>
      <p>{product.price}</p>
    </div>
  );
};
