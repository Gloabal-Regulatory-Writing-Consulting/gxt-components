import React from "react";
import PropTypes from "prop-types";
import { CheckComponent } from "./CheckComponent";
import { CancelComponent } from "./CancelComponent";
import { WarningComponent } from "./WarningComponent";

import { getColor } from "./AlertMessage.styles";

import {
  AlertMessageContainer,
  AccentBorder,
  ContentContainer,
  MessageContainer,
  Message,
  AlertLink,
} from "./AlertMessage.styles";

export interface alertMessageProps {
  alertMessage: string;
  alertLink: string;
  linkText: string;
  alertType: string;
}

export const AlertMessage: React.FC<alertMessageProps> = ({
  alertMessage,
  alertLink,
  linkText,
  alertType = "positive",
}) => {
  return (
    <AlertMessageContainer alertType={alertType}>
      <AccentBorder alertType={alertType}></AccentBorder>
      <ContentContainer>
        {alertType === "positive" ? (
          <CheckComponent color={getColor(alertType, 100)} />
        ) : (
          <WarningComponent color={getColor(alertType, 100)} />
        )}
        <MessageContainer>
          <Message alertType={alertType}>{alertMessage}</Message>
          <AlertLink alertType={alertType} href={alertLink}>
            {linkText}
          </AlertLink>
        </MessageContainer>
        <CancelComponent color={getColor(alertType, 100)} />
      </ContentContainer>
    </AlertMessageContainer>
  );
};

AlertMessage.propTypes = {
  alertMessage: PropTypes.string.isRequired,
  alertLink: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  alertType: PropTypes.string.isRequired,
};

export default AlertMessage;
