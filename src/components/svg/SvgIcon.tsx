import { FC } from "react";

export enum IconType {
  SEARCH = "search",
  ChevronDown = "chevrondown",
}

export interface SvgIconProps extends React.SVGProps<SVGSVGElement> {
  iconType: IconType;
  size?: number;
  className?: string;
}

const SvgIcon: FC<SvgIconProps> = ({
  iconType,
  size = 24,
  className = "",
  ...rest
}) => {
  const iconMap: Record<IconType, JSX.Element> = {
    [IconType.SEARCH]: (
      <svg
        {...rest}
        className={className}
        height={size || 16}
        width={size || 16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 6.5C11.5 4.71875 10.5312 3.09375 9 2.1875C7.4375 1.28125 5.53125 1.28125 4 2.1875C2.4375 3.09375 1.5 4.71875 1.5 6.5C1.5 8.3125 2.4375 9.9375 4 10.8438C5.53125 11.75 7.4375 11.75 9 10.8438C10.5312 9.9375 11.5 8.3125 11.5 6.5ZM10.5312 11.625C9.40625 12.5 8 13 6.5 13C2.90625 13 0 10.0938 0 6.5C0 2.9375 2.90625 0 6.5 0C10.0625 0 13 2.9375 13 6.5C13 8.03125 12.4688 9.4375 11.5938 10.5625L15.4688 14.4375L16 14.9688L14.9375 16L14.4062 15.4688L10.5312 11.5938V11.625Z"
          fill="#9CA3AF"
        />
      </svg>
    ),
    [IconType.ChevronDown]: (
      <svg
        {...rest}
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
            fill={rest.fill || "#2AACE2"}
          />
        </g>
      </svg>
    ),
  };

  const iconSVG = iconMap[iconType];

  return iconSVG || null;
};

export default SvgIcon;
