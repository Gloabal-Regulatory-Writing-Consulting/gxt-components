import React from "react";
import PropTypes from "prop-types";
import ChevronRightIcon from "../../assets/icons/chevronright.svg";

import {
  BreadcrumbContainer,
  BreadcrumbItem,
  BreadcrumbLink,
} from "./Breadcrumbs.styles";

export interface breadcrumbItem {
  label: string;
  to: string;
}

export interface breadcrumbsProps {
  items: breadcrumbItem[];
  isLinkActive: (path: string) => boolean;
}

export const Breadcrumbs: React.FC<breadcrumbsProps> = ({
  items = [],
  isLinkActive,
}) => {
  const isLinkActivated = (navigateTo: string) => isLinkActive(navigateTo);

  return (
    <BreadcrumbContainer>
      {items.map((item, index) => (
        <>
          <BreadcrumbItem key={index}>
            <BreadcrumbLink to={item.to} active={isLinkActivated(item.to)}>
              {item.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
          {index < items.length - 1 && <ChevronRightIcon />}
        </>
      ))}
    </BreadcrumbContainer>
  );
};

Breadcrumbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      to: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default Breadcrumbs;
