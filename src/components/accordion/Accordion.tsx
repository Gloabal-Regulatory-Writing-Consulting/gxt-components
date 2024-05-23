import React, { ReactNode, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Search } from "../search";
import { SvgIcon } from "../svg";
import { IconType } from "../svg/SvgIcon";
import { useSlots } from "../../utils/useSlots";

import {
  AccordionContainer,
  AccordionIcon,
  Content,
  Header,
  SearchBox,
} from "./accordion.styles";

export interface AccordionProps {
  children: ReactNode;
  isSearchAble?: boolean;
  isAccordionOpen?: boolean;
}

interface AccordionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  isSearchAble?: boolean;
  onChangeCallback?: () => void;
}

const AccordionHeader = function HeaderComponent({
  isOpen,
  children,
  onClick,
}: AccordionHeaderProps) {
  return (
    <Header onClick={onClick}>
      {children}
      <AccordionIcon $isOpen={!!isOpen}>
        <SvgIcon iconType={IconType.ACCORDION_ARROW} />
      </AccordionIcon>
    </Header>
  );
};

const AccordionContent = function ContentComponent({
  isOpen,
  isSearchAble,
  children,
  onChangeCallback = () => {},
  ...rest
}: AccordionContentProps) {
  return (
    <Content open={!!isOpen} {...rest}>
      {isSearchAble && (
        <SearchBox>
          <Search onChangeCallback={onChangeCallback} width="100%" />
        </SearchBox>
      )}
      {children}
    </Content>
  );
};

const Accordion: React.FC<AccordionProps> & {
  Header: typeof AccordionHeader;
  Content: typeof AccordionContent;
} = ({ children, isSearchAble = false, isAccordionOpen = true }) => {
  const [isOpen, setIsOpen] = useState(isAccordionOpen);

  const [{ HeaderSlot, ContentSlot }, restChildren] = useSlots(children, {
    HeaderSlot: AccordionHeader,
    ContentSlot: AccordionContent,
  });

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(isAccordionOpen);
  }, [isAccordionOpen]);

  return (
    <AccordionContainer>
      {HeaderSlot && <HeaderSlot isOpen={isOpen} onClick={handleToggle} />}
      {ContentSlot && (
        <ContentSlot isSearchAble={!!isSearchAble} isOpen={!!isOpen} />
      )}
      {restChildren}
    </AccordionContainer>
  );
};

Accordion.displayName = "Accordion";
Accordion.Header = AccordionHeader;
Accordion.Content = AccordionContent;

export default Accordion;

Accordion.propTypes = {
  children: PropTypes.node.isRequired,
  isSearchAble: PropTypes.bool,
  isAccordionOpen: PropTypes.bool,
};
