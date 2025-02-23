import { memo } from 'react';
import museumLogoLight from '../../assets/logos/museum-logo-light.svg';
import homeIcon from '../../assets/icons/home-icon.svg';
import bookmarkIcon from '../../assets/icons/bookmark-light-orange-icon.svg';
import { Link } from 'react-router-dom';

interface HeaderProps {
  isHomePage: boolean;
}

const HeaderComponent: React.FC<HeaderProps> = ({ isHomePage }) => {
  return (
    <header className="header">
      <div className="wrapper">
        <Link to="/" className="header__navlist__link">
          <img src={museumLogoLight} alt="Museum icon with museum title" />
        </Link>
        <nav className="header__nav">
          <ul className="header__navlist">
            {!isHomePage && (
              <li>
                <Link to="/" className="header__navlist__link">
                  <img src={homeIcon} alt="Home icon" />
                  <span>Home</span>
                </Link>
              </li>
            )}

            <li className="header__navlist__link">
              <img src={bookmarkIcon} alt="Bookmark icon" />
              <span>Your favorites</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export const Header = memo(HeaderComponent);
