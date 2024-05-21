/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState } from "react";
import Pagination, { PaginationProps } from "../Pagination";

const PaginationExample: FC<PaginationProps> = ({
  totalItems,
  label,
  perPageOptions,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(10);

  const handlePerPageChange = (value: number) => {
    setPerPage(value);
    setCurrentPage(0);
  };

  return (
    <div style={{ width: "50rem" }}>
      <Pagination
        currentPage={currentPage}
        onPageChange={(value) => setCurrentPage(value)}
        itemsPerPage={perPage}
        totalItems={totalItems}
        label={label}
        perPageOptions={perPageOptions}
        handlePerPageChange={handlePerPageChange}
      />
    </div>
  );
};

export default PaginationExample;
