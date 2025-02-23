import { ICartContext, IProduct } from "../interfaces";

import { createContext } from "react";

export const ProductsContext = createContext<IProduct[]>([]);

export const CartContext = createContext<ICartContext | undefined>(undefined);
