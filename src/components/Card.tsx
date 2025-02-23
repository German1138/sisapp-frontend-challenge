import { ICard } from "../interfaces";
import { Link } from "react-router";
import { colors } from "../theme.style";

function Card({ id, image, title, price }: ICard) {
  return (
    <Link to={`/${id}`}>
      <div
        style={{
          borderRadius: "8px",
          backgroundColor: colors.white,
          padding: "15px",
          maxWidth: "250px",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <img
          src={image}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "300px",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: "10px",
          }}
        >
          <p
            style={{
              fontSize: "14px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              margin: "0",
            }}
          >
            {title}
          </p>
          <span style={{ fontSize: "24px" }}>$ {price}</span>
        </div>
      </div>
    </Link>
  );
}

export default Card;
