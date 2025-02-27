import { Route, Routes } from 'react-router-dom';
import { pagesData } from './pagesData';
import { RouterType } from '../types';

export const Router = () => {
  const pagesRoutes = pagesData.map(({ path, element, title }: RouterType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });
  return <Routes>{pagesRoutes}</Routes>;
};
