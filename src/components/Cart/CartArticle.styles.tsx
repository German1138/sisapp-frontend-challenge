import { colors } from "../../theme.style";
import styled from "styled-components";

export const Container = styled.article`
  border-radius: 8px;
  background-color: ${colors.white};
  padding: 15px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  height: 120px;
`;

export const Image = styled.img`
  object-fit: contain;
  height: 120px;
  max-width: 75px;
  width: 100%;
`;

export const SubContainer = styled.article`
  display: flex;
  width: 100%;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 425px) {
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
`;

export const Title = styled.p`
  font-size: 18px;
  overflow: hidden;
  max-width: 500px;
  margin: 0;

  @media (max-width: 425px) {
    font-size: 15px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  max-width: 280px;
  width: 100%;
  justify-content: space-between;

  @media (max-width: 425px) {
    width: fit-content;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 80px;
  border: 2px solid ${colors.blue};
  border-radius: 8px;
  align-items: center;
`;

export const StockButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 0px 10px;
  font-weight: 600;
  height: fit-content;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease;

  &:hover {
    color: ${colors.blue};
    transform: scale(1.05);
  }
`;

export const Price = styled.span`
  font-size: 24px;
  width: 115px;
  text-align: center;

  @media (max-width: 425px) {
    font-size: 18px;
    width: fit-content;
  }
`;

export const DeleteAllButton = styled.button`
  all: unset;
  cursor: pointer;
  padding: 5px 10px;
  font-weight: 600;
  background-color: ${colors.red};
  color: ${colors.white};
  border-radius: 8px;
  width: fit-content;

  transition: background-color 0.3s ease-in-out, transform 0.2s ease;

  &:hover {
    background-color: ${colors.alt_red};
    transform: scale(1.05);
  }

  &:focus {
    outline: 2px solid ${colors.red};
  }
`;
