import { useContext } from 'react';
import { FavoritesContext } from '../../store';
import { PageLayout } from '../../components/PageLayout';
import { SectionLayout } from '../../components/SectionLayout';
import { ArtworkCard } from '../../components/ArtworkCard';
import bookmarkIcon from '../../assets/icons/bookmark-icon.svg';
import { FallbackContent } from '../../components/FallbackContent';
import { LINK_TO_HOME_PAGE } from '../../constants';

export const FavoritesPage: React.FC = () => {
  const { favoriteArtworks } = useContext(FavoritesContext);
  return (
    <PageLayout isHomePage={false} className="favorites">
      <h1 className="title">
        Here are your
        <br />
        <span className="title__accent-block">
          <span className="title__icon">
            <img src={bookmarkIcon} alt="Bookmark icon" />
          </span>
          <span className="title title_accent">favorites</span>
        </span>
      </h1>
      {favoriteArtworks.length !== 0 ? (
        <SectionLayout subtitle="Saved by you" title="Your favorites list">
          <div className="artwork-list">
            {favoriteArtworks.map(item => (
              <ArtworkCard key={item.id} artwork={item} variant="small" />
            ))}
          </div>
        </SectionLayout>
      ) : (
        <FallbackContent link={LINK_TO_HOME_PAGE}>
          <p>
            You haven't saved any artworks yet. Explore artworks on home page
          </p>
        </FallbackContent>
      )}
    </PageLayout>
  );
};
