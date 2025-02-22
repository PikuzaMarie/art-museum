import { Footer } from '../Footer';
import { Header } from '../Header';

interface PageWrapperProps {
  isHomePage: boolean;
  children: React.ReactNode;
}

export const PageLayout: React.FC<PageWrapperProps> = ({
  isHomePage,
  children,
}) => {
  return (
    <>
      <Header isHomePage={isHomePage} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
