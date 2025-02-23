import { CartContext, ProductsContext } from "../../Context/contexts";
import { ICart, IProduct } from "../../interfaces";

import Card from "../Card/Card";
import { Link } from "react-router";
import { colors } from "../../theme.style";
import { useContext } from "react";

function Cart() {
  const products = useContext(ProductsContext);
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("There's no context");
  }

  const { cart, setCart } = context;

  const filteredProducts = cart.reduce((acc: ICart[], item: IProduct) => {
    const exist = acc.find((p) => p.product.id === item.id);

    if (exist) {
      exist.quantity += 1;
    } else {
      acc.push({ product: item, quantity: 1 });
    }

    return acc;
  }, []);

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
    setCart(() => {
      const newCart = cart.filter((product: IProduct) => {
        return product.id !== id;
      });
      return newCart;
    });
  };

  const totalPrice = cart.reduce(
    (acc: number, product: IProduct) => acc + product.price,
    0
  );

  if (filteredProducts.length === 0) {
    return (
      <div
        style={{
          padding: "100px 0px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "1024px",
            width: "100%",
          }}
        >
          <h1>Your cart is empty!</h1>
          <div>
            <h3>Recommended products</h3>
            <div style={{ display: "flex", gap: "20px" }}>
              {products.splice(0, 5).map((item: IProduct) => (
                <Card product={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "100px 0px",
        gap: "30px",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "768px",
          width: "100%",
          gap: "20px",
        }}
      >
        {filteredProducts.map(({ product, quantity }: ICart) => {
          return (
            <div
              key={product.id}
              style={{
                borderRadius: "8px",
                backgroundColor: colors.white,
                padding: "15px",
                display: "flex",
                gap: "30px",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ width: "100px", maxWidth: "200px" }}>
                <img
                  src={product.image}
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100px",
                  }}
                />
              </div>

              <div style={{ width: "100%", maxWidth: "500px" }}>
                <Link to={`/${product.id}`}>
                  <p
                    style={{
                      fontSize: "18px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      textWrap: "nowrap",
                    }}
                  >
                    {product.title}
                  </p>
                </Link>
              </div>

              <div style={{ maxWidth: "100px", width: "100%" }}>
                <button onClick={() => handleDelete(product.id)}>-</button>
                <span>{quantity}</span>
                <button onClick={() => setCart([...cart, product])}>+</button>
              </div>

              <span style={{ fontSize: "24px" }}>
                ${(product.price * quantity).toFixed(2)}
              </span>

              <button onClick={() => handleDeleteAll(product.id)}>X</button>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          backgroundColor: colors.white,
          height: "150px",
          borderRadius: "8px",
          padding: "15px",
          gap: "30px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <label>
            Products:
            <span style={{ fontWeight: 400, fontSize: "20px" }}>
              {cart.length}
            </span>
          </label>
          <label>
            Total: $
            <span style={{ fontWeight: 400, fontSize: "20px" }}>
              {totalPrice.toFixed(2)}
            </span>
          </label>
        </div>
        <button
          onClick={() => {
            setCart([]);
          }}
          style={{
            backgroundColor: colors.red,
            color: colors.white,
            maxWidth: "250px",
            width: "100%",
            padding: "15px",
            cursor: "pointer",
            borderRadius: "8px",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          Confirm purchase
        </button>
      </div>
    </div>
  );
}

export default Cart;
