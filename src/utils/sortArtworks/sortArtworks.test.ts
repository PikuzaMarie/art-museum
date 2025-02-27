import { sortArtworks } from './index';
import { MOCK_ARTWORKS } from '../../constants';
import { Artwork } from '../../types';

describe('sortArtworks', () => {
  it('should sort artworks by artist_title in ascending order', () => {
    const sortedArtworks = sortArtworks(
      MOCK_ARTWORKS as Artwork[],
      'artist-asc',
    );

    expect(sortedArtworks[0].artist_title).toBe('Barry');
    expect(sortedArtworks[1].artist_title).toBe('Maria');
    expect(sortedArtworks[2].artist_title).toEqual(
      sortedArtworks[1].artist_title,
    );
    expect(sortedArtworks[3].artist_title).toBe('Vincent');
    expect(sortedArtworks[4].artist_title).toBeNull();
    expect(sortedArtworks[5].artist_title).toBeNull();
  });

  it('should sort artworks by artist_title in descending order', () => {
    const sortedArtworks = sortArtworks(
      MOCK_ARTWORKS as Artwork[],
      'artist-desc',
    );

    expect(sortedArtworks[0].artist_title).toBe('Vincent');
    expect(sortedArtworks[1].artist_title).toBe('Maria');
    expect(sortedArtworks[2].artist_title).toEqual(
      sortedArtworks[1].artist_title,
    );
    expect(sortedArtworks[3].artist_title).toBe('Barry');
    expect(sortedArtworks[4].artist_title).toBeNull();
    expect(sortedArtworks[5].artist_title).toBeNull();
  });

  it('should sort artworks by title in ascending order', () => {
    const sortedArtworks = sortArtworks(
      MOCK_ARTWORKS as Artwork[],
      'title-asc',
    );

    expect(sortedArtworks[0].title).toBe('Amending');
    expect(sortedArtworks[1].title).toBe('Apple');
    expect(sortedArtworks[2].title).toBe('Apple');
    expect(sortedArtworks[3].title).toBe('California');
    expect(sortedArtworks[4].title).toBe('Capture');
    expect(sortedArtworks[5].title).toBe('Zummer');
  });

  it('should sort artworks by title in descending order', () => {
    const sortedArtworks = sortArtworks(
      MOCK_ARTWORKS as Artwork[],
      'title-desc',
    );

    expect(sortedArtworks[0].title).toBe('Zummer');
    expect(sortedArtworks[1].title).toBe('Capture');
    expect(sortedArtworks[2].title).toBe('California');
    expect(sortedArtworks[3].title).toBe('Apple');
    expect(sortedArtworks[4].title).toBe('Apple');
    expect(sortedArtworks[5].title).toBe('Amending');
  });

  it('should return the original array if criteria is unknown', () => {
    const sortedArtworks = sortArtworks(
      MOCK_ARTWORKS as Artwork[],
      'random-criteria',
    );

    expect(sortedArtworks).toEqual(MOCK_ARTWORKS);
  });
});
