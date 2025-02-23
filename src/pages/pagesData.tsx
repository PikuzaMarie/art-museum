import { HomePage } from './HomePage';
import { RouterType } from '../types';
import { ArtworkPage } from './ArtworkPage';

export const pagesData: RouterType[] = [
  { path: '', element: <HomePage />, title: 'home' },
  { path: '/artwork/:id', element: <ArtworkPage />, title: 'artwork' },
];
