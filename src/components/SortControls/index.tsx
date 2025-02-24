import { memo } from 'react';

interface SortControlsProps {
  id: string;
  sortCriteria: string;
  onSortCriteriaChange: (criteria: string) => void;
}

const SortControlsComponent: React.FC<SortControlsProps> = ({
  id,
  sortCriteria,
  onSortCriteriaChange,
}) => {
  return (
    <div className="sort-controls">
      <label htmlFor={id} className="sort-controls__label">
        Sort by:
      </label>
      <select
        id={id}
        value={sortCriteria}
        onChange={e => onSortCriteriaChange(e.target.value)}
        className="sort-controls__select"
      >
        <option value="title-asc" className="sort-controls__option">
          Title (A-Z)
        </option>
        <option value="title-desc" className="sort-controls__option">
          Title (Z-A)
        </option>
        <option value="artist-asc" className="sort-controls__option">
          Artist (A-Z)
        </option>
        <option value="artist-desc" className="sort-controls__option">
          Artist (Z-A)
        </option>
      </select>
    </div>
  );
};

export const SortControls = memo(SortControlsComponent);
