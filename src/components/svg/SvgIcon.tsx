import React, { FC } from "react";

export enum IconType {
  SEARCH = "search",
  ChevronDown = "chevrondown",
  NEXT_ARROW = "nextarrow",
  BACK_ARROW = "backarrow",
  FIRST_PAGE = "firstpage",
  LAST_PAGE = "lastpage",
  SMILEYFACE = "smileyface",
  PENCIL = "pencil",
  ACCORDION_ARROW = "accordionarrow",
  ARROW_UP = "arrow-up",
  ARROW_DOWN = "arrow-down",
  dropdownOptions = "dropdownoptions",
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
    [IconType.SMILEYFACE]: (
      <svg
        {...rest}
        height={size}
        width={size}
        viewBox="0 0 16 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5 9C14.5 6.6875 13.25 4.5625 11.25 3.375C9.21875 2.21875 6.75 2.21875 4.75 3.375C2.71875 4.5625 1.5 6.6875 1.5 9C1.5 11.3438 2.71875 13.4688 4.75 14.6562C6.75 15.8125 9.21875 15.8125 11.25 14.6562C13.25 13.4688 14.5 11.3438 14.5 9ZM0 9C0 6.15625 1.5 3.53125 4 2.09375C6.46875 0.65625 9.5 0.65625 12 2.09375C14.4688 3.53125 16 6.15625 16 9C16 11.875 14.4688 14.5 12 15.9375C9.5 17.375 6.46875 17.375 4 15.9375C1.5 14.5 0 11.875 0 9ZM3.875 11.4375L5.125 10.5938C5.5 11.1562 6.59375 12 8 12C9.375 12 10.5 11.1562 10.875 10.5938L12.125 11.4375C11.5 12.375 9.90625 13.5 8 13.5C6.0625 13.5 4.5 12.375 3.875 11.4375ZM4.5 7.5C4.5 6.96875 4.9375 6.5 5.5 6.5C6.0625 6.5 6.5 6.96875 6.5 7.5C6.5 8.0625 6.0625 8.5 5.5 8.5C4.9375 8.5 4.5 8.0625 4.5 7.5ZM10.5 6.5C11.0625 6.5 11.5 6.96875 11.5 7.5C11.5 8.0625 11.0625 8.5 10.5 8.5C9.9375 8.5 9.5 8.0625 9.5 7.5C9.5 6.96875 9.9375 6.5 10.5 6.5Z"
          fill={rest.fill || "#000"}
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
    [IconType.dropdownOptions]: (
      <svg
        {...rest}
        width={rest.width || 20}
        height={rest.height || 20}
        viewBox="-2 -1 20 20"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        className="bi bi-three-dots-vertical"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          <path
            fill={rest.fill}
            d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"
          ></path>
        </g>
      </svg>
    ),
    [IconType.PENCIL]: (
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        className={rest?.className}
        height={size || "16"}
        width={size || "16"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"></path>
      </svg>
    ),
    [IconType.ACCORDION_ARROW]: (
      <svg
        {...rest}
        width="18"
        height="18"
        viewBox="0 0 20 20"
        fill={rest?.fill || "var(--neutral-200, #9CA3AF)"}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M10 4.96875L10.5312 5.5L16.5312 11.4688L17.0625 12L16 13.0625L15.4688 12.5312L10 7.0625L4.53125 12.5312L4 13.0625L2.9375 12L3.46875 11.4688L9.46875 5.46875L10 4.9375V4.96875Z" />
      </svg>
    ),
    [IconType.ARROW_UP]: (
      <svg
        {...rest}
        width="10"
        height="7"
        viewBox="0 0 10 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 6L5 0L10 6H0Z" fill="white" />
      </svg>
    ),
    [IconType.ARROW_DOWN]: (
      <svg
        {...rest}
        width="10"
        height="7"
        viewBox="0 0 10 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H10L5 6L0 0Z" fill="white" />
      </svg>
    ),
  };

  const iconSVG = iconMap[iconType];

  return iconSVG || null;
};

export default SvgIcon;
