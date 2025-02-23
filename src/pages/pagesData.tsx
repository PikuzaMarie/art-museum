import { HomePage } from './HomePage';
import { RouterType } from '../types';
import { ArtworkPage } from './ArtworkPage';
import { FavoritesPage } from './FavoritesPage';

export const pagesData: RouterType[] = [
  { path: '', element: <HomePage />, title: 'home' },
  { path: '/artwork/:id', element: <ArtworkPage />, title: 'artwork' },
  { path: '/favorites', element: <FavoritesPage />, title: 'favorites' },
];
