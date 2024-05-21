import React, { FC } from "react";

export enum IconType {
  SEARCH = "search",
  ChevronDown = "chevrondown",
  NEXT_ARROW = "nextarrow",
  BACK_ARROW = "backarrow",
  FIRST_PAGE = "firstpage",
  LAST_PAGE = "lastpage",
}

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  iconType: IconType;
  size?: number;
  disabled?: boolean;
}

const SvgIcon: FC<SvgIconProps> = ({
  iconType,
  size = 24,
  disabled = false,
  ...rest
}) => {
  const iconMap: Record<IconType, JSX.Element> = {
    [IconType.SEARCH]: (
      <svg
        {...rest}
        style={{ pointerEvents: disabled ? "none" : "auto" }}
        height={size || 16}
        width={size || 16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 6.5C11.5 4.71875 10.5312 3.09375 9 2.1875C7.4375 1.28125 5.53125 1.28125 4 2.1875C2.4375 3.09375 1.5 4.71875 1.5 6.5C1.5 8.3125 2.4375 9.9375 4 10.8438C5.53125 11.75 7.4375 11.75 9 10.8438C10.5312 9.9375 11.5 8.3125 11.5 6.5ZM10.5312 11.625C9.40625 12.5 8 13 6.5 13C2.90625 13 0 10.0938 0 6.5C0 2.9375 2.90625 0 6.5 0C10.0625 0 13 2.9375 13 6.5C13 8.03125 12.4688 9.4375 11.5938 10.5625L15.4688 14.4375L16 14.9688L14.9375 16L14.4062 15.4688L10.5312 11.5938V11.625Z"
          fill={rest.fill || "var(--neutral-200, #9CA3AF)"}
        />
      </svg>
    ),
    [IconType.ChevronDown]: (
      <svg
        {...rest}
        style={{ pointerEvents: disabled ? "none" : "auto" }}
        width={rest.width || 20}
        height={rest.height || 20}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="Chevron down">
          <path
            id="Icon"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.29289 7.29289C5.68342 6.90237 6.31658 6.90237 6.7071 7.29289L9.99999 10.5858L13.2929 7.29289C13.6834 6.90237 14.3166 6.90237 14.7071 7.29289C15.0976 7.68342 15.0976 8.31658 14.7071 8.70711L10.7071 12.7071C10.3166 13.0976 9.68341 13.0976 9.29289 12.7071L5.29289 8.70711C4.90237 8.31658 4.90237 7.68342 5.29289 7.29289Z"
            fill={rest.fill || "var(--primary-50, #2AACE2)"}
          />
        </g>
      </svg>
    ),
    [IconType.NEXT_ARROW]: (
      <svg
        {...rest}
        style={{ pointerEvents: disabled ? "none" : "auto" }}
        width="20"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.5 9H9H4.5V11H9H10.5V12.5V14.4062L14.875 10L10.5 5.625V7.5V9ZM9 5.5V4H10.5H11L15.9375 8.96875L17 10L15.9375 11.0625L11 16H10.5H9V14.5V14V12.5H7.5H4.5H3V11V9V7.5H4.5H7.5H9V6V5.5Z"
          fill={rest?.fill || "var(--primary-300, #115873)"}
        />
      </svg>
    ),
    [IconType.BACK_ARROW]: (
      <svg
        {...rest}
        style={{ pointerEvents: disabled ? "none" : "auto" }}
        width="20"
        height="16"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.5 11H11H15.5V9H11H9.5V7.5V5.625L5.09375 10L9.5 14.4062V12.5V11ZM11 14.5V16H9.5H9L4.03125 11.0625L3 10L4.03125 8.96875L9 4H9.5H11V5.5V6V7.5H12.5H15.5H17V9V11V12.5H15.5H12.5H11V14V14.5Z"
          fill={rest?.fill || "var(--primary-300, #115873)"}
        />
      </svg>
    ),
    [IconType.FIRST_PAGE]: (
      <svg
        {...rest}
        style={{ pointerEvents: disabled ? "none" : "auto" }}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13 11H15.5V9H13H11.5V7.5V6.625L8.09375 10L11.5 13.4062V12.5V11H13ZM7.03125 11.0625L6 10L7.03125 8.96875L11 5H11.5H13V6V6.5V7.5H14.5H15.5H17V9V11V12.5H15.5H14.5H13V13.5V14V15H11.5H11L7.03125 11.0625ZM4.5 4.75V15.25V16H3V15.25V4.75V4H4.5V4.75Z"
          fill={rest?.fill || "var(--primary-300, #115873)"}
        />
      </svg>
    ),
    [IconType.LAST_PAGE]: (
      <svg
        {...rest}
        style={{ pointerEvents: disabled ? "none" : "auto" }}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 11H8.5V12.5V13.4062L11.875 10L8.5 6.625V7.5V9H7H4.5V11H7ZM12.9375 11.0625L9 15H8.5H7V14V13.5V12.5H5.5H4.5H3V11V9V7.5H4.5H5.5H7V6.5V6V5H8.5H9L12.9375 8.96875L14 10L12.9375 11.0625ZM15.5 4.75V4H17V4.75V15.25V16H15.5V15.25V4.75Z"
          fill={rest?.fill || "var(--primary-300, #115873)"}
        />
      </svg>
    ),
  };

  const iconSVG = iconMap[iconType];

  return iconSVG || null;
};

export default SvgIcon;
