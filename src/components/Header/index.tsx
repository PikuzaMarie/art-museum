import { memo, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Sidebar } from '../Sidebar';
import museumLogoLight from '../../assets/logos/museum-logo-light.svg';
import homeIcon from '../../assets/icons/home-icon.svg';
import bookmarkIcon from '../../assets/icons/bookmark-light-orange-icon.svg';
import burgerIcon from '../../assets/icons/burger-icon.svg';
import { useDetectOutsideClick } from '../../hooks/useDetectOutsideClick';

interface HeaderProps {
  isHomePage: boolean;
}

const HeaderComponent: React.FC<HeaderProps> = ({ isHomePage }) => {
  const sidebarRef = useRef(null);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleOpenSidebar = () => {
    setSidebarOpen(true);
  };

  const handleCloseSidebar = () => {
    setSidebarOpen(false);
  };

  useDetectOutsideClick({
    ref: sidebarRef,
    isOpen: isSidebarOpen,
    onClose: handleCloseSidebar,
  });

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
            <li>
              <Link to="/favorites" className="header__navlist__link">
                <img src={bookmarkIcon} alt="Bookmark icon" />
                <span>Your favorites</span>
              </Link>
            </li>
          </ul>
        </nav>
        <button onClick={handleOpenSidebar} className="button button-burger">
          <img src={burgerIcon} alt="Menu icon" />
        </button>
      </div>
      <Sidebar
        isHomePage={isHomePage}
        ref={sidebarRef}
        isOpen={isSidebarOpen}
        onClose={handleCloseSidebar}
      />
    </header>
  );
};

export const Header = memo(HeaderComponent);
