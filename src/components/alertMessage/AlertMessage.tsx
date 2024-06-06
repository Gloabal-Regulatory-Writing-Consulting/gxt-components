import React, { useState } from "react";
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

export interface AlertMessageProps {
  alertMessage: string;
  alertLink?: string;
  linkText?: string;
  alertType: string;
  display: boolean;
}

export const AlertMessage: React.FC<AlertMessageProps> = ({
  alertMessage,
  alertLink,
  linkText,
  alertType = "positive",
  display = true,
}) => {
  const [displayAlert, setDisplayAlert] = useState(display);
  const handleCancelAlert = () => {
    setDisplayAlert(false);
  };

  return (
    <>
      {displayAlert && (
        <AlertMessageContainer $alertType={alertType}>
          <AccentBorder alertType={alertType}></AccentBorder>
          <ContentContainer>
            {alertType === "positive" ? (
              <CheckComponent color={getColor(alertType, 100)} />
            ) : (
              <WarningComponent color={getColor(alertType, 100)} />
            )}
            <MessageContainer>
              <Message alertType={alertType}>{alertMessage}</Message>
              {alertLink && (
                <AlertLink alertType={alertType} to={alertLink}>
                  {linkText}
                </AlertLink>
              )}
            </MessageContainer>
            <CancelComponent
              color={getColor(alertType, 100)}
              onClick={handleCancelAlert}
            />
          </ContentContainer>
        </AlertMessageContainer>
      )}
    </>
  );
};
AlertMessage.propTypes = {
  alertMessage: PropTypes.string.isRequired,
  alertLink: PropTypes.string,
  linkText: PropTypes.string,
  alertType: PropTypes.string.isRequired,
};

export default AlertMessage;
