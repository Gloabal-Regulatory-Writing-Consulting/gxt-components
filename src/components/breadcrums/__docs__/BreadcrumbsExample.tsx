import React, { FC } from "react";
import Breadcrumbs, { breadcrumbsProps } from "../Breadcrumbs";
const breadCrumbList = [
  {
    label: "Catalog",
    link: "/",
    active: true,
  },
  {
    label: "View Complaint",
    link: "/1/view-complaint",
  },
];

const BreadcrumbsExample: FC<breadcrumbsProps> = ({
  items = breadCrumbList,
}) => {
  return (
    <div style={{ width: "50rem" }}>
      <h1>Breadcrumbs Example</h1>
      <Breadcrumbs items={items} />
    </div>
  );
};

export default BreadcrumbsExample;
