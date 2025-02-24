interface SortControlsProps {
  id: string;
  sortCriteria: string;
  onSortCriteriaChange: (criteria: string) => void;
}

export const SortControls: React.FC<SortControlsProps> = ({
  id,
  sortCriteria,
  onSortCriteriaChange,
}) => {
  return (
    <div>
      <label htmlFor={id}>Sort by:</label>
      <select
        id={id}
        value={sortCriteria}
        onChange={e => onSortCriteriaChange(e.target.value)}
      >
        <option value="title-asc">Title (A-Z)</option>
        <option value="title-desc">Title (Z-A)</option>
        <option value="artist-asc">Artist (A-Z)</option>
        <option value="artist-desc">Artist (Z-A)</option>
      </select>
    </div>
  );
};
