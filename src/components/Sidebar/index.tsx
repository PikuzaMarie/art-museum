import { Ref } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/icons/home-icon.svg';
import bookmarkIcon from '../../assets/icons/bookmark-light-orange-icon.svg';
import clearIcon from '../../assets/icons/clear-icon.svg';

interface SidebarProps {
  isHomePage: boolean;
  ref: Ref<HTMLElement>;
  isOpen: boolean;
  onClose: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  isHomePage,
  ref,
  isOpen,
  onClose,
}) => {
  return (
    <aside ref={ref} style={{ display: isOpen ? 'block' : 'none' }}>
      <button onClick={onClose}>
        <img src={clearIcon} alt="Clear icon" />
      </button>
      <nav>
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
    </aside>
  );
};
