import { Route, Routes } from 'react-router-dom';
import { RouterType } from '../types';
import { pagesData } from './pagesData';

export const Router = () => {
  const pagesRoutes = pagesData.map(({ path, element, title }: RouterType) => {
    return <Route key={title} path={`/${path}`} element={element} />;
  });
  return <Routes>{pagesRoutes}</Routes>;
};
