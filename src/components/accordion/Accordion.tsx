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
  onChangeCallback?: (searchTerm: string) => void;
  isAccordionOpen?: boolean;
}

interface AccordionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface AccordionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

const AccordionHeader = function HeaderComponent({
  children,
  ...rest
}: AccordionHeaderProps) {
  return <div {...rest}>{children}</div>;
};

const AccordionContent = function ContentComponent({
  children,
  ...rest
}: AccordionContentProps) {
  return <div {...rest}>{children}</div>;
};

const Accordion: React.FC<AccordionProps> & {
  Header: typeof AccordionHeader;
  Content: typeof AccordionContent;
} = ({
  children,
  isSearchAble = false,
  onChangeCallback = () => {},
  isAccordionOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(isAccordionOpen);
  const [{ header, content }, restChildren] = useSlots(children, {
    header: AccordionHeader,
    content: AccordionContent,
  });

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(isAccordionOpen);
  }, [isAccordionOpen]);

  return (
    <AccordionContainer>
      <Header onClick={handleToggle} $isSearchAble={isSearchAble}>
        {header}
        <AccordionIcon open={isOpen}>
          <SvgIcon iconType={IconType.ACCORDION_ARROW} />
        </AccordionIcon>
      </Header>
      <Content open={isOpen}>
        {isSearchAble && (
          <SearchBox>
            <Search onChangeCallback={onChangeCallback} width="100%" />
          </SearchBox>
        )}
        {content}
        {restChildren}
      </Content>
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
  onChangeCallback: PropTypes.func,
  isAccordionOpen: PropTypes.bool,
};
