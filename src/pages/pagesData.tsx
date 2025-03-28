import { HomePage } from './HomePage';
import { ArtworkPage } from './ArtworkPage';
import { FavoritesPage } from './FavoritesPage';
import { NotFoundPage } from './NotFoundPage';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTES } from '../constants';

export const routes = createBrowserRouter([
  { path: ROUTES.home, element: <HomePage /> },
  { path: ROUTES.artwork, element: <ArtworkPage /> },
  { path: ROUTES.favorites, element: <FavoritesPage /> },
  { path: '*', element: <NotFoundPage /> },
]);
