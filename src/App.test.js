import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

test("Application loaded successfully!", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
