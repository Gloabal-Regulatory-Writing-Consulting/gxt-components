export const WarningComponent = ({
  height,
  width,
  color,
}: {
  height?: string;
  width?: string;
  color?: string;
}) => (
  <svg
    data-testid="icon-warning"
    width={width || "20"}
    height={height || "20"}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.84375 15.5L9.125 4.53125L10 3L10.8438 4.53125L17.125 15.5L18 17H16.25H3.71875H2L2.84375 15.5ZM15.4062 15.5L10 6.03125L4.5625 15.5H15.4062ZM9.25 11.25V8.5H10.75V11.25V12H9.25V11.25ZM10.75 14.5H9.25V13H10.75V14.5Z"
      fill={color || "#000000"}
    />
  </svg>
);
