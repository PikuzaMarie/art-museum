import { createContext } from 'react';
import { Artwork } from '../types';

interface ArtworksContextProps {
  artworks: Artwork[];
  isFetching: boolean;
  error: string | null;
  sortCriteria: string;
  setSortCriteria: (value: string) => void;
}

export const ArtworksContext = createContext<ArtworksContextProps>({
  artworks: [],
  isFetching: false,
  error: null,
  sortCriteria: 'title-asc',
  setSortCriteria: () => {},
});
