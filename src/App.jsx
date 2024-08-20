import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { Home } from "./pages/Home";
import { SobreNos } from "./pages/SobreNos";
import { Compra } from "./pages/Compra";
import { Saiba } from "./pages/Saiba";


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
  },

  {
    path: "/comprar", // Nova rota
    element: <Compra /> // Novo componente
  },

  {
    path: "/saiba-mais", // Nova rota
    element: <Saiba /> // Novo componente
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
