import { HomePage } from './HomePage';
import { ArtworkPage } from './ArtworkPage';
import { FavoritesPage } from './FavoritesPage';
import { RouterType } from '../types';
import { NotFoundPage } from './NotFoundPage';

export const pagesData: RouterType[] = [
  { path: '', element: <HomePage />, title: 'home' },
  { path: '/artwork/:id', element: <ArtworkPage />, title: 'artwork' },
  { path: '/favorites', element: <FavoritesPage />, title: 'favorites' },
  { path: '*', element: <NotFoundPage />, title: 'not-found' },
];
