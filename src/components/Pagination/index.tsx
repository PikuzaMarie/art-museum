import { memo, useMemo } from 'react';
import iconLeftDouble from '../../assets/icons/icon-pagination-left-double.svg';
import iconLeft from '../../assets/icons/icon-pagination-left.svg';
import iconRightDouble from '../../assets/icons/icon-pagination-right-double.svg';
import iconRight from '../../assets/icons/icon-pagination-right.svg';

interface PaginationProps {
  currentPage: number;
  lastPage: number;
  onGoToFirst: () => void;
  onGoToPrevious: () => void;
  onGoToNext: () => void;
  onGoToLast: () => void;
}

const PaginationComponent: React.FC<PaginationProps> = ({
  currentPage,
  lastPage,
  onGoToFirst,
  onGoToPrevious,
  onGoToNext,
  onGoToLast,
}) => {
  const isFirstPage = useMemo(() => currentPage === 1, [currentPage]);
  const isLastPage = useMemo(
    () => currentPage === lastPage,
    [currentPage, lastPage],
  );

  return (
    <nav>
      <ul className="pagination">
        <li>
          <button
            className="pagination button"
            onClick={onGoToFirst}
            disabled={isFirstPage}
          >
            <img src={iconLeftDouble} alt="left-double-arrow" />
          </button>
        </li>
        <li>
          <button
            className="pagination button"
            onClick={onGoToPrevious}
            disabled={isFirstPage}
          >
            <img src={iconLeft} alt="left-arrow" />
          </button>
        </li>
        <li>
          <button className="pagination__page-number button">
            {currentPage}
          </button>
        </li>
        <li>
          <button
            className="pagination button"
            onClick={onGoToNext}
            disabled={isLastPage}
          >
            <img src={iconRight} alt="right-arrow" />
          </button>
        </li>
        <li>
          <button
            className="pagination button"
            onClick={onGoToLast}
            disabled={isLastPage}
          >
            <img src={iconRightDouble} alt="right-double-arrow" />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export const Pagination = memo(PaginationComponent);
