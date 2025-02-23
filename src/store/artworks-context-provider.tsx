import { useFetch } from '../hooks/useFetch';
import { fetchAvailableArtworks } from '../api';
import { ArtworksContext } from './artworks-context';

interface ArtworksContextProviderProps {
  children: React.ReactNode;
}

export const ArtworksContextProvider: React.FC<
  ArtworksContextProviderProps
> = ({ children }) => {
  const { artworks, isFetching, error } = useFetch({
    fetchFn: fetchAvailableArtworks,
  });

  const ctxValue = {
    artworks,
    isFetching,
    error,
  };

  return (
    <ArtworksContext.Provider value={ctxValue}>
      {children}
    </ArtworksContext.Provider>
  );
};
