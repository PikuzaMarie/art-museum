import { useContext } from 'react';
import { FavoriteButton } from '../../components/FavoriteButton';
import { PageLayout } from '../../components/PageLayout';
import { ArtworksContext } from '../../store';
import { useParams } from 'react-router';

export const ArtworkPage: React.FC = () => {
  const { id } = useParams();
  const { artworks } = useContext(ArtworksContext);

  const currentArtwork = artworks.find(item => item.id === Number(id));

  return (
    <PageLayout isHomePage={false} className="artwork">
      {currentArtwork && (
        <article>
          <div>
            <img
              src={`https://www.artic.edu/iiif/2/${currentArtwork.image_id}/full/843,/0/default.jpg`}
              alt={currentArtwork.thumbnail?.alt_text ?? currentArtwork.title}
            />
            <div>
              <FavoriteButton />
            </div>
          </div>
          <div>
            <div>
              <h2>{currentArtwork.title}</h2>
              <span>{currentArtwork.artist_title}</span>
              <span>
                {currentArtwork.main_reference_number.replace('.', '-')}
              </span>
            </div>
            <div>
              <h2>Overview</h2>
              <ul>
                <li>
                  <span>Date:</span> {currentArtwork.date_display}
                </li>
                <li>
                  <span>Place Of Origin:</span> {currentArtwork.place_of_origin}
                </li>
                <li>
                  <span>Dimensions:</span> {currentArtwork.dimensions}
                </li>
                <li>
                  <span>Repository:</span> {currentArtwork.credit_line}
                </li>
                {currentArtwork.is_public_domain ? <li>Public</li> : undefined}
              </ul>
            </div>
          </div>
        </article>
      )}
    </PageLayout>
  );
};
