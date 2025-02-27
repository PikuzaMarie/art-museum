import { Artwork } from '../../types';

/**
 * The function sorts artworks based on the specified criteria
 *
 * @param {Array} data - array of artworks
 * @param {string} criteria - sorting criteria
 *
 * @returns {Array} - sorted array of artworks
 */
export const sortArtworks = (data: Artwork[], criteria: string) => {
  const dataToSort = [...data];

  switch (criteria) {
    case 'title-asc':
      return dataToSort.sort((a, b) => a.title.localeCompare(b.title));

    case 'title-desc':
      return dataToSort.sort((a, b) => b.title.localeCompare(a.title));

    case 'artist-asc': {
      return dataToSort.sort((a, b) => {
        if (a.artist_title && b.artist_title) {
          return a.artist_title.localeCompare(b.artist_title);
        }
        if (!a.artist_title && b.artist_title) return 1;
        if (a.artist_title && !b.artist_title) return -1;
        return 0;
      });
    }

    case 'artist-desc': {
      return dataToSort.sort((a, b) => {
        if (a.artist_title && b.artist_title) {
          return b.artist_title.localeCompare(a.artist_title);
        }
        if (!a.artist_title && b.artist_title) return 1;
        if (a.artist_title && !b.artist_title) return -1;
        return 0;
      });
    }

    default:
      return dataToSort;
  }
};
