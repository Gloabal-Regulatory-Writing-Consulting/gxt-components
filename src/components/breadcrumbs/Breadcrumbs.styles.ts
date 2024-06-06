import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const BreadcrumbContainer = styled.nav`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  border-radius: 6px;
`;

export const BreadcrumbItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: "var(--neutral-200, #9CA3AF)";
`;

export const BreadcrumbLink = styled(NavLink)<{ active?: boolean }>`
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.019px;
  text-decoration: none;
  color: ${(props) => {
    return props?.active === true
      ? "var(--primary-300, #115873)"
      : "var(--neutral-200, #9CA3AF)";
  }};
`;
