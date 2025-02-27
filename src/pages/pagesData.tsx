import { HomePage } from './HomePage';
import { ArtworkPage } from './ArtworkPage';
import { FavoritesPage } from './FavoritesPage';
import { RouterType } from '../types';

export const pagesData: RouterType[] = [
  { path: '', element: <HomePage />, title: 'home' },
  { path: '/artwork/:id', element: <ArtworkPage />, title: 'artwork' },
  { path: '/favorites', element: <FavoritesPage />, title: 'favorites' },
];
