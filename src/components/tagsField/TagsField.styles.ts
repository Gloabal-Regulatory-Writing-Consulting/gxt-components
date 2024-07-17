import styled from "styled-components";

export const TagsFieldContainer = styled.div<{ disabled: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  min-height: 2.625rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  background-color: ${({ disabled }) =>
    disabled ? "var(--Neutral-50, #f9fafb)" : "gray"};
  border: 1px solid
    ${({ disabled }) =>
      disabled ? "var(--Neutral-100, #d0d7dd)" : "var(--Neutral-200, #9ca3af)"};
  background-color: ${({ disabled }) =>
    disabled ? "var(--Neutral-50, #f9fafb)" : "var(--System-50, #fff)"};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  position: relative;
  flex-wrap: wrap;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "default")};
`;
