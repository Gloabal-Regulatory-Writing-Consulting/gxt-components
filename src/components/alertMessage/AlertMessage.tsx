import React, { useState } from "react";
import CheckIcon from "../../assets/icons/check.svg";
import WarningIcon from "../../assets/icons/warning.svg";
import { CancelButton, getColor } from "./AlertMessage.styles";

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
  linkText?: string;
  alertType?: "positive" | "negative" | "warning";
  display?: boolean;
  onLinkClick?: () => void;
  onClose?: () => void;
}

export const AlertMessage: React.FC<AlertMessageProps> = ({
  alertMessage,
  linkText,
  alertType = "positive",
  display = true,
  onLinkClick = () => {},
  onClose = () => {},
}) => {
  const [displayAlert, setDisplayAlert] = useState(display);
  const handleCancelAlert = () => {
    setDisplayAlert(false);
    onClose();
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
                fill={getColor(alertType, 100)}
              />
            ) : (
              <WarningIcon
                data-testid="icon-warning"
                width={20}
                height={20}
                fill={getColor(alertType, 100)}
              />
            )}
            <MessageContainer>
              <Message alertType={alertType}>{alertMessage}</Message>
              {linkText && (
                <AlertLink alertType={alertType} onClick={onLinkClick}>
                  {linkText}
                </AlertLink>
              )}
            </MessageContainer>
            <CancelButton
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

export default AlertMessage;
