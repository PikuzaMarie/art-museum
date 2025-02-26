import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ArtworksContextProvider } from '../../store';
import { FavoritesContextProvider } from '../../store';
import App from './App';

jest.mock('react-hot-toast', () => ({
  Toaster: () => <div data-testid="toaster" />,
}));

jest.mock('../../pages/router', () => ({
  Router: () => <div data-testid="router" />,
}));

describe('App component', () => {
  it('should render App component with all providers, router and toaster', () => {
    render(
      <ArtworksContextProvider>
        <FavoritesContextProvider>
          <App />
        </FavoritesContextProvider>
      </ArtworksContextProvider>,
    );

    expect(screen.getByTestId('router')).toBeInTheDocument();
    expect(screen.getByTestId('toaster')).toBeInTheDocument();
  });
});
