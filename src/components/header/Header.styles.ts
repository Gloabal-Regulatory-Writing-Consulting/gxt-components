import styled from "styled-components";

interface ContainerProps {
  hasBreadcrumbs: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  justify-content: space-between;
  padding: 40px 40px
    ${({ hasBreadcrumbs }) => (hasBreadcrumbs ? "20px" : "0px")} 40px;
`;

export const Heading = styled.h2`
  margin: 0;
  color: var(--primary_200, #177ba6);
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.048px;
`;

export const BreadcrumbsContainer = styled.div`
  margin-top: 0px;
  padding: 0px 40px 20px 40px;
`;

export const BreadcrumbsText = styled.div`
  margin-top: 2px;
  color: #666;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 12px;
  padding: 0px 0px 0px 40px;
  margin-top: 2px;
`;

export const MainContainer = styled.div`
  padding: 0rem;
  width: 100%;
`;
