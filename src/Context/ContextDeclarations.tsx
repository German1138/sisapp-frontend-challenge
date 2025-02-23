import { CartContext, ProductsContext } from "./contexts";
import { IContextProvider, IProduct } from "../interfaces";
import { useEffect, useState } from "react";

const loadInitialData = async () => {
  const url = "https://fakestoreapi.com/products";
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    return json;
  } catch (error) {
    console.error(error);
  }
};

const products = await loadInitialData();

export function ProductsContextProvider({ children }: IContextProvider) {
  return (
    <ProductsContext.Provider value={products}>
      {children}
    </ProductsContext.Provider>
  );
}

export function CartContextProvider({ children }: IContextProvider) {
  const [cart, setCart] = useState<IProduct[]>(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default ProductsContext;
