import { useDropzone } from "react-dropzone";
import { Button } from "../button";
import {
  DropzoneLabel,
  DropzoneMessage,
  DropzoneWrapper,
} from "./DropzoneStyledComponents";

export type DropzoneProps = {
  onDrop?: (acceptedFiles: File[]) => void;
  maxFiles?: number;
};

const Dropzone = ({ onDrop = () => {}, maxFiles = 10 }: DropzoneProps) => {
  const handleDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > maxFiles) {
      alert(`You can only upload a maximum of ${maxFiles} files`);
      return;
    }
    onDrop(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: handleDrop,
  });

  return (
    <DropzoneWrapper {...getRootProps()} data-testid="dropzone">
      <input {...getInputProps()} />
      <DropzoneLabel>
        {isDragActive ? (
          <DropzoneMessage>Drop the files here ...</DropzoneMessage>
        ) : (
          <>
            <DropzoneMessage>{"Drag and Drop Files"}</DropzoneMessage>
            <Button variant="secondary">or Browse</Button>
          </>
        )}
      </DropzoneLabel>
    </DropzoneWrapper>
  );
};
export default Dropzone;
