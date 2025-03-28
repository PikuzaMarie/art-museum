import { Link } from 'react-router-dom';

interface FallbackContentProps {
  children: React.ReactNode;
  link?: {
    linkPath: string;
    linkName: string;
  };
}

export const FallbackContent: React.FC<FallbackContentProps> = ({
  children,
  link,
}) => {
  return (
    <div className="wrapper__fallback-content">
      {children}
      {link && <Link to={link?.linkPath}>{link?.linkName}</Link>}
    </div>
  );
};
