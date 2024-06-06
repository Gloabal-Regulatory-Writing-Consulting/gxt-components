export const CheckComponent = ({
  height,
  width,
  color,
}: {
  height?: string;
  width?: string;
  color?: string;
}) => (
  <svg
    data-testid="icon-check-mark"
    width={width || "20"}
    height={height || "20"}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 6.0625L16.4688 6.59375L8.53125 14.5L8 15.0312L7.46875 14.5L3.53125 10.5625L3 10.0312L4.03125 8.96875L4.5625 9.5L8 12.9062L15.4062 5.53125L15.9375 5L17 6.0625Z"
      fill={color || "#000000"}
    />
  </svg>
);
