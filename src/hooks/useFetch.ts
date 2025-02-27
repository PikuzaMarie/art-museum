import { useEffect, useState } from 'react';
import { Artwork, ArtworksResponse } from '../types';

interface UseFetchProps {
  fetchFn: () => Promise<ArtworksResponse>;
}

/**
 * Custom hook that manages the fetching of artworks
 *
 * @param {Object} props - properties
 * @param {Function} props.fetchFn - function to fetch artworks
 *
 * @returns {Object} - state and functions for managing the fetch process
 */
export function useFetch({ fetchFn }: UseFetchProps) {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      setError(null);

      try {
        const data: ArtworksResponse = await fetchFn();

        setArtworks(data.data);
        setIsFetching(false);
      } catch (error) {
        const message =
          error instanceof Error
            ? error.message
            : 'Error occured while fetching data. Check your internet connection';
        setError(message);
        setIsFetching(false);
      }
    }

    void fetchData();
  }, [fetchFn]);

  return { artworks, setArtworks, isFetching, error };
}
