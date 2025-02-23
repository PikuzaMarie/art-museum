import { useFetch } from '../../hooks/useFetch';
import { PageLayout } from '../../components/PageLayout';
import { SectionLayout } from '../../components/SectionLayout';
import { fetchAvailableArtworks } from '../../api';
import { Loader } from '../../components/Loader';

export const HomePage: React.FC = () => {
  const { artworks, isFetching, error } = useFetch({
    fetchFn: fetchAvailableArtworks,
  });

  return (
    <PageLayout isHomePage={true} className="home">
      <h1 className="title">
        Let's find some <span className="title-accent">Art</span> here!
      </h1>
      {isFetching && <Loader />}
      {error && <p>{error}</p>}
      {!error && artworks.length !== 0 && (
        <SectionLayout subtitle="Artworks for you" title="Our special gallery">
          <p>
            {artworks.map(artwork => (
              <div>{artwork.title}</div>
            ))}
          </p>
        </SectionLayout>
      )}
    </PageLayout>
  );
};
