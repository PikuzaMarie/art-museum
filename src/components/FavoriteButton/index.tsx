import { useContext } from 'react';
import { FavoritesContext } from '../../store';
import { Artwork } from '../../types';
import bookmarkIcon from '../../assets/icons/bookmark-icon.svg';

interface FavoriteButtonProps {
  artwork: Artwork;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ artwork }) => {
  const { favoriteArtworks, handleFavoriteAdd, handleFavoriteRemove } =
    useContext(FavoritesContext);

  const isFavorite = favoriteArtworks.some(item => item.id === artwork.id);

  const handleFavoriteClick = () => {
    if (isFavorite) {
      handleFavoriteRemove(artwork.id);
    } else {
      handleFavoriteAdd(artwork);
    }
  };

  return (
    <button
      onClick={handleFavoriteClick}
      className={`button button-favorite ${isFavorite ? 'active' : undefined}`}
    >
      <img src={bookmarkIcon} alt="Bookmark icon" />
    </button>
  );
};
