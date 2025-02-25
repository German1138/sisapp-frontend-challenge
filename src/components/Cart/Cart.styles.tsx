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
  width: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  gap: 20px;
  width: 100%;
`;

export const Checkout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  background-color: ${colors.white};
  border-radius: 5px;
  padding: 15px;
  gap: 15px;
  box-sizing: border-box;
  max-height: 150px;

  @media (max-width: 768px) {
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
  }
`;

export const CheckoutDataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 50%;
  }

  @media (max-width: 425px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

export const CheckoutData = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  width: 100%;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }

  @media (max-width: 425px) {
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
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;

  @media (max-width: 320px) {
    font-size: 18px;
    padding: 0;
  }
  transition: background-color 0.3s ease-in-out, transform 0.2s ease;

  &:hover {
    background-color: ${colors.alt_red};
    transform: scale(1.02);
  }

  &:focus {
    outline: 2px solid ${colors.red};
  }
`;
