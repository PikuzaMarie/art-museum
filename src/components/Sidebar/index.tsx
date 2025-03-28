import { Ref } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../../assets/icons/home-icon.svg';
import bookmarkIcon from '../../assets/icons/bookmark-light-orange-icon.svg';
import clearIcon from '../../assets/icons/clear-icon.svg';
import { ROUTES } from '../../constants';

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
    <aside ref={ref} className={`sidebar ${isOpen && 'sidebar_visible'}`}>
      <button onClick={onClose} className="button button-close">
        <img src={clearIcon} alt="Clear icon" />
      </button>
      <nav>
        <ul className="sidebar__navlist">
          {!isHomePage && (
            <li>
              <Link to={ROUTES.home} className="sidebar__navlist__link">
                <img src={homeIcon} alt="Home icon" />
                <span>Home</span>
              </Link>
            </li>
          )}
          <li>
            <Link to={ROUTES.favorites} className="sidebar__navlist__link">
              <img src={bookmarkIcon} alt="Bookmark icon" />
              <span>Your favorites</span>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};
