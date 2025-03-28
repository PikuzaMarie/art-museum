import { PageLayout } from '../../components/PageLayout';
import { FallbackContent } from '../../components/FallbackContent';
import { LINK_TO_HOME_PAGE } from '../../constants';

export const NotFoundPage: React.FC = () => {
  return (
    <PageLayout isHomePage={false} className="not-found">
      <h1 className="title">
        <span className="title title_accent">404</span> Not Found
      </h1>
      <FallbackContent link={LINK_TO_HOME_PAGE}>
        <p>
          Seems like you got a bit lost. Don't worry, follow the link below to
          return to main:
        </p>
      </FallbackContent>
    </PageLayout>
  );
};
