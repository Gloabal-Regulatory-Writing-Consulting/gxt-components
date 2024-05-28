import styled from "styled-components";

import SlideOver from "../slideOver/SlideOver";

export const SlideOverHeader = styled(SlideOver.Header)`
  background-color: var(--primary-50, #2aace2);
  height: 1.75rem;
  color: var(--system-50, #fff);
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 1.875rem */
  letter-spacing: 0.0015rem;
`;

export const SlideOverFooter = styled(SlideOver.Footer)`
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

export const SlideOverFooterRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;
