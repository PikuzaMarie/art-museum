import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { FavoritesContext } from '../../store';
import { FavoriteButton } from './index';
import {
  MOCK_ARTWORK_FAVORITE,
  MOCK_ARTWORK_NOT_FAVORITE,
} from '../../constants';
import { Artwork } from '../../types';

it('should handle favorite add', () => {
  const mockFavoriteContextValue = {
    favoriteArtworks: [MOCK_ARTWORK_FAVORITE as Artwork],
    handleFavoriteAdd: jest.fn(),
    handleFavoriteRemove: jest.fn(),
  };

  render(
    <FavoritesContext.Provider value={mockFavoriteContextValue}>
      <FavoriteButton artwork={MOCK_ARTWORK_NOT_FAVORITE as Artwork} />
    </FavoritesContext.Provider>,
  );

  const buttonElem = screen.getByRole('button');
  fireEvent.click(buttonElem);

  expect(mockFavoriteContextValue.handleFavoriteAdd).toHaveBeenCalledWith(
    MOCK_ARTWORK_NOT_FAVORITE,
  );
  expect(mockFavoriteContextValue.handleFavoriteRemove).not.toHaveBeenCalled();
});

it('should handle favorite remove', () => {
  const mockFavoriteContextValue = {
    favoriteArtworks: [MOCK_ARTWORK_FAVORITE as Artwork],
    handleFavoriteAdd: jest.fn(),
    handleFavoriteRemove: jest.fn(),
  };

  render(
    <FavoritesContext.Provider value={mockFavoriteContextValue}>
      <FavoriteButton artwork={MOCK_ARTWORK_FAVORITE as Artwork} />
    </FavoritesContext.Provider>,
  );

  const buttonElem = screen.getByRole('button');
  fireEvent.click(buttonElem);

  expect(mockFavoriteContextValue.handleFavoriteRemove).toHaveBeenCalledWith(
    MOCK_ARTWORK_FAVORITE.id,
  );
  expect(mockFavoriteContextValue.handleFavoriteAdd).not.toHaveBeenCalled();
});
