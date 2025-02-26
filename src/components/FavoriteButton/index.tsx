import { useContext } from 'react';
import { FavoritesContext } from '../../store';
import { Artwork } from '../../types';
import bookmarkIcon from '../../assets/icons/bookmark-icon.svg';
// //uncomment to run tests for ArtworkCard and FavoriteButton
// const bookmarkIcon: string =

//   require('../../assets/icons/bookmark-icon.svg').default;

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
      //required to assert test results
      console.log(
        `Removing artwork with with ID: ${artwork.id} from favorites`,
      );
    } else {
      handleFavoriteAdd(artwork);
      //required to assert test results
      console.log(`Adding artwork with ID: ${artwork.id} to favorites`);
    }
  };

  return (
    <button
      onClick={handleFavoriteClick}
      className={`button button-favorite ${isFavorite && 'active'}`}
    >
      <img src={bookmarkIcon} alt="Bookmark icon" />
    </button>
  );
};
