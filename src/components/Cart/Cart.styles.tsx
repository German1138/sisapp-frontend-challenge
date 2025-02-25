import { colors } from "../../theme.style";
import styled from "styled-components";

export const NoProductsContainer = styled.section`
  padding: 100px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NoProductsSubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  width: 100%;
`;
export const RecommendedProducts = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  padding: 100px 10px;
`;

export const SubContainer = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  gap: 20px;
`;

export const Checkout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 120px;
  background-color: ${colors.white};
  border-radius: 8px;
  padding: 15px;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const CheckoutDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media (max-width: 768px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 50%;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 50%;
  }
`;

export const CheckoutData = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 425px) {
    width: 100%;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  all: unset;
  text-align: center;
  background-color: ${colors.red};
  color: ${colors.white};
  max-width: 250px;
  padding: 5px 15px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;

  @media (max-width: 320px) {
    font-size: 18px;
    padding: 0;
  }
  transition: background-color 0.3s ease-in-out, transform 0.2s ease;

  &:hover {
    background-color: ${colors.alt_red};
    transform: scale(1.05);
  }

  &:focus {
    outline: 2px solid ${colors.red};
  }
`;
