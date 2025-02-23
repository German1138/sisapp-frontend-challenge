import { Badge, NavContainer } from "./NavBar.styles";

import { CartContext } from "../Context/contexts";
import { Link } from "react-router";
import { useContext } from "react";

function NavBar() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("There's no context");
  }

  const { cart } = context;

  return (
    <header>
      <NavContainer>
        <Link to="/">
          <h1 style={{ fontSize: "24px" }}>SISAPP STORE</h1>
        </Link>

        <form role="search">
          <input type="text" placeholder="Search..." aria-label="Search" />
          <button type="submit">🔍</button>
        </form>

        <Link to="/cart">
          <div style={{ position: "relative" }}>
            <img src="src\assets\shopping-cart.svg" alt="shopping cart" />
            {cart.length > 0 && <Badge>{cart.length}</Badge>}
          </div>
        </Link>
      </NavContainer>
    </header>
  );
}

export default NavBar;
