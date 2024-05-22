import { FC } from "react";
import { useMatch } from "react-router-dom";
import {
  NavIcon,
  NavItemContainer,
  NavLinkStyled,
  NavText,
} from "./NavItemStyledComponents";

export interface NavItemProps {
  permission: string;
  text: string;
  Icon?: React.ComponentType<any>;
  className?: string;
  isExpanded: boolean;
}

export interface IClientStyling {
  thumbnail: string;
  logo: string;
}

const Navitem: FC<NavItemProps> = ({ permission, text, Icon, isExpanded }) => {
  const match = useMatch(`${permission}/*`);
  const isLinkActive = !!match;

  return (
    <NavLinkStyled
      data-tooltip-id="navlink"
      data-tooltip-content={text}
      to={permission}
      data-testid={text}
      end
    >
      <NavItemContainer isLinkActive={isLinkActive}>
        <NavIcon>
          {Icon && (
            <Icon
              stroke={isLinkActive && "var(--primary-200, #177BA6)"}
              fill={isLinkActive && "var(--primary-200, #177BA6)"}
            ></Icon>
          )}
        </NavIcon>
        <NavText isExpanded={isExpanded} isActive={isLinkActive}>
          {text}
        </NavText>
      </NavItemContainer>
    </NavLinkStyled>
  );
};

export default Navitem;
