import {
  CardImage,
  Container,
  Price,
  SubContainer,
  Title,
} from "./Card.styles";

import { IProduct } from "../interfaces";
import { Link } from "react-router";

function Card({ product }: { product: IProduct }) {
  const { id, image, title, price } = product;

  return (
    <Link to={`/${id}`}>
      <Container>
        <CardImage src={image} alt={title} />

        <SubContainer>
          <Title>{title}</Title>
          <Price>$ {price}</Price>
        </SubContainer>
      </Container>
    </Link>
  );
}

export default Card;
