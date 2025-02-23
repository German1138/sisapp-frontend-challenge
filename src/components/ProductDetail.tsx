import { CartContext } from "../Context/contexts";
import ProductsContext from "../Context/ProductsContext";
import { colors } from "../theme.style";
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
      <div
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>That product do not exist!</h1>
      </div>
    );

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "100px 0",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "768px",
          borderRadius: "8px",
          backgroundColor: colors.white,
          padding: "20px",
          gap: "30px",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "30px",
          }}
        >
          <img
            src={product.image}
            style={{
              objectFit: "contain",
              width: "250px",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "30px",
            }}
          >
            <h1 style={{ fontSize: "26px", margin: "0" }}>{product.title}</h1>
            <span style={{ fontSize: "36px", fontWeight: "600" }}>
              $ {product.price}
            </span>

            <div
              style={{
                display: "flex",
                gap: "15px",
              }}
            >
              <label
                style={{
                  fontWeight: "600",
                  backgroundColor: colors.blue,
                  padding: "10px",
                  fontSize: "12px",
                  borderRadius: "10px",
                  color: colors.white,
                }}
              >
                Category: <span>{product.category}</span>
              </label>

              <label
                style={{
                  fontWeight: "600",
                  backgroundColor: colors.blue,
                  fontSize: "12px",
                  padding: "10px",
                  borderRadius: "10px",
                  color: colors.white,
                }}
              >
                Rating: <span>{product.rating.rate}</span>
              </label>

              <label
                style={{
                  fontWeight: "600",
                  backgroundColor: colors.blue,
                  padding: "10px",
                  fontSize: "12px",
                  borderRadius: "10px",
                  color: colors.white,
                }}
              >
                Availability: <span>{product.rating.count} units</span>
              </label>
            </div>

            <div style={{ borderBottom: "2px solid #D3D4D9" }}>
              <h3 style={{ margin: 0 }}>Description</h3>
              <p style={{ textAlign: "justify" }}>{product.description}.</p>
            </div>

            <div style={{ display: "flex", justifyContent: "right" }}>
              <button
                onClick={() => {
                  setCart([...cart, product]);
                  console.log(cart);
                }}
                style={{
                  backgroundColor: colors.red,
                  color: colors.white,
                  maxWidth: "250px",
                  width: "100%",
                  padding: "15px",
                  cursor: "pointer",
                  borderRadius: "8px",
                  fontSize: "24px",
                  fontWeight: "600",
                }}
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
