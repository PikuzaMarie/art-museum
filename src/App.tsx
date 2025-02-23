import { BrowserRouter } from 'react-router-dom';
import { Router } from './pages/router';
import { ArtworksContextProvider } from './store';
import { FavoritesContextProvider } from './store';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <ArtworksContextProvider>
      <FavoritesContextProvider>
        <BrowserRouter>
          <Router />
          <Toaster />
        </BrowserRouter>
      </FavoritesContextProvider>
    </ArtworksContextProvider>
  );
}

export default App;
