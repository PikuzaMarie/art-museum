import { PageLayout } from '../../components/PageLayout';
import bookmarkIcon from '../../assets/icons/bookmark-icon.svg';
import { SectionLayout } from '../../components/SectionLayout';

export const FavoritesPage: React.FC = () => {
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
      <SectionLayout subtitle="Saved by you" title="Your favorites list">
        <div>artworks here</div>
      </SectionLayout>
    </PageLayout>
  );
};
