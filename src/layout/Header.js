import { Link, useLocation } from "react-router-dom/cjs/react-router-dom";
import { MyButton } from "../components/MyButton";
import { useEffect, useState } from "react";
import { useLocalStorage } from "../hook/useLocalStorage";

export const Header = () => {
  const [showNav, setShowNav] = useState(true);
  const [theme, setTheme] = useLocalStorage("theme", "light");

  // const location = useLocation();

  // useEffect(() => {
  //   if (location.pathname === "/products") {
  //     setShowNav(true);
  //   } else {
  //     setShowNav(false);
  //   }
  // }, [location]);

  return (
    <header>
      <h1>Merhaba </h1>
      {showNav && (
        <nav>
          <Link to="/">Ana Sayfa</Link>
          <Link to="/counter">Sayaç</Link>
          <Link to="/products">Ürünler</Link>
          <Link to="/register">Kayıt</Link>
          <Link to="/login">Giriş</Link>
        </nav>
      )}
      <MyButton
        id="toggle-theme"
        onClick={(e) => {
          console.log("Toggle Click!!!");
          setTheme(theme === "light" ? "dark" : "light");
        }}
        title="Theme değerini değiştirmek için tıklayınız..."
        data-cy="toggle-btn"
        className="blue"
      >
        <i className="fa-solid fa-sun"></i>
        <span>{theme === "light" ? "Dark" : "Light"} </span>
        Theme
      </MyButton>
    </header>
  );
};
