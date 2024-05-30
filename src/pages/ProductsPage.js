import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ProductCard } from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductsThunkAction } from "../store/actions/globalActions";

const pageTitleStyling = {
  backgroundColor: "#002233",
  color: "#eef1c4",
};

export const ProductsPage = () => {
  const products = useSelector((s) => s.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products.length) {
      dispatch(fetchProductsThunkAction());
    }
  }, []);

  return (
    <div>
      <h1>Ürünler</h1>
      <hr />
      <div className="products-container">
        {
          // todo: burada her bir ürün için ürün kartı oluştur
          products.map((product) => (
            <ProductCard product={product} />
          ))
        }
      </div>
    </div>
  );
};
