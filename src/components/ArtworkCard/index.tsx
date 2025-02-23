import { Link } from 'react-router-dom';
import { Artwork } from '../../types';
import { FavoriteButton } from '../FavoriteButton';

interface ArtworkCardProps {
  artwork: Artwork;
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  return (
    <article className="artwork">
      <Link to={`/artwork/${artwork.id}`}>
        <figure className="artwork__image-container">
          <img
            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
            alt={artwork.thumbnail?.alt_text ?? artwork.title}
            className="artwork__image"
          />
        </figure>
        <div className="artwork__description">
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
          <FavoriteButton />
        </div>
      </Link>
    </article>
  );
};
