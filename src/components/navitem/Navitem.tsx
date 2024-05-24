import { FC } from "react";
import {
  NavIcon,
  NavItemContainer,
  NavLinkStyled,
  NavText,
} from "./NavItemStyledComponents";

export interface INavItem {
  navigateTo: string;
  text: string;
  Icon?: React.ComponentType<any>;
  className?: string;
}

export interface NavItemProps extends INavItem {
  isExpanded: boolean;
  isLinkActive: (path: string) => boolean;
}

export interface IClientStyling {
  thumbnail: string;
  logo: string;
}

const Navitem: FC<NavItemProps> = ({
  navigateTo,
  text,
  Icon,
  isExpanded,
  isLinkActive,
}) => {
  const isLinkActivated = isLinkActive(navigateTo);

  return (
    <NavLinkStyled
      data-tooltip-id="navlink"
      data-tooltip-content={text}
      to={navigateTo}
      data-testid={text}
      end
    >
      <NavItemContainer isLinkActive={isLinkActivated}>
        <NavIcon>
          {Icon && (
            <Icon
              stroke={isLinkActivated && "var(--primary-200, #177BA6)"}
              fill={isLinkActivated && "var(--primary-200, #177BA6)"}
            ></Icon>
          )}
        </NavIcon>
        <NavText isExpanded={isExpanded} isActive={isLinkActivated}>
          {text}
        </NavText>
      </NavItemContainer>
    </NavLinkStyled>
  );
};

export default Navitem;
