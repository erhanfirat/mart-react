// External Libraries
import axios from "axios";

// Internal Libraries
import { userName } from "./shared";
import { Counter } from "./components/Counter";
import { useEffect, useState } from "react";
import { ProductsPage } from "./pages/ProductsPage";
import { Footer } from "./layout/Footer";
import { MyButton } from "./components/MyButton";

// Stylingler
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HomePage } from "./pages/HomePage";
import { CounterPage } from "./pages/CounterPage";
import { Route, Switch, Link } from "react-router-dom";
import { ProductDetailPage } from "./pages/ProductDetailPage";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // todo: axios get req ile products datasını çek
    console.warn("***** UYGULAMA BAŞARIYLA YÜKLENDİ! *****");
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        setProductList(res.data);
      })
      .catch((err) => {
        console.error("REQ HATA İlE SONUÇLANDI: ", err);
      })
      .finally(() => {
        console.warn("REQUEST SONLANDI!");
      });
  }, []);

  // JSX : Java Script Expression
  return (
    <div className="main">
      <header>
        <h1>Merhaba {userName}</h1>
        <nav>
          <Link to="/">Ana Sayfa</Link>
          <Link to="/counter">Sayaç</Link>
          <Link to="/products">Ürünler</Link>
        </nav>
        <MyButton
          id="toggle-theme"
          onClick={(e) => {
            console.log("Toggle Click!!!");
          }}
          title="Theme değerini değiştirmek için tıklayınız..."
          data-cy="toggle-btn"
          className="mavi"
        >
          <i class="fa-solid fa-sun"></i>
          <span>Light </span>
          Theme
        </MyButton>
      </header>
      <div className="page-content">
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/counter" exact>
            <CounterPage />
          </Route>
          <Route path="/products" exact>
            <ProductsPage productList={productList} exact />
          </Route>
          <Route path="/product/detail/:productId" exact>
            <ProductDetailPage exact />
          </Route>
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
