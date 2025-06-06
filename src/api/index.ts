import { buildURL } from '../utils/buildURL';
import { fetchData } from '../utils/fetchData';
import {
  ARTWORKS_ENDPOINT,
  ARTWORKS_SEARCH_ENDPOINT,
  SERVER_URL,
  NUMBER_OF_ITEMS,
  REQUESTED_FIELDS,
} from '../constants';
import { ArtworksResponse, SearchResponse } from '../types';

/**
 * The function fetches available artworks
 *
 * @returns {Promise<ArtworksResponse>} - a promise that resolves to the response
 * containing the available artworks
 */
export async function fetchAvailableArtworks() {
  const url = buildURL({
    endpoint: ARTWORKS_ENDPOINT,
    serverURL: SERVER_URL,
    params: {
      limit: NUMBER_OF_ITEMS,
      fields: REQUESTED_FIELDS,
    },
  });

  return fetchData<ArtworksResponse>(url);
}

/**
 * The function fetches search results for artworks based on the search term provided
 *
 * @param searchTerm - the term to search for artworks
 *
 * @returns {Promise<ArtworksResponse>} - a promise that resolves to the response
 * containing the artworks data
 */
export async function fetchSearchResults(searchTerm: string) {
  const searchURL = buildURL({
    endpoint: ARTWORKS_SEARCH_ENDPOINT,
    serverURL: SERVER_URL,
    params: {
      q: searchTerm,
      limit: NUMBER_OF_ITEMS,
    },
  });

  const searchResponse = await (fetchData(
    searchURL,
  ) as Promise<SearchResponse>);
  if (searchResponse.data.length === 0) return { data: [] };

  const ids = searchResponse.data
    .map(result => result.api_link.split('/').pop())
    .join(',');

  const artworksURL = buildURL({
    endpoint: ARTWORKS_ENDPOINT,
    serverURL: SERVER_URL,
    params: {
      ids: ids,
      limit: NUMBER_OF_ITEMS,
      fields: REQUESTED_FIELDS,
    },
  });

  return fetchData(artworksURL) as Promise<ArtworksResponse>;
}
