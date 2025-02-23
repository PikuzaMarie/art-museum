import { Footer } from '../Footer';
import { Header } from '../Header';

interface PageWrapperProps {
  isHomePage: boolean;
  children: React.ReactNode;
  className: string;
}

export const PageLayout: React.FC<PageWrapperProps> = ({
  isHomePage,
  children,
  className,
}) => {
  return (
    <div className={className}>
      <Header isHomePage={isHomePage} />
      <main>
        <div className="wrapper">{children}</div>
      </main>
      <Footer />
    </div>
  );
};
