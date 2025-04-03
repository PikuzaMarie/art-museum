import { useContext, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { ArtworksContext, FavoritesContext } from '../../store';
import { PageLayout } from '../../components/PageLayout';
import { FavoriteButton } from '../../components/FavoriteButton';
import { Modal } from '../../components/Modal';
import { FallbackContent } from '../../components/FallbackContent';
import { LINK_TO_HOME_PAGE } from '../../constants';
import { Link } from 'react-router-dom';

export const ArtworkPage: React.FC = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const { artworks } = useContext(ArtworksContext);
  const { favoriteArtworks } = useContext(FavoritesContext);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentArtwork =
    artworks.find(item => item.id === Number(id)) ||
    favoriteArtworks.find(item => item.id === Number(id));

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PageLayout isHomePage={false} className="artwork-page">
      {isModalOpen && currentArtwork?.image_id && (
        <Modal
          imageId={currentArtwork?.image_id}
          altText={currentArtwork.thumbnail?.alt_text ?? currentArtwork.title}
          onClose={handleCloseModal}
        />
      )}
      {currentArtwork ? (
        <div className="artwork-container">
          <Link
            to={`../..?${searchParams}`}
            relative="path"
            className="button button-navigate"
          >
            Back
          </Link>
          <article className="artwork-details">
            <div className="artwork-details__image-container">
              <img
                src={`https://www.artic.edu/iiif/2/${currentArtwork.image_id}/full/843,/0/default.jpg`}
                alt={currentArtwork.thumbnail?.alt_text ?? currentArtwork.title}
                onClick={handleOpenModal}
                onError={e => {
                  e.currentTarget.src =
                    'https://placehold.co/843/f7d5a2/383838?text=no-image&font=lato';
                }}
                className="artwork-details__image"
              />
              <div className="artwork-details__button">
                <FavoriteButton artwork={currentArtwork} />
              </div>
            </div>
            <div className="artwork-details__description">
              <div className="artwork-details__heading">
                <h2 className="artwork-details__title artwork-details__title_first">
                  {currentArtwork.title}
                </h2>
                <span className="artwork-details__artist">
                  {currentArtwork.artist_title}
                </span>
                <span className="artwork-details__reference-number">
                  {currentArtwork.main_reference_number.replace('.', '-')}
                </span>
              </div>
              <div className="artwork-details__overview">
                <h2 className="artwork-details__title">Overview</h2>
                <ul className="artwork-details__list">
                  <li className="artwork-details__item">
                    <span className="artwork-details__item_highlighted">
                      Date:
                    </span>{' '}
                    {currentArtwork.date_display}
                  </li>
                  <li className="artwork-details__item">
                    <span className="artwork-details__item_highlighted">
                      Place Of Origin:
                    </span>{' '}
                    {currentArtwork.place_of_origin}
                  </li>
                  <li className="artwork-details__item">
                    <span className="artwork-details__item_highlighted">
                      Dimensions:
                    </span>{' '}
                    {currentArtwork.dimensions}
                  </li>
                  <li className="artwork-details__item">
                    <span className="artwork-details__item_highlighted">
                      Repository:
                    </span>{' '}
                    {currentArtwork.credit_line}
                  </li>
                  {currentArtwork.is_public_domain ? (
                    <li className="artwork-details__item">Public</li>
                  ) : undefined}
                </ul>
              </div>
            </div>
          </article>
        </div>
      ) : (
        <FallbackContent link={LINK_TO_HOME_PAGE}>
          <p>
            Artwork not found! But don't worry, find another one on home page
          </p>
        </FallbackContent>
      )}
    </PageLayout>
  );
};
