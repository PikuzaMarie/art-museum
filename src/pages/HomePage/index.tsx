import { useCallback, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArtworksContext } from '../../store';
import { PageLayout } from '../../components/PageLayout';
import { SectionLayout } from '../../components/SectionLayout';
import { Loader } from '../../components/Loader';
import { Pagination } from '../../components/Pagination';
import { ArtworkCard } from '../../components/ArtworkCard';
import { SortControls } from '../../components/SortControls';
import { SearchForm } from '../../components/SearchForm';

export const HomePage: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { search } = location;

  const searchParams = new URLSearchParams(search);
  const page = searchParams.get('page') || 1;
  const pageIndex = Number(page) - 1;

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

  const handleSortCriteriaChange = useCallback(
    (value: string) => {
      setSortCriteria(value);
    },
    [setSortCriteria],
  );

  const handlePageChange = useCallback(
    (newPage: number) => {
      const newSearchParams = new URLSearchParams(search);
      newSearchParams.set('page', String(newPage));
      navigate({ search: newSearchParams.toString() });
    },
    [search, navigate],
  );

  const handleGoToFirstPage = () => handlePageChange(1);
  const handleGoToPreviousPage = () => handlePageChange(Math.max(pageIndex, 1));
  const handleGoToNextPage = () =>
    handlePageChange(Math.min(pageIndex + 2, lastPageIndex + 1));
  const handleGoToLastPage = () => handlePageChange(lastPageIndex + 1);

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
              <ArtworkCard key={artwork.id} artwork={artwork} />
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
