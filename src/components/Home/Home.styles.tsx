import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
`;

export const SubContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  max-width: 1024px;
  padding: 100px 10px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 5px;
  }
`;
