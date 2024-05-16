import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <div key={product.id} className="product-card">
      <img
        src={product.img + "?random=" + Math.round(Math.random() * 9999999)}
      />
      <h3>{product.name}</h3>
      <p className="product-desc">{product.description}</p>
      <p>{product.price}</p>
      <button className="btn orange">
        <i class="fa-solid fa-cart-plus"></i>
        Sepete Ekle
      </button>
      <Link className="btn blue" to={"/product/detail/" + product.id}>
        <i class="fa-solid fa-magnifying-glass"></i>
        İncele
      </Link>
    </div>
  );
};
