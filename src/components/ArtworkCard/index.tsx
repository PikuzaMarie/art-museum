import { useLocation, useNavigate } from 'react-router-dom';
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
  const location = useLocation();
  const navigate = useNavigate();
  const { search } = location;

  const searchParams = new URLSearchParams(search);
  const page = searchParams.get('page') || 1;

  const goToArtworkPage = (artworkId: number) => {
    const updatedSearchParams = new URLSearchParams(search);
    updatedSearchParams.set('page', String(page));

    window.scrollTo(0, 0);
    navigate({
      pathname: `/artwork/${artworkId}`,
      search: updatedSearchParams.toString(),
    });
  };

  return (
    <article className={`artwork ${variant === 'small' && 'small'}`}>
      <figure className="artwork__image-container">
        <a onClick={() => goToArtworkPage(artwork.id)}>
          <img
            src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
            alt={artwork.thumbnail?.alt_text ?? artwork.title}
            className="artwork__image"
          />
        </a>
      </figure>

      <div className="artwork__description">
        <a onClick={() => goToArtworkPage(artwork.id)}>
          <div className="artwork__heading">
            <div>
              <h5 className="artwork__title overflow">{artwork.title}</h5>
              <p className="artwork__artist overflow">{artwork.artist_title}</p>
            </div>
            {artwork.is_public_domain ? (
              <span className="artwork__is-public">Public</span>
            ) : undefined}
          </div>
        </a>
        <FavoriteButton artwork={artwork} />
      </div>
    </article>
  );
};
