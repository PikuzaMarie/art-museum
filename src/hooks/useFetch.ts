import { useEffect, useState } from 'react';
import { Artwork, ArtworksResponse } from '../types';

interface UseFetchProps {
  fetchFn: () => Promise<ArtworksResponse>;
}

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

  return { artworks, isFetching, error };
}
