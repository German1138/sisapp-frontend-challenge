import {
  ButtonsContainer,
  Container,
  DeleteAllButton,
  Image,
  ImageAndTitleContainer,
  Price,
  StockButton,
  StockContainer,
  Title,
} from "./CartArticle.styles";
import { ICart, IProduct } from "../../interfaces";

import { CartContext } from "../../Context/contexts";
import { Link } from "react-router";
import { useContext } from "react";

function CartArticle({ product, quantity }: ICart) {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("There's no context");
  }

  const { cart, setCart } = context;

  const handleDelete = (id: number) => {
    setCart((prevCart: IProduct[]) => {
      const newCart = [...prevCart];
      const index = newCart.findIndex((item) => item.id === id);

      if (index !== -1) {
        newCart.splice(index, 1);
      }

      return newCart;
    });
  };

  const handleDeleteAll = (id: number) => {
    const isConfirmed = window.confirm(
      `Are you sure you want to remove ${quantity} items from your cart?`
    );
    if (isConfirmed) {
      setCart((prevCart) => prevCart.filter((product) => product.id !== id));
    }
  };

  return (
    <Container>
      <ImageAndTitleContainer>
        <Image src={product.image} alt={product.title} />

        <Link to={`/${product.id}`}>
          <Title>{product.title}</Title>
        </Link>
      </ImageAndTitleContainer>

      <ButtonsContainer>
        <StockContainer aria-live="polite">
          <StockButton
            onClick={() => handleDelete(product.id)}
            aria-label="Decrease quantity"
          >
            -
          </StockButton>
          <span>{quantity}</span>
          <StockButton
            onClick={() => setCart([...cart, product])}
            aria-label="Increase quantity"
          >
            +
          </StockButton>
        </StockContainer>

        <Price>${(product.price * quantity).toFixed(2)}</Price>

        <DeleteAllButton
          onClick={() => handleDeleteAll(product.id)}
          aria-label="Remove all items of this product"
        >
          X
        </DeleteAllButton>
      </ButtonsContainer>
    </Container>
  );
}

export default CartArticle;
