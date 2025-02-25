import { colors } from "../../theme.style";
import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1500;
  padding: 15px 0;
  background-color: ${colors.blue};
`;

export const Logo = styled.h1`
  font-size: 24px;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease;
  color: ${colors.white};
  &:hover {
    transform: scale(1.02);
  }
`;

export const CartLogo = styled.div`
  position: relative;
  transition: background-color 0.3s ease-in-out, transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Badge = styled.span`
  position: absolute;
  font-weight: 700;
  background-color: ${colors.red};
  color: ${colors.white};
  border-radius: 100%;
  width: 20px;
  height: 20px;
  font-size: 15px;
  text-align: center;
  line-height: 1.4;
  top: -3px;
  right: -6px;
`;
