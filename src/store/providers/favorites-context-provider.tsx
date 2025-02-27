import { useFavorites } from '../../hooks/useFavorites';
import { FavoritesContext } from '../contexts';

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
