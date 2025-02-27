import { useEffect, useState } from 'react';
import { Artwork } from '../types';

/**
 * Custom hook that manages state of favorite artworks stored in sessionStorage
 *
 * @returns {Object} - functions and state for managing favorite artworks
 */
export function useFavorites() {
  const [favoriteArtworks, setFavoriteItems] = useState<Artwork[]>([]);

  useEffect(() => {
    const parsedItems: Artwork[] = [];
    const itemKeys = Object.keys(sessionStorage);

    for (const key of itemKeys) {
      const stringItem = sessionStorage.getItem(key);
      if (stringItem) {
        const parsedItem = JSON.parse(stringItem) as Artwork;
        parsedItems.push(parsedItem);
      }
    }

    setFavoriteItems(parsedItems);
  }, []);

  const handleFavoriteAdd = (artwork: Artwork) => {
    const artworkId = String(artwork.id);
    if (!sessionStorage.getItem(artworkId)) {
      sessionStorage.setItem(artworkId, JSON.stringify(artwork));
      setFavoriteItems(prevItems => [...prevItems, artwork]);
    }
  };

  const handleFavoriteRemove = (artworkId: number) => {
    sessionStorage.removeItem(String(artworkId));
    setFavoriteItems(prevItems =>
      prevItems.filter(item => item.id !== artworkId),
    );
  };

  return {
    favoriteArtworks,
    handleFavoriteAdd,
    handleFavoriteRemove,
  };
}
