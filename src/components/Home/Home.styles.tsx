import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  justify-content: center;
`;

export const SubContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1024px;
  padding: 100px 10px;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;
  }
`;
