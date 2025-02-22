import "./App.css";

import { useEffect, useState } from "react";

const loadInitialData = async (
  setItems: React.Dispatch<React.SetStateAction<IClothes[]>>
) => {
  const url = "https://fakestoreapi.com/products";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    setItems(json);
  } catch (error) {
    console.error(error.message);
  }
};

interface IClothes {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}

function App() {
  const [items, setItems] = useState<IClothes[]>([]);

  useEffect(() => {
    loadInitialData(setItems);
  }, []);

  console.log(items, typeof items);

  return (
    <>
      <div>
        {items.map((item: IClothes) => (
          <div>{item.title}</div>
        ))}
      </div>
    </>
  );
}

export default App;
