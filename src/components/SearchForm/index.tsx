import { useState, useEffect, useContext } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { fetchSearchResults } from '../../api';
import { validateInput } from '../../utils/validationFunctions';

import { ArtworksContext } from '../../store';

export const SearchForm: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const { setArtworks, isSearching, setIsSearching } =
    useContext(ArtworksContext);

  const debouncedValidation = useDebounce({ value: searchTerm, delay: 1500 });
  const debouncedSearchTerm = useDebounce({
    value: searchTerm,
    delay: 500,
  });

  useEffect(() => {
    setErrors(validateInput(debouncedValidation.trim()));
  }, [debouncedValidation]);

  useEffect(() => {
    const isValidInput = debouncedSearchTerm.length >= 3 && errors.length === 0;

    if (isValidInput) {
      setIsSearching(true);
      fetchSearchResults(debouncedSearchTerm)
        .then(results => setArtworks(results.data))
        .finally(() => setIsSearching(false));
    }
  }, [debouncedSearchTerm, errors]);

  const handleSearchTermChange = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search for Artwork, Artist..."
          value={searchTerm}
          onChange={e => handleSearchTermChange(e.target.value)}
          maxLength={60}
        />
      </div>

      {errors.length > 0 && (
        <ul>
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
      {isSearching && <p>Searching for results...</p>}
    </>
  );
};
