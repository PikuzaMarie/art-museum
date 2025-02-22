import { memo } from 'react';
import museumLogoDark from '../../assets/logos/museum-logo-dark.svg';
import modsenLogo from '../../assets/logos/modsen-logo.svg';

const FooterComponent: React.FC = () => {
  return (
    <footer>
      <div>
        <img src={museumLogoDark} alt="Museum icon with museum title" />
        <img src={modsenLogo} alt="Modsen logo" />
      </div>
    </footer>
  );
};

export const Footer = memo(FooterComponent);
