import { PageLayout } from '../../components/PageLayout';
import { SectionLayout } from '../../components/SectionLayout';

export const HomePage: React.FC = () => {
  return (
    <PageLayout isHomePage={true} className="home">
      <h1 className="title">
        Let's find some <span className="title-accent">Art</span> here!
      </h1>
      <SectionLayout subtitle="Artworks for you" title="Our special gallery">
        <p>Some content here</p>
      </SectionLayout>
    </PageLayout>
  );
};
