import styled from "styled-components";

export const DropzoneWrapper = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid var(--primary-50, #2aace2);
  background: var(--neutral-50, #f9fafb);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.25rem;
`;

export const DropzoneLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--primary-200, #177ba6);
`;

export const DropzoneMessage = styled.p``;
