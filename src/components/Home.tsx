import { useContext, useEffect, useState } from "react";

import Card from "./Card";
import { IProduct } from "../interfaces";
import ProductsContext from "../Context/ContextDeclarations";

function Home() {
  const products = useContext(ProductsContext);

  const [items, setItems] = useState<IProduct[]>(products);

  useEffect(() => {
    setItems(products);
  }, [products]);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "30px",
          maxWidth: "1024px",
          padding: "50px 0px",
        }}
      >
        {items.map((item: IProduct) => (
          <Card
            id={item.id}
            image={item.image}
            title={item.title}
            price={item.price}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
