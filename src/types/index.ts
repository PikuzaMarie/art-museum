export interface RouterType {
  title: string;
  path: string;
  element: React.ReactElement;
}

interface Thumbnail {
  lqip: string;
  height: number;
  width: number;
  alt_text: string;
}

export interface Artwork {
  id: number;
  title: string;
  artist_title: string | null;
  main_reference_number: string;
  date_display: string;
  place_of_origin: string;
  credit_line: string;
  dimensions: string;
  image_id: string;
  thumbnail: Thumbnail;
  is_public_domain: boolean;
}

export interface ArtworksResponse {
  data: Artwork[];
}

export interface SearchResult {
  _score: number;
  id: number;
  api_model: string;
  api_link: string;
  is_boosted: boolean;
  title: string;
  thumbnail: Thumbnail;
  timestamp: string;
}

export interface SearchResponse {
  data: SearchResult[];
}
