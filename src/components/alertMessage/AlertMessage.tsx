import React, { useState } from "react";
import PropTypes from "prop-types";
import CancelIcon from "../../assets/icons/cancel.svg"
import CheckIcon from "../../assets/icons/check.svg"
import WarningIcon from "../../assets/icons/warning.svg"
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
              <CheckIcon
                data-testid="icon-check-mark"
                width={16}
                height={16}
                fill={getColor(alertType, 100)} />
            ) : (
              <WarningIcon
                data-testid="icon-warning"
                width={20}
                height={20}
                fill={getColor(alertType, 100)} />
            )}
            <MessageContainer>
              <Message alertType={alertType}>{alertMessage}</Message>
              {alertLink && (
                <AlertLink alertType={alertType} to={alertLink}>
                  {linkText}
                </AlertLink>
              )}
            </MessageContainer>
            <CancelIcon
              data-testid="icon-cancel"
              width={11}
              height={11}
              fill={getColor(alertType, 100)}
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
