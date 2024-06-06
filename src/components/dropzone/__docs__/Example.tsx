import React, { FC } from "react";
import Dropzone, { DropzoneProps } from "../Dropzone";

const DropzoneExample: FC<DropzoneProps> = ({
  onDrop,
  maxFiles,
  label,
  onError,
}) => {
  return (
    <div style={{ width: "50rem", color: "#414141" }}>
      <Dropzone
        onDrop={onDrop}
        maxFiles={maxFiles}
        label={label}
        onError={onError}
      />
    </div>
  );
};
export default DropzoneExample;
