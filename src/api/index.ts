import { ArtworksResponse } from '../types';

const serverURL = 'https://api.artic.edu/api/v1/artworks';
const numberOfItems = 100;
const reqestedFields = [
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
  const response = await fetch(
    `${serverURL}?limit=${numberOfItems}&fields=${reqestedFields}`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch artworks. Some error occured on server');
  }

  const responseData: ArtworksResponse =
    await (response.json() as Promise<ArtworksResponse>);

  return responseData;
}
