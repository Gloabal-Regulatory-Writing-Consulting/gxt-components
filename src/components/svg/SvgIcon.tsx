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
        className={className}
        height={size || 16}
        width={size || 10}
        viewBox="0 0 10 16"
        fill="#2AACE2"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z"
        />
      </svg>
    ),
  };

  const iconSVG = iconMap[iconType];

  return iconSVG || null;
};

export default SvgIcon;