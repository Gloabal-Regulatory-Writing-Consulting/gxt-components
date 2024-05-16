import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const Heading = styled.h1`
  color: var(--primary-200, #177ba6);
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.003rem;
  margin: 0;
`;

export const BreadcrumbsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: var(--primary-300, #115873);
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.5rem;
  letter-spacing: 0.00119rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 0px 0px 0px 40px;
  margin-top: 2px;
`;

export const MainContainer = styled.div`
  display: flex;
  padding: 2.5rem 2.5rem 1.25rem 2.5rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;
