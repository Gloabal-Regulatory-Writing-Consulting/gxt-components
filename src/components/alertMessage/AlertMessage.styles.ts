import styled from "styled-components";
import { NavLink } from "react-router-dom";

type ColorShade = 100 | 200;

export function getColor(type: string, shade: ColorShade): string {
  const colors: Record<string, Record<ColorShade, string>> = {
    positive: {
      100: "#059669",
      200: "#065F46",
    },
    negative: {
      100: "#EF4444",
      200: "#7F1D1D",
    },
    warning: {
      100: "#FAAE1A",
      200: "#C24700",
    },
  };

  if (colors[type] && colors[type][shade]) {
    return `var(--${type}-${shade}, ${colors[type][shade]})`;
  }
  return "";
}

export const AlertMessageContainer = styled.div<{
  $alertType: string;
}>`
  display: flex;
  width: 896px;
  align-items: center;
  border-radius: 6px;
  border: 1px solid
    ${(props) => {
      return getColor(props.$alertType, 100);
    }};
`;

export const AccentBorder = styled.div<{
  alertType: string;
}>`
  width: 4px;
  flex-shrink: 0;
  align-self: stretch;

  background: ${(props) => {
    return getColor(props.alertType, 100);
  }};
`;

export const ContentContainer = styled.div`
  display: flex;
  padding: 16px;
  align-items: center;
  gap: 12px;
  flex: 1 0 0;
`;

export const MessageContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
`;

export const Message = styled.div<{
  alertType: string;
}>`
  color: ${(props) => {
    return getColor(props.alertType, 200);
  }};
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.019px;
`;

export const AlertLink = styled(NavLink)<{
  alertType: string;
}>`
  flex: 1 0 0;
  color: ${(props) => {
    return getColor(props.alertType, 200);
  }};

  font-family: Mulish;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.019rem;
  text-decoration-line: underline;
`;
