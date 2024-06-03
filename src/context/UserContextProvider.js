import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  // context tanımları
  const [userInfo, setUserInfo] = useState({ name: "Anonim", email: null });
  const [language, setLanguage] = useState("tr");
  const [currency, setCurrency] = useState("TL");
  const [theme, setTheme] = useState("TL");

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        language,
        setLanguage,
        currency,
        setCurrency,
        theme,
        setTheme,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
