// External Libraries
import axios from "axios";

// Internal Libraries
import { createContext, useEffect, useState } from "react";
import { ProductsPage } from "./pages/ProductsPage";
import { Footer } from "./layout/Footer";

import { HomePage } from "./pages/HomePage";
import { CounterPage } from "./pages/CounterPage";
import { Route, Switch } from "react-router-dom";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { Header } from "./layout/Header";
import { UserRegisterPage } from "./pages/UserRegisterPage";
import { ToastContainer, toast } from "react-toastify";
import { LoginPage } from "./pages/LoginPage";

// Stylingler
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { useQuery } from "@tanstack/react-query";
import { TanStackProductsPage } from "./pages/TanStackProductsPage";
import { useLocalStorage } from "./hook/useLocalStorage";

export const myContext = createContext();

function App() {
  const [productList, setProductList] = useState([]);
  const [theme, setTheme] = useLocalStorage("theme", "light");

  const {
    data: blockquote = {},
    error,
    isPending,
  } = useQuery({
    queryKey: ["motivation"],
    queryFn: () =>
      axios
        .get("https://workintech-ng.onrender.com/motivation")
        .then((res) => res.data),
  });

  // sipariş state

  useEffect(() => {
    // todo: axios get req ile products datasını çek
    console.warn("***** UYGULAMA BAŞARIYLA YÜKLENDİ! *****");
    toast.success("Uygulama başarıyla yüklendi!");
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        setProductList(res.data);
        toast.success("Ürün datası başarıyla yüklendi!");
      })
      .catch((err) => {
        console.error("REQ HATA İlE SONUÇLANDI: ", err);
        toast.error(
          "Ürün datası yüklenirken bir hata ile karşılaşıldı: " + err.message
        );
      })
      .finally(() => {
        console.warn("REQUEST SONLANDI!");
      });
  }, []);

  // JSX : Java Script Expression
  return (
    <myContext.Provider value={{ theme, setTheme }}>
      <div className="main">
        <div>
          {blockquote.word}
          <br />
          {blockquote.author}
        </div>
        <Header />
        <div className="page-content">
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/counter" exact>
              <CounterPage />
            </Route>
            <Route path="/register" exact>
              <UserRegisterPage />
            </Route>
            <Route path="/products" exact>
              <ProductsPage productList={productList} exact />
            </Route>
            <Route path="/ts-products" exact>
              <TanStackProductsPage exact />
            </Route>
            <Route path="/product/detail/:productId" exact>
              <ProductDetailPage />
            </Route>
            <Route path="/login" exact>
              <LoginPage />
            </Route>
          </Switch>
        </div>
        <Footer />
        <ToastContainer position="bottom-center" />
      </div>
    </myContext.Provider>
  );
}

export default App;
