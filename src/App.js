// External Libraries
import axios from "axios";

// Internal Libraries
import { userName } from "./shared";
import { Counter } from "./components/Counter";
import { useEffect, useState } from "react";
import { ProductsPage } from "./pages/ProductsPage";

// Stylingler
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Footer } from "./layout/Footer";
import { MyButton } from "./components/MyButton";

function App() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    // todo: axios get req ile products datasını çek
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        console.log("REQ BAŞARIYLA SONUÇLANDI: ", res.data);
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
        <hr />
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
        <Counter initialCounter={50} unit={5} />
        <Counter initialCounter={100} unit={10} counterId={"c-100"} />
        <Counter counterId={"c-0"} />
        <hr />
        <ProductsPage productList={productList} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
