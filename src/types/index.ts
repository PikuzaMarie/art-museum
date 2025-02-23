export interface RouterType {
  title: string;
  path: string;
  element: React.ReactElement;
}

export interface Artwork {
  id: number;
  title: string;
  artist_title: string;
  main_reference_number: string;
  date_display: string;
  place_of_origin: string;
  credit_line: string;
  dimensions: string;
  image_id: string;
  thumbnail: {
    lqip: string;
    height: number;
    width: number;
    alt_text: string;
  };
  is_public_domain: boolean;
}

export interface ArtworksResponse {
  data: Artwork[];
}
