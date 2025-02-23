import { useFavorites } from '../hooks/useFavorites';
import { FavoritesContext } from './favorites-context';

interface ArtworksContextProviderProps {
  children: React.ReactNode;
}

export const FavoritesContextProvider: React.FC<
  ArtworksContextProviderProps
> = ({ children }) => {
  const { favoriteArtworks, handleFavoriteAdd, handleFavoriteRemove } =
    useFavorites();

  const ctxValue = {
    favoriteArtworks,
    handleFavoriteAdd,
    handleFavoriteRemove,
  };

  return (
    <FavoritesContext.Provider value={ctxValue}>
      {children}
    </FavoritesContext.Provider>
  );
};
