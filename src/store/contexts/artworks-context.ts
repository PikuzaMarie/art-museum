import { createContext } from 'react';
import { Artwork } from '../../types';

interface ArtworksContextProps {
  artworks: Artwork[];
  setArtworks: (artworks: Artwork[]) => void;
  isFetching: boolean;
  error: string | null;
  sortCriteria: string;
  setSortCriteria: (value: string) => void;
  isSearching: boolean;
  setIsSearching: (value: boolean) => void;
}

export const ArtworksContext = createContext<ArtworksContextProps>({
  artworks: [],
  setArtworks: () => {},
  isFetching: false,
  error: null,
  sortCriteria: 'title-asc',
  setSortCriteria: () => {},
  isSearching: false,
  setIsSearching: () => {},
});
