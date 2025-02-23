import { Container, SubContainer } from "./Home.styles";

import Card from "../Card/Card";
import { IProduct } from "../../interfaces";
import ProductsContext from "../../Context/ContextDeclarations";
import { useContext } from "react";

function Home() {
  const products = useContext(ProductsContext);

  return (
    <Container>
      <SubContainer>
        {products.map((item: IProduct) => (
          <article key={item.id} role="article">
            <Card product={item} />
          </article>
        ))}
      </SubContainer>
    </Container>
  );
}

export default Home;
