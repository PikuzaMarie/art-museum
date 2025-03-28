import { ArtworksContextProvider } from '../../store';
import { FavoritesContextProvider } from '../../store';
import { routes } from '../../pages/pagesData';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <ArtworksContextProvider>
      <FavoritesContextProvider>
        <RouterProvider router={routes} />
      </FavoritesContextProvider>
    </ArtworksContextProvider>
  );
}

export default App;
