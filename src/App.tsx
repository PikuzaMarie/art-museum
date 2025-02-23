import { BrowserRouter } from 'react-router-dom';
import { Router } from './pages/router';
import { ArtworksContextProvider } from './store';

function App() {
  return (
    <ArtworksContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ArtworksContextProvider>
  );
}

export default App;
