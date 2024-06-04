// External Libraries
import axios from "axios";

// Internal Libraries
import { useEffect, useState } from "react";
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
import { Redirect, useLocation } from "react-router-dom";

function App() {
  const [productList, setProductList] = useState([]);

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

    // Auto Login
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("https://workintech-fe-ecommerce.onrender.com/verify", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("Oto Login Res >>>> ", res.data);
          toast.success(
            res.data.name + " kullanıcısı ile otomatik giriş yapıldı!"
          );
          localStorage.setItem("token", res.data.token);
        })
        .catch((err) => {
          localStorage.removeItem("token");
        });
    }
  }, []);

  // JSX : Java Script Expression
  return (
    <div className="main">
      <Header />
      <div className="page-content">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route
            path="/counter"
            exact
            render={() => {
              const token = localStorage.getItem("token");
              if (token) {
                // login olduysa
                return <CounterPage />;
              }

              return (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: {
                      referrer: "/counter",
                    },
                  }}
                />
              );
            }}
          ></Route>
          <Route path="/register" exact>
            <UserRegisterPage />
          </Route>
          <Route path="/products" exact>
            <ProductsPage productList={productList} exact />
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
  );
}

export default App;
