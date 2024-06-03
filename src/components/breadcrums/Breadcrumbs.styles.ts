import styled from "styled-components";

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

export const BreadcrumbLink = styled.a<{ active?: boolean }>`
  color: ${(props) => {
    return props?.active === true
      ? "var(--primary-300, #115873)"
      : "var(--neutral-200, #9CA3AF)";
  }};
  check: ${(props) => {
    return props.active ? 300 : 300;
  }};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: 0.019px;
  text-decoration: none;
`;

export const ChevronIcon = styled.span`
  display: flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
  color: var(--neutral-200, #9ca3af);
`;
