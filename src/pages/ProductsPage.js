import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ProductCard } from "../components/ProductCard";

const pageTitleStyling = {
  backgroundColor: "#002233",
  color: "#eef1c4",
};

export const ProductsPage = ({ productList }) => {
  return (
    <div>
      <h1>Ürünler</h1>
      <hr />
      <div className="products-container">
        {
          // todo: burada her bir ürün için ürün kartı oluştur
          productList.map((product) => (
            <ProductCard product={product} />
          ))
        }
      </div>
    </div>
  );
};
