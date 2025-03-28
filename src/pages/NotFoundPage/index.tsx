import { Link } from 'react-router-dom';
import { PageLayout } from '../../components/PageLayout';

export const NotFoundPage: React.FC = () => {
  return (
    <PageLayout isHomePage={false} className="not-found">
      <h1 className="title">
        <span className="title title_accent">404</span> Not Found
      </h1>
      <div className="wrapper__fallback-content">
        <p>
          Seems like you got a bit lost. Don't worry, follow the link below to
          return to main:
        </p>
        <Link to="/">Go to main page</Link>
      </div>
    </PageLayout>
  );
};
