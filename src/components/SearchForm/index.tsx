import { useState, useEffect, useContext } from 'react';
import { useDebounce } from '../../hooks/useDebounce';
import { fetchSearchResults } from '../../api';

import { ArtworksContext } from '../../store';

export const SearchForm: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const { setArtworks, isSearching, setIsSearching } =
    useContext(ArtworksContext);
  const debouncedSearchTerm = useDebounce({
    value: searchTerm,
    delay: 500,
  });

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      fetchSearchResults(debouncedSearchTerm)
        .then(results => {
          setArtworks(results.data);
        })
        .finally(() => setIsSearching(false));
    }
  }, [debouncedSearchTerm]);

  const handleSearchTermChange = (value: string) => {
    setSearchTerm(value.trim());
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={searchTerm}
          onChange={e => handleSearchTermChange(e.target.value)}
        />
      </div>
      {isSearching && <p>Searching for results...</p>}
    </>
  );
};
