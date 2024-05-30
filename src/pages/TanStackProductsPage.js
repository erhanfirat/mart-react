import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { ProductCard } from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProductsThunkAction } from "../store/actions/globalActions";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const pageTitleStyling = {
  backgroundColor: "#002233",
  color: "#eef1c4",
};

export const TanStackProductsPage = () => {
  const [page, setPage] = useState(0);
  const limit = 20;
  const [pages, setPages] = useState([0]);

  const fetchProducts = (page, limit) =>
    axios
      .get("https://workintech-fe-ecommerce.onrender.com/products", {
        params: { offset: limit * page, limit },
      })
      .then((res) => res.data);

  const {
    isPending: productsLoading,
    error,
    data: { products, total } = { products: [], total: 0 },
  } = useQuery({
    queryKey: ["products", page, limit],
    queryFn: () => fetchProducts(page, limit),
  });

  useEffect(() => {
    setPages(Array.from(Array(parseInt(total / limit)).keys()));
  }, [total]);

  return (
    <div>
      <h1>Ürünler</h1>
      <hr />
      <div>
        <select value={page} onChange={(e) => setPage(e.target.value)}>
          {pages.map((p) => (
            <option value={p}>{p + 1}</option>
          ))}
        </select>
      </div>
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
