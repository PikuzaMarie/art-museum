import { buildURL } from '../utils/buildURL';
import { fetchData } from '../utils/fetchData';
import { ArtworksResponse, SearchResponse } from '../types';

const SERVER_URL = 'https://api.artic.edu';
const ARTWORKS_ENDPOINT = '/api/v1/artworks';
const ARTWORKS_SEARCH_ENDPOINT = ARTWORKS_ENDPOINT + '/search';
const NUMBER_OF_ITEMS = 100;
const REQUESTED_FIELDS = [
  'id',
  'title',
  'artist_title',
  'main_reference_number',
  'date_display',
  'place_of_origin',
  'credit_line',
  'dimensions',
  'image_id',
  'thumbnail',
  'is_public_domain',
].join(',');

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
