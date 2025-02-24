import { useContext, useState } from 'react';
import { PageLayout } from '../../components/PageLayout';
import { SectionLayout } from '../../components/SectionLayout';
import { Loader } from '../../components/Loader';
import { Pagination } from '../../components/Pagination';
import { ArtworkCard } from '../../components/ArtworkCard';
import { ArtworksContext } from '../../store';
import { SortControls } from '../../components/SortControls';
import { SearchForm } from '../../components/SearchForm';

export const HomePage: React.FC = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const {
    artworks,
    isFetching,
    error,
    sortCriteria,
    setSortCriteria,
    isSearching,
  } = useContext(ArtworksContext);

  const itemsOnPage = 5;
  const lastPageIndex = Math.ceil(artworks.length / itemsOnPage) - 1;

  const currentArtworks = artworks.slice(
    pageIndex * itemsOnPage,
    (pageIndex + 1) * itemsOnPage,
  );

  const handleSortCriteriaChange = (value: string) => {
    setSortCriteria(value);
  };

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
        Let's find some <span className="title title_accent">Art</span> here!
      </h1>
      <SearchForm />
      {(isFetching || isSearching) && <Loader />}
      {error && <p>{error}</p>}
      {!isFetching && !isSearching && !error && artworks.length !== 0 && (
        <SectionLayout subtitle="Artworks for you" title="Our special gallery">
          <SortControls
            id="artworks-sorter"
            sortCriteria={sortCriteria}
            onSortCriteriaChange={handleSortCriteriaChange}
          />
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
