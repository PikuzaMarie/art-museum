import { useState, useEffect, useContext } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { fetchSearchResults } from '../../api';
import { validateInput } from '../../utils/validationFunctions';
import { fetchAvailableArtworks } from '../../api';
import searchIcon from '../../assets/icons/search-icon.svg';

import { ArtworksContext } from '../../store';

export const SearchForm: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errors, setErrors] = useState<string[]>([]);
  const [noResults, setNoResults] = useState(false);

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
        .then(results => {
          if (results.data.length === 0) {
            setNoResults(true);
            setArtworks([]);
          } else {
            setNoResults(false);
            setArtworks(results.data);
          }
        })
        .finally(() => setIsSearching(false));
    } else if (debouncedSearchTerm === '') {
      setIsSearching(true);
      fetchAvailableArtworks()
        .then(results => setArtworks(results.data))
        .finally(() => setIsSearching(false));
    }
  }, [debouncedSearchTerm, errors]);

  const handleSearchTermChange = (value: string) => {
    setSearchTerm(value);
  };

  const handleClearSearchTerm = () => {
    setSearchTerm('');
    setErrors([]);
    setNoResults(false);
  };

  return (
    <div className="search-form">
      <div className="search-form__input-container">
        <img src={searchIcon} alt="Search icon" />
        <input
          type="text"
          placeholder="Search Art, Artist, Work..."
          value={searchTerm}
          onChange={e => handleSearchTermChange(e.target.value)}
          maxLength={60}
          className="search-form__input"
        />
        <button
          onClick={handleClearSearchTerm}
          disabled={searchTerm === ''}
          className="search-form__clear-button"
        >
          X
        </button>
      </div>

      {errors.length > 0 && (
        <ul className="search-form__error-list">
          {errors.map((error, index) => (
            <li key={index} className="search-form__error">
              {error}
            </li>
          ))}
        </ul>
      )}
      {isSearching && <p>Searching for results...</p>}
      {noResults && !isSearching && (
        <p>
          Nothing was found for your request. Try out searching for something
          else :)
        </p>
      )}
    </div>
  );
};
