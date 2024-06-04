import React, { FC } from "react";
import AlertMessage, { alertMessageProps } from "../AlertMessage";

const alertMessageExampleProps: alertMessageProps = {
  alertMessage: "Your changes have been saved successfully.",
  alertLink: "/details",
  linkText: "View details",
  alertType: "positive",
};

const AlertMessageExample: FC = () => {
  return (
    <div style={{ width: "50rem" }}>
      <h1>AlertMessage Example</h1>
      <AlertMessage
        alertMessage={alertMessageExampleProps.alertMessage}
        alertLink={alertMessageExampleProps.alertLink}
        linkText={alertMessageExampleProps.linkText}
        alertType={alertMessageExampleProps.alertType}
      />
    </div>
  );
};

export default AlertMessageExample;
