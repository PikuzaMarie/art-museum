import { Link } from 'react-router-dom';
import { Artwork } from '../../types';
import { FavoriteButton } from '../FavoriteButton';

interface ArtworkCardProps {
  artwork: Artwork;
  variant?: 'small';
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({
  artwork,
  variant,
}) => {
  return (
    <article className={`artwork ${variant === 'small' && 'small'}`}>
      <figure className="artwork__image-container">
        <Link to={`/artwork/${artwork.id}`}>
          <img
            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
            alt={artwork.thumbnail?.alt_text ?? artwork.title}
            className="artwork__image"
          />
        </Link>
      </figure>

      <div className="artwork__description">
        <Link to={`/artwork/${artwork.id}`}>
          <div className="artwork__heading">
            <div>
              <h5 className="artwork__title overflow">{artwork.title}</h5>
              <span className="artwork__artist overflow">
                {artwork.artist_title}
              </span>
            </div>
            {artwork.is_public_domain ? (
              <span className="artwork__is-public">Public</span>
            ) : undefined}
          </div>
        </Link>
        <FavoriteButton artwork={artwork} />
      </div>
    </article>
  );
};
