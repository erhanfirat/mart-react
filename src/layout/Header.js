import { Link, useLocation } from "react-router-dom/cjs/react-router-dom";
import { MyButton } from "../components/MyButton";
import { useContext, useEffect, useState } from "react";
import { useLocalStorage } from "../hook/useLocalStorage";
import { useSelector } from "react-redux";
import { myContext } from "../App";
import { UserContext } from "../context/UserContextProvider";

export const Header = () => {
  const [showNav, setShowNav] = useState(true);
  // const [theme, setTheme] = useLocalStorage("theme", "light");
  const title = useSelector((store) => store.title);
  const { userInfo } = useContext(UserContext);

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
      <h1>{title}</h1>
      {showNav && (
        <nav>
          <Link to="/">Ana Sayfa</Link>
          <Link to="/counter">Sayaç</Link>
          <Link to="/products">Ürünler</Link>
          <Link to="/ts-products">TS Ürünler</Link>
          <Link to="/register">Kayıt</Link>
          <Link to="/login">Giriş</Link>
        </nav>
      )}
      <div>
        <myContext.Consumer>
          {({ theme, setTheme }) => (
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
          )}
        </myContext.Consumer>
        <h3>{userInfo.name}</h3>
      </div>
    </header>
  );
};
