import { CartContext, ProductsContext } from "./contexts";
import { IContextProvider, IProduct } from "../interfaces";
import { useEffect, useState } from "react";

export function ProductsContextProvider({ children }: IContextProvider) {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const loadInitialData = async () => {
      const url = "https://fakestoreapi.com/products";
      try {
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }

        const json = await response.json();

        setProducts(json);
      } catch (error) {
        console.error(error);
      }
    };

    loadInitialData();
  }, []);

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
