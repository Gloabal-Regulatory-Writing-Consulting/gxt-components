import React from "react";
import PropTypes from "prop-types";
import { SvgIcon } from "../svg";
import { IconType } from "../svg/SvgIcon";

import {
  BreadcrumbContainer,
  BreadcrumbItem,
  BreadcrumbLink,
  ChevronIcon,
} from "./Breadcrumbs.styles";

export interface breadcrumbItem {
  label: string;
  link: string;
  active?: boolean;
}

export interface breadcrumbsProps {
  items: breadcrumbItem[];
}

export const Breadcrumbs: React.FC<breadcrumbsProps> = ({ items = [] }) => {
  return (
    <BreadcrumbContainer>
      {items.map((item, index) => (
        <>
          <BreadcrumbItem key={index}>
            <BreadcrumbLink href={item.link} active={item.active}>
              {item.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
          {index < items.length - 1 && (
            <ChevronIcon data-testid="chevron-icon">
              <SvgIcon iconType={IconType.ChevronRight} />
            </ChevronIcon>
          )}
        </>
      ))}
    </BreadcrumbContainer>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Breadcrumbs;
