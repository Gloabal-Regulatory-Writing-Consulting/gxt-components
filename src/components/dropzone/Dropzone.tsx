import { useDropzone } from "react-dropzone";
import { Button } from "../button";
import {
  DropzoneLabel,
  DropzoneMessage,
  DropzoneWrapper,
} from "./Dropzone.styles";

export type DropzoneProps = {
  onDrop?: (acceptedFiles: File[]) => void;
  maxFiles?: number;
  onError?: (message: string) => void;
  label?: string;
};

const Dropzone = ({ onDrop = () => {}, maxFiles = 10, onError = () => {}, label = '' }: DropzoneProps) => {
  const handleDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > maxFiles) {
      onError(`You can only upload ${maxFiles} files`);
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
            <DropzoneMessage>Drop here ...</DropzoneMessage>
          ) : (
            <>
              <DropzoneMessage>{ label || "Drag and Drop Files"}</DropzoneMessage>
              <Button variant="secondary">or Browse</Button>
            </>
          )}
        </DropzoneLabel>
      </DropzoneWrapper>
  );
};
export default Dropzone;
