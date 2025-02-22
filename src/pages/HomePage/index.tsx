import { PageLayout } from '../../components/PageLayout';

export const HomePage: React.FC = () => {
  return (
    <PageLayout isHomePage={true} className="home">
      <h1 className="title">
        Let's find some <span className="title-accent">Art</span> here!
      </h1>
    </PageLayout>
  );
};
