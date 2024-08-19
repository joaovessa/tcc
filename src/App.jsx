
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { ThemeProvider } from "styled-components"

import { Comprar } from "./pages/Comprar"
import { Saibamais } from "./pages/Saibamais"
import { Home } from "./pages/Home"
import { theme } from "./styles/theme.js"
import { GlobalStyle } from "./styles/global.js"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />, 
    element: <Saibamais/>,
    element: <Comprar/>
  }
])

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

