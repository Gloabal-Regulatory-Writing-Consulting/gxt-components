import React, { FC } from "react";
import Dropzone, { DropzoneProps } from "../Dropzone";

const DropzoneExample: FC<DropzoneProps> = ({ onDrop, maxFiles }) => {
  return (
    <div style={{ width: "50rem", color: "#414141" }}>
      <Dropzone onDrop={onDrop} maxFiles={maxFiles} />
    </div>
  );
};
export default DropzoneExample;
