import { useState, useEffect } from 'react';
import { useFetch } from '../hooks/useFetch';
import { fetchAvailableArtworks } from '../api';
import { ArtworksContext } from './artworks-context';
import { sortArtworks } from '../utils/sortArtworks';

interface ArtworksContextProviderProps {
  children: React.ReactNode;
}

export const ArtworksContextProvider: React.FC<
  ArtworksContextProviderProps
> = ({ children }) => {
  const { artworks, setArtworks, isFetching, error } = useFetch({
    fetchFn: fetchAvailableArtworks,
  });

  const [sortCriteria, setSortCriteria] = useState<string>('title-asc');
  const [sortedArtworks, setSortedArtworks] = useState(artworks);

  useEffect(() => {
    if (artworks.length !== 0) {
      const sortedArtworks = sortArtworks(artworks, sortCriteria);
      setSortedArtworks(sortedArtworks);
    }
  }, [artworks, sortCriteria]);

  const ctxValue = {
    artworks: sortedArtworks,
    setArtworks,
    sortCriteria,
    setSortCriteria,
    isFetching,
    error,
  };

  return (
    <ArtworksContext.Provider value={ctxValue}>
      {children}
    </ArtworksContext.Provider>
  );
};
