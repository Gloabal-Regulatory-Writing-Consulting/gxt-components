import { FC } from "react";
import { SvgIcon } from "../svg";
import { IconType } from "../svg/SvgIcon";
import { Dropdown } from "../dropdown";
import styles from "./Pagination.module.css";
import ReactPaginate from "react-paginate";
import styled from "styled-components";

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

const StyledSvgIcon = styled(SvgIcon)<{ disabled?: boolean }>`
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
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
          <StyledSvgIcon
            iconType={IconType.FIRST_PAGE}
            onClick={() => onPageChange(0)}
            fill={arrowFillColor(isPrevDisabled)}
            disabled={isPrevDisabled}
            data-testid="first-page-icon"
          />
          <ReactPaginate
            className={styles["paginated-box"]}
            breakLabel="..."
            nextLabel={
              <StyledSvgIcon
                iconType={IconType.NEXT_ARROW}
                onClick={() => !isNextDisabled && onPageChange(currentPage + 1)}
                fill={arrowFillColor(isNextDisabled)}
                disabled={isNextDisabled}
                data-testid="next-page-icon"
              />
            }
            previousLabel={
              <StyledSvgIcon
                iconType={IconType.BACK_ARROW}
                onClick={() => !isPrevDisabled && onPageChange(currentPage - 1)}
                fill={arrowFillColor(isPrevDisabled)}
                disabled={isPrevDisabled}
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
          <StyledSvgIcon
            iconType={IconType.LAST_PAGE}
            onClick={() => onPageChange(lastPage)}
            fill={arrowFillColor(isNextDisabled)}
            disabled={isNextDisabled}
            data-testid="last-page-icon"
          />
        </PaginationWrapper>
      </ItemsPagesWrapper>
      <PerPageContainer>
        <Dropdown
          options={perPageOptions}
          type="select"
          onSelect={handlePerPageChange}
          renderOption={(option) => option || ""}
          initialValue={itemsPerPage}
          dropdownIcon={true}
        />
        <Label>{label} per page</Label>
      </PerPageContainer>
    </PaginationContainer>
  );
};

export default Pagination;
