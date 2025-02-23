import bookmarkIcon from '../../assets/icons/bookmark-icon.svg';

export const FavoriteButton: React.FC = () => {
  return (
    <button className="button button-favorite">
      <img src={bookmarkIcon} alt="Bookmark icon" />
    </button>
  );
};
