import { colors } from "../../theme.style";
import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 15px;
  background-color: ${colors.blue};
`;

export const Badge = styled.span`
  position: absolute;
  font-weight: 700;
  background-color: ${colors.white};
  padding: 3px;
  border-radius: 100%;
  font-size: 8px;
  bottom: 0;
`;
