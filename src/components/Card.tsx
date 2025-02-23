import {
  CardImage,
  Container,
  Price,
  SubContainer,
  Title,
} from "./Card.styles";

import { ICard } from "../interfaces";
import { Link } from "react-router";

function Card({ id, image, title, price }: ICard) {
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
