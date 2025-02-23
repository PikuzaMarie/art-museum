import { useContext, useState } from 'react';
import { PageLayout } from '../../components/PageLayout';
import { SectionLayout } from '../../components/SectionLayout';
import { Loader } from '../../components/Loader';
import { Pagination } from '../../components/Pagination';
import { ArtworkCard } from '../../components/ArtworkCard';
import { ArtworksContext } from '../../store';

export const HomePage: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const { artworks, isFetching, error } = useContext(ArtworksContext);

  const itemsOnPage = 5;
  const lastPageIndex = Math.ceil(artworks.length / itemsOnPage) - 1;

  const currentArtworks = artworks.slice(
    pageIndex * itemsOnPage,
    (pageIndex + 1) * itemsOnPage,
  );

  const handleGoToFirstPage = () => {
    setPageIndex(0);
  };

  const handleGoToPreviousPage = () => {
    setPageIndex(prevPageIndex => Math.max(prevPageIndex - 1, 0));
  };

  const handleGoToNextPage = () => {
    setPageIndex(prevPageIndex => Math.min(prevPageIndex + 1, lastPageIndex));
  };

  const handleGoToLastPage = () => {
    setPageIndex(lastPageIndex);
  };

  return (
    <PageLayout isHomePage={true} className="home">
      <h1 className="title">
        Let's find some <span className="title-accent">Art</span> here!
      </h1>
      {isFetching && <Loader />}
      {error && <p>{error}</p>}
      {!error && artworks.length !== 0 && (
        <SectionLayout subtitle="Artworks for you" title="Our special gallery">
          <div className="artwork-list">
            {currentArtworks.map(artwork => (
              <ArtworkCard key={artwork.id} artwork={artwork} variant="large" />
            ))}
          </div>
          <Pagination
            currentPage={pageIndex + 1}
            lastPage={lastPageIndex + 1}
            onGoToFirst={handleGoToFirstPage}
            onGoToPrevious={handleGoToPreviousPage}
            onGoToNext={handleGoToNextPage}
            onGoToLast={handleGoToLastPage}
          />
        </SectionLayout>
      )}
    </PageLayout>
  );
};
