export const CancelComponent = ({
  height,
  width,
  color,
  onClick = () => {},
}: {
  height?: string;
  width?: string;
  color?: string;
  onClick?: () => void;
}) => (
  <svg
    onClick={onClick}
    data-testid="icon-cancel"
    width={width || "12"}
    height={height || "12"}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.7812 2.28125L7.03125 6L10.75 9.71875L11.2812 10.25L10.25 11.3125L9.71875 10.7812L6 7.0625L2.28125 10.7812L1.75 11.3125L0.6875 10.25L1.21875 9.71875L4.9375 6L1.21875 2.28125L0.6875 1.75L1.75 0.6875L2.28125 1.21875L6 4.96875L9.71875 1.25L10.25 0.71875L11.3125 1.75L10.7812 2.28125Z"
      fill={color || "#000000"}
    />
  </svg>
);
