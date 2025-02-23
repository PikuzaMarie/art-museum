import { createContext } from 'react';
import { Artwork } from '../types';

interface ArtworksContextProps {
  artworks: Artwork[];
  isFetching: boolean;
  error: string | null;
}

export const ArtworksContext = createContext<ArtworksContextProps>({
  artworks: [],
  isFetching: false,
  error: null,
});
