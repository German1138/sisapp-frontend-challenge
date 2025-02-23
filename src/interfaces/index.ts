import { ReactNode } from "react";

export interface IProduct {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

export interface ICard {
  id: number;
  image: string;
  price: number;
  title: string;
}

export interface ICart {
  product: IProduct;
  quantity: number;
}

export interface IContextProvider {
  children: ReactNode;
}

export interface ICartContext {
  cart: IProduct[];
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
}
