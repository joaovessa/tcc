import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Home } from "./pages/Home";
import { SobreNos } from "./pages/SobreNos"; // Nova página

import { theme } from "./styles/theme.js";
import { GlobalStyle } from "./styles/global.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },

  {
    path: "/sobre-nos", // Nova rota
    element: <SobreNos /> // Novo componente
  }
]);

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}
