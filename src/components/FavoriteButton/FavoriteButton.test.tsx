import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { FavoritesContext } from '../../store';
import { Artwork } from '../../types';
import { FavoriteButton } from './index';

const mockFavoriteArtwork: Partial<Artwork> = {
  id: 18,
};

const mockNotFavoriteArtwork: Partial<Artwork> = {
  id: 5,
};

it('should handle favorite add', () => {
  const mockFavoriteContextValue = {
    favoriteArtworks: [mockFavoriteArtwork as Artwork],
    handleFavoriteAdd: jest.fn(),
    handleFavoriteRemove: jest.fn(),
  };

  render(
    <FavoritesContext.Provider value={mockFavoriteContextValue}>
      <FavoriteButton artwork={mockNotFavoriteArtwork as Artwork} />
    </FavoritesContext.Provider>,
  );

  const buttonElem = screen.getByRole('button');
  fireEvent.click(buttonElem);

  expect(mockFavoriteContextValue.handleFavoriteAdd).toHaveBeenCalledWith(
    mockNotFavoriteArtwork,
  );
  expect(mockFavoriteContextValue.handleFavoriteRemove).not.toHaveBeenCalled();
});

it('should handle favorite remove', () => {
  const mockFavoriteContextValue = {
    favoriteArtworks: [mockFavoriteArtwork as Artwork],
    handleFavoriteAdd: jest.fn(),
    handleFavoriteRemove: jest.fn(),
  };

  render(
    <FavoritesContext.Provider value={mockFavoriteContextValue}>
      <FavoriteButton artwork={mockFavoriteArtwork as Artwork} />
    </FavoritesContext.Provider>,
  );

  const buttonElem = screen.getByRole('button');
  fireEvent.click(buttonElem);

  expect(mockFavoriteContextValue.handleFavoriteRemove).toHaveBeenCalledWith(
    mockFavoriteArtwork.id,
  );
  expect(mockFavoriteContextValue.handleFavoriteAdd).not.toHaveBeenCalled();
});
