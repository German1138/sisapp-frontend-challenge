import {
  Button,
  Container,
  Description,
  DetailImage,
  InfoContainer,
  MetadataContainer,
  MetadataSpan,
  NoProductContainer,
  Price,
  SubContainer,
} from "./ProductDetail.styles";

import { CartContext } from "../../Context/contexts";
import ProductsContext from "../../Context/ContextDeclarations";
import { useContext } from "react";
import { useParams } from "react-router";

function ProductDetail() {
  const products = useContext(ProductsContext);
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("There's no context");
  }
  const { cart, setCart } = context;

  const { id } = useParams();

  const product = products?.find((el) => el.id === Number(id));

  if (!product)
    return (
      <NoProductContainer>
        <h1>That product do not exist!</h1>
      </NoProductContainer>
    );

  return (
    <Container>
      <SubContainer>
        <DetailImage src={product.image} />

        <InfoContainer>
          <h1 style={{ fontSize: "26px" }}>{product.title}</h1>
          <Price>$ {product.price}</Price>

          <MetadataContainer>
            <MetadataSpan>Category: {product.category}</MetadataSpan>
            <MetadataSpan>Rating: {product.rating.rate}</MetadataSpan>
            <MetadataSpan>Stock: {product.rating.count} units</MetadataSpan>
          </MetadataContainer>

          <section>
            <h2 style={{ fontSize: "20px" }}>Description</h2>
            <Description>{product.description}</Description>
          </section>

          <Button
            onClick={() => {
              setCart([...cart, product]);
            }}
          >
            Add to cart
          </Button>
        </InfoContainer>
      </SubContainer>
    </Container>
  );
}

export default ProductDetail;
