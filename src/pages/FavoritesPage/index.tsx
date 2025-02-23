import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoritesContext } from '../../store';
import { PageLayout } from '../../components/PageLayout';
import bookmarkIcon from '../../assets/icons/bookmark-icon.svg';
import { SectionLayout } from '../../components/SectionLayout';
import { ArtworkCard } from '../../components/ArtworkCard';

export const FavoritesPage: React.FC = () => {
  const { favoriteArtworks } = useContext(FavoritesContext);
  return (
    <PageLayout isHomePage={false} className="favorites">
      <h1>
        Here are your
        <br />
        <span>
          <span>
            <img src={bookmarkIcon} alt="Bookmark icon" />
          </span>
          <span>favourites</span>
        </span>
      </h1>
      {favoriteArtworks.length !== 0 ? (
        <SectionLayout subtitle="Saved by you" title="Your favorites list">
          {favoriteArtworks.map(item => (
            <ArtworkCard key={item.id} artwork={item} />
          ))}
        </SectionLayout>
      ) : (
        <div>
          <p>You haven't saved any artworks yet.</p>
          <p>
            Explore artworks at <Link to={`/`}>homepage</Link>
          </p>
        </div>
      )}
    </PageLayout>
  );
};
