import { Badge, CartLogo, Logo, NavContainer } from "./NavBar.styles";
import { useContext, useMemo } from "react";

import { CartContext } from "../../Context/contexts";
import { Link } from "react-router";
import ShoppingCart from "../../assets/ShoppingCart";
import { colors } from "../../theme.style";

function NavBar() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("There's no context");
  }
  const { cart } = context;

  const cartItemCount = useMemo(() => cart.length, [cart]);

  return (
    <header>
      <NavContainer>
        <Link to="/" aria-label="Go to home">
          <Logo>SISAPP STORE</Logo>
        </Link>

        <Link to="/cart" aria-label="Go to cart">
          <CartLogo>
            <ShoppingCart color={colors.white} size={35} />
            {cartItemCount > 0 && <Badge>{cartItemCount}</Badge>}
          </CartLogo>
        </Link>
      </NavContainer>
    </header>
  );
}

export default NavBar;
