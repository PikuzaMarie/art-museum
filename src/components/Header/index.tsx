import { memo } from 'react';
import museumLogoLight from '../../assets/logos/museum-logo-light.svg';
import homeIcon from '../../assets/icons/home-icon.svg';
import bookmarkIcon from '../../assets/icons/bookmark-icon.svg';

interface HeaderProps {
  isHomePage: boolean;
}

const HeaderComponent: React.FC<HeaderProps> = ({ isHomePage }) => {
  return (
    <header className="header">
      <div className="wrapper">
        <img src={museumLogoLight} alt="Museum icon with museum title" />
        <nav className="header__nav">
          <ul className="header__navlist">
            {!isHomePage && (
              <li className="header__navlist__link">
                <img src={homeIcon} alt="Home icon" />
                <span>Home</span>
              </li>
            )}

            <li className="header__navlist__link">
              <img src={bookmarkIcon} alt="Home icon" />
              <span>Favorites</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export const Header = memo(HeaderComponent);
