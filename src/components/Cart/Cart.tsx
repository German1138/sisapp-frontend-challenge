import {
  Button,
  Checkout,
  CheckoutData,
  CheckoutDataContainer,
  Container,
  NoProductsContainer,
  NoProductsSubContainer,
  ProductsContainer,
  SubContainer,
} from "./Cart.styles";
import { ICart, IProduct } from "../../interfaces";
import { useContext, useMemo } from "react";

import CartArticle from "./CartArticle";
import { CartContext } from "../../Context/contexts";

function Cart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("There's no context");
  }

  const { cart, setCart } = context;

  const filteredProducts = useMemo(() => {
    return cart.reduce((acc: ICart[], item: IProduct) => {
      const exist = acc.find((p) => p.product.id === item.id);
      if (exist) {
        exist.quantity += 1;
      } else {
        acc.push({ product: item, quantity: 1 });
      }
      return acc;
    }, []);
  }, [cart]);

  const totalPrice = useMemo(() => {
    return cart.reduce((acc, product) => acc + product.price, 0);
  }, [cart]);

  if (filteredProducts.length === 0) {
    return (
      <NoProductsContainer>
        <NoProductsSubContainer>
          <header>
            <h1>Your cart is empty!</h1>
          </header>
        </NoProductsSubContainer>
      </NoProductsContainer>
    );
  }

  return (
    <Container>
      <SubContainer>
        <ProductsContainer>
          {filteredProducts.map(({ product, quantity }: ICart) => {
            return (
              <CartArticle
                key={product.id}
                product={product}
                quantity={quantity}
              />
            );
          })}
        </ProductsContainer>

        <Checkout>
          <CheckoutDataContainer>
            <CheckoutData>
              <span>Products: </span>
              <span>{cart.length}</span>
            </CheckoutData>
            <CheckoutData>
              <span>Total: </span>
              <span>$ {totalPrice.toFixed(2)}</span>
            </CheckoutData>
          </CheckoutDataContainer>

          <Button
            onClick={() => {
              alert("Successful purchase 🎉");
              setCart([]);
            }}
          >
            Confirm purchase
          </Button>
        </Checkout>
      </SubContainer>
    </Container>
  );
}

export default Cart;
