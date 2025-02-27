import { createContext } from 'react';
import { Artwork } from '../../types';

interface FavoritesContextProps {
  favoriteArtworks: Artwork[];
  handleFavoriteAdd: (artwork: Artwork) => void;
  handleFavoriteRemove: (artworkId: number) => void;
}

const throwErrorIfNotProvided = () => {
  throw new Error('function must be provided within ArtworksContextProvider');
};

export const FavoritesContext = createContext<FavoritesContextProps>({
  favoriteArtworks: [],
  handleFavoriteAdd: throwErrorIfNotProvided,
  handleFavoriteRemove: throwErrorIfNotProvided,
});
