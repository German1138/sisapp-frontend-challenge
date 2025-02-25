import { colors } from "../../theme.style";
import styled from "styled-components";

export const Container = styled.article`
  border-radius: 5px;
  background-color: ${colors.white};
  padding: 15px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  height: 120px;
  align-items: flex-start;

  @media (max-width: 320px) {
    flex-direction: column;
    position: relative;
    height: auto;
    align-items: center;
  }
`;

export const ImageAndTitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  width: 100%;

  @media (max-width: 320px) {
    flex-direction: column;
    gap: 0px;
  }
`;

export const Image = styled.img`
  object-fit: contain;
  height: 120px;
  max-width: 75px;
  width: 100%;

  @media (max-width: 320px) {
    max-width: none;
  }
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
  margin-top: 20px;
  height: 90px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  -webkit-line-clamp: 4;
  text-overflow: ellipsis;

  @media (max-width: 425px) {
    font-size: 13px;
    height: 80px;
    -webkit-line-clamp: 5;
  }

  @media (max-width: 320px) {
    height: fit-content;
    -webkit-line-clamp: 5;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 20px;
  max-width: fit-content;
  width: 100%;
  justify-content: space-between;
  align-items: end;

  @media (max-width: 768px) {
    width: fit-content;
    justify-content: space-between;
  }

  @media (max-width: 320px) {
    align-items: center;
    height: auto;
    flex-direction: row-reverse;
  }
`;

export const StockContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 80px;
  border: 2px solid ${colors.blue};
  border-radius: 5px;
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
    transform: scale(1.02);
  }
`;

export const Price = styled.span`
  font-size: 24px;
  text-align: center;

  @media (max-width: 425px) {
    font-size: 18px;
    width: fit-content;
  }
`;

export const DeleteAllButton = styled.button`
  all: unset;
  cursor: pointer;
  width: 20px;
  height: 20px;
  text-align: center;
  font-weight: 600;
  background-color: ${colors.red};
  color: ${colors.white};
  border-radius: 50px;
  font-size: 13px;

  transition: background-color 150ms ease-in-out, transform 150ms ease;

  &:hover {
    background-color: ${colors.alt_red};
  }

  &:focus {
    outline: 2px solid ${colors.red};
  }

  @media (max-width: 320px) {
    position: absolute;
    top: 10px;
    right: 10px;
  }
`;
