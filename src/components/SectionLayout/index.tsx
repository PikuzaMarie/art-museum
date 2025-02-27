import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  title: string;
  subtitle: string;
}

export const SectionLayout: React.FC<SectionProps> = ({
  children,
  title,
  subtitle,
}) => {
  return (
    <section className="section">
      <div className="section__heading">
        <h4 className="section__subtitle">{subtitle}</h4>
        <h3 className="section__title">{title}</h3>
      </div>
      {children}
    </section>
  );
};
