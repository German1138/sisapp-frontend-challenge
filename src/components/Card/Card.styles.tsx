import { colors } from "../../theme.style";
import styled from "styled-components";

export const Container = styled.div`
  border-radius: 8px;
  background-color: ${colors.white};
  padding: 15px;
  max-width: 250px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardImage = styled.img`
  object-fit: contain;
  width: 100%;
  height: 300px;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

export const Title = styled.h3`
  font-weight: 500;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 0;
`;

export const Price = styled.p`
  font-size: 24px;
  margin: 0;
`;
