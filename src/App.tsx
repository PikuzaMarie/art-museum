import { BrowserRouter } from 'react-router-dom';
import { Router } from './pages/router';
import { ArtworksContextProvider } from './store';
import { FavoritesContextProvider } from './store';

function App() {
  return (
    <ArtworksContextProvider>
      <FavoritesContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </FavoritesContextProvider>
    </ArtworksContextProvider>
  );
}

export default App;
