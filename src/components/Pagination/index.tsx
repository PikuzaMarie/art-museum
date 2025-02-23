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

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  lastPage,
  onGoToFirst,
  onGoToPrevious,
  onGoToNext,
  onGoToLast,
}) => {
  return (
    <nav>
      <ul>
        <li>
          <button onClick={onGoToFirst} disabled={currentPage === 1}>
            <img src={iconLeftDouble} alt="left-double-arrow" />
          </button>
        </li>
        <li>
          <button onClick={onGoToPrevious} disabled={currentPage === 1}>
            <img src={iconLeft} alt="left-arrow" />
          </button>
        </li>
        <li>
          <button>{currentPage}</button>
        </li>
        <li>
          <button onClick={onGoToNext} disabled={currentPage === lastPage}>
            <img src={iconRight} alt="right-arrow" />
          </button>
        </li>
        <li>
          <button onClick={onGoToLast} disabled={currentPage === lastPage}>
            <img src={iconRightDouble} alt="right-double-arrow" />
          </button>
        </li>
      </ul>
    </nav>
  );
};
