import { colors } from "../../theme.style";
import styled from "styled-components";

export const NoProductContainer = styled.main`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 100px 20px;
`;

export const SubContainer = styled.article`
  display: flex;
  max-width: 768px;
  border-radius: 5px;
  background-color: ${colors.white};
  padding: 20px;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DetailImage = styled.img`
  object-fit: contain;
  max-width: 250px;

  @media (max-width: 768px) {
    align-self: center;
  }
`;

export const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
`;

export const Title = styled.h1`
  font-size: 26px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Price = styled.p`
  font-size: 36px;
  font-weight: 600;
  margin: 0;
`;

export const MetadataContainer = styled.dl`
  display: flex;
  gap: 5px;
  margin: 0;
  flex-wrap: wrap;
`;

export const MetadataSpan = styled.span`
  font-weight: 600;
  background-color: ${colors.blue};
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 50px;
  height: 15px;
  width: fit-content;
  color: ${colors.white};
`;

export const Description = styled.p`
  text-align: justify;
  padding-bottom: 16px;
  margin-bottom: 0;
  border-bottom: 2px solid ${colors.grey};
`;

export const Button = styled.button`
  all: unset;
  text-align: center;
  background-color: ${colors.red};
  color: ${colors.white};
  padding: 15px;
  cursor: pointer;
  border-radius: 5px;
  font-size: 20px;
  max-width: 250px;
  font-weight: 600;
  width: 100%;
  align-self: self-end;

  transition: background-color 150ms ease-in-out, transform 150ms ease;

  &:hover {
    background-color: ${colors.alt_red};
    transform: scale(1.01);
  }

  &:focus {
    outline: 2px solid ${colors.black};
  }

  @media (max-width: 768px) {
    align-self: center;
    max-width: none;
    box-sizing: border-box;
  }
`;
