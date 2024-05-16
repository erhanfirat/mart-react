import { Link, useLocation } from "react-router-dom/cjs/react-router-dom";
import { MyButton } from "../components/MyButton";
import { useEffect, useState } from "react";

export const Header = () => {
  const [showNav, setShowNav] = useState(true);
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
        </nav>
      )}
      <MyButton
        id="toggle-theme"
        onClick={(e) => {
          console.log("Toggle Click!!!");
        }}
        title="Theme değerini değiştirmek için tıklayınız..."
        data-cy="toggle-btn"
        className="blue"
      >
        <i className="fa-solid fa-sun"></i>
        <span>Light </span>
        Theme
      </MyButton>
    </header>
  );
};
