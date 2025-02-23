import { CartContext } from "../Context/contexts";
import { Link } from "react-router";
import { colors } from "../theme.style";
import { useContext } from "react";

function NavBar() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("There's no context");
  }

  const { cart } = context;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        position: "fixed",
        width: "100%",
        padding: "10px",
        backgroundColor: colors.blue,
      }}
    >
      <Link to="/">
        <h3 style={{ margin: 0 }}>SISAPP STORE</h3>
      </Link>

      <input></input>

      <Link to="/cart">
        <div style={{ position: "relative" }}>
          <img src="src\assets\shopping-cart.svg" alt="shopping cart" />
          {cart.length > 0 && (
            <span
              style={{
                position: "absolute",
                right: -5,
                fontWeight: "700",
                backgroundColor: colors.white,
                padding: "3px",
                borderRadius: "100%",
                fontSize: "8px",
                bottom: 0,
              }}
            >
              {cart.length}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}

export default NavBar;
