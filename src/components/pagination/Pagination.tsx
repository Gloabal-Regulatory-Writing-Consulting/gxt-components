import { FC } from "react";
import { Dropdown } from "../dropdown";
import styles from "./Pagination.module.css";
import ReactPaginate from "react-paginate";
import styled from "styled-components";
import { Position } from "../dropdown/Dropdown";
import NextArrowIcon from "../../assets/icons/next-arrow.svg";
import BackArrowIcon from "../../assets/icons/back-arrow.svg";
import FirstPageArrowIcon from "../../assets/icons/firstpage-arrow.svg";
import LastPageArrowIcon from "../../assets/icons/lastpage-arrow.svg";

export type PaginationProps = {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (value: number) => void;
  label?: string;
  handlePerPageChange: (value: number) => void;
  perPageOptions?: number[];
  width?: string;
};

const PaginationContainer = styled.div<{ width?: string }>`
  display: flex;
  padding: 0.5rem 1.5rem;
  width: ${(props) => props.width || "100%"};
  justify-content: space-between;
  align-items: stretch;
  border: 0.063rem solid var(--neutral-200, #9ca3af);
`;

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ItemsPagesWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  flex: 1 0 0;
`;

const PerPageContainer = styled.div`
  width: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const Label = styled.span`
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  letter-spacing: 0.00119rem;
  color: var(--neutral-400, #414141);
`;

const Pagination: FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  currentPage,
  label = "documents",
  perPageOptions = [10, 25, 50, 100],
  width = "100%",
  handlePerPageChange,
}) => {
  const lastPage = Math.ceil(totalItems / itemsPerPage) - 1;
  const isNextDisabled = currentPage === lastPage;
  const isPrevDisabled = currentPage === 0;

  const arrowFillColor = (isDisabled: boolean) =>
    isDisabled ? "var(--neutral-200, #9ca3af)" : "var(--primary-300, #115873)";

  return (
    <PaginationContainer width={width}>
      <ItemsPagesWrapper>
        <PaginationWrapper>
          <FirstPageArrowIcon
            width="20"
            height="20"
            onClick={() => onPageChange(0)}
            fill={arrowFillColor(isPrevDisabled)}
            style={{
              cursor: isPrevDisabled ? "not-allowed" : "pointer",
            }}
            data-testid="first-page-icon"
          />
          <ReactPaginate
            className={styles["paginated-box"]}
            breakLabel="..."
            nextLabel={
              <NextArrowIcon
                width="20"
                height="16"
                onClick={() => !isNextDisabled && onPageChange(currentPage + 1)}
                fill={arrowFillColor(isNextDisabled)}
                style={{
                  cursor: isNextDisabled ? "not-allowed" : "pointer",
                }}
                data-testid="next-page-icon"
              />
            }
            previousLabel={
              <BackArrowIcon
                width="20"
                height="16"
                onClick={() => !isPrevDisabled && onPageChange(currentPage - 1)}
                fill={arrowFillColor(isPrevDisabled)}
                style={{
                  cursor: isPrevDisabled ? "not-allowed" : "pointer",
                }}
                data-testid="previous-page-icon"
              />
            }
            pageRangeDisplayed={2}
            pageCount={Math.ceil(totalItems / itemsPerPage)}
            marginPagesDisplayed={1}
            activeClassName={styles["active-page"]}
            disabledClassName={styles["disable-page"]}
            pageClassName={styles["pages-count"]}
            onPageChange={(data) => onPageChange(data.selected)}
            previousClassName={styles["next-pre-btn"]}
            nextClassName={styles["next-pre-btn"]}
            forcePage={currentPage}
          />
          <LastPageArrowIcon
            width="20"
            height="20"
            onClick={() => onPageChange(lastPage)}
            fill={arrowFillColor(isNextDisabled)}
            style={{
              cursor: isNextDisabled ? "not-allowed" : "pointer",
            }}
            data-testid="last-page-icon"
          />
        </PaginationWrapper>
      </ItemsPagesWrapper>
      <PerPageContainer>
        <Dropdown
          options={perPageOptions.map((option) => ({
            value: option,
          }))}
          type="select"
          onSelect={(option) => handlePerPageChange(option.value)}
          renderOption={(option) => option?.value || ""}
          initialValue={{ value: itemsPerPage }}
          dropdownIcon={true}
          position={Position.Bottom}
        />
        <Label>{label} per page</Label>
      </PerPageContainer>
    </PaginationContainer>
  );
};

export default Pagination;
