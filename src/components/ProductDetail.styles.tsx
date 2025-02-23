import { colors } from "../theme.style";
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
  margin: 100px 0;
`;

export const SubContainer = styled.article`
  display: flex;
  max-width: 768px;
  border-radius: 8px;
  background-color: ${colors.white};
  padding: 20px;
  gap: 30px;
`;

export const DetailImage = styled.img`
  object-fit: contain;
  max-width: 250px;
`;

export const InfoContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
`;

export const Price = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin: 0;
`;

export const MetadataContainer = styled.dl`
  display: flex;
  gap: 15px;
  margin: 0;
`;

export const MetadataSpan = styled.span`
  font-weight: 600;
  background-color: ${colors.blue};
  padding: 10px;
  font-size: 12px;
  border-radius: 10px;
  color: ${colors.white};
`;

export const Description = styled.p`
  text-align: justify;
  padding-bottom: 16px;
  margin-bottom: 0;
  border-bottom: 2px solid ${colors.grey};
`;

export const Button = styled.button`
  background-color: ${colors.red};
  color: ${colors.white};
  padding: 15px;
  cursor: pointer;
  border-radius: 8px;
  font-size: 24px;
  max-width: 250px;
  font-weight: 600;
  width: 100%;
  align-self: self-end;
`;
