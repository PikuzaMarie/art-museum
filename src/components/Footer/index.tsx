import { memo } from 'react';
import gitHubLogo from '../../assets/logos/github-logo.png';
import modsenLogo from '../../assets/logos/modsen-logo.svg';

const FooterComponent: React.FC = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer__link">
          <a href="https://github.com/PikuzaMarie" target="_blank">
            <img src={gitHubLogo} alt="Github logo" />
          </a>
          <small>Maryia Pikuza, 2025</small>
        </div>
        <a href="https://www.modsen-software.com/">
          <img src={modsenLogo} alt="Modsen logo" />
        </a>
      </div>
    </footer>
  );
};

export const Footer = memo(FooterComponent);
