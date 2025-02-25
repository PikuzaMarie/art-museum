import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FavoriteButton } from '../../components/FavoriteButton';
import { PageLayout } from '../../components/PageLayout';
import { ArtworksContext, FavoritesContext } from '../../store';
import { useParams } from 'react-router';

export const ArtworkPage: React.FC = () => {
  const { id } = useParams();
  const { artworks } = useContext(ArtworksContext);
  const { favoriteArtworks } = useContext(FavoritesContext);

  const navigate = useNavigate();

  const currentArtwork =
    artworks.find(item => item.id === Number(id)) ||
    favoriteArtworks.find(item => item.id === Number(id));

  return (
    <PageLayout isHomePage={false} className="artwork-page">
      {currentArtwork ? (
        <>
          <button onClick={() => navigate(-1)}>Back</button>
          <article className="artwork-details">
            <div className="artwork-details__image-container">
              <img
                src={`https://www.artic.edu/iiif/2/${currentArtwork.image_id}/full/843,/0/default.jpg`}
                alt={currentArtwork.thumbnail?.alt_text ?? currentArtwork.title}
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
        </>
      ) : (
        <div className="wrapper__fallback-content">
          <p>Artwork not found!</p>
          <p>
            But don't worry, find another one on <Link to={`/`}>homepage</Link>
          </p>
        </div>
      )}
    </PageLayout>
  );
};
