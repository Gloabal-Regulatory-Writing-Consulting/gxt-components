import styled from "styled-components";

export const DropzoneWrapper = styled.div`
  width: 100%;
  height: fit-content;
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
  gap: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--Primary-200, #177ba6);
`;

export const DropzoneMessage = styled.p`
  margin-top: 1rem;
`;
