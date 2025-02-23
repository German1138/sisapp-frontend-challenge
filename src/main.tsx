import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";
import {
  CartContextProvider,
  ProductsContextProvider,
} from "./Context/ContextDeclarations";

import App from "./App";
import Cart from "./components/Cart";
import Layout from "./components/Layout";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartContextProvider>
      <ProductsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<App />} />
              <Route path=":id" element={<ProductDetail />} />
              <Route path="cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductsContextProvider>
    </CartContextProvider>
  </StrictMode>
);
