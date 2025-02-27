import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { ArtworkCard } from './index';
import { MOCK_ARTWORK, MOCK_ARTWORK_NOT_PUBLIC } from '../../constants';
import { Artwork } from '../../types';

describe('ArtworkCard', () => {
  beforeAll(() => {
    window.scrollTo = jest.fn();
  });

  beforeEach(() =>
    render(
      <MemoryRouter>
        <ArtworkCard artwork={MOCK_ARTWORK} />
      </MemoryRouter>,
    ),
  );

  it('should render ArtworkCard component', () => {
    const artworkElem = screen.getByRole('article');

    expect(artworkElem).toBeInTheDocument();
  });

  it('should render ArtworkCard with a correct title', () => {
    const titleElem = screen.getByRole('heading', { level: 5 });

    expect(titleElem).toBeInTheDocument();
    expect(titleElem).toHaveTextContent('Apples and computers');
  });

  it('should render ArtworkCard with a correct artist_title', () => {
    const artistTitleElem = screen.getByRole('paragraph');

    expect(artistTitleElem).toBeInTheDocument();
    expect(artistTitleElem).toHaveTextContent('Unknown Malevich');
  });

  it('should render ArtworkCard with a Public field if is_public_domain is true', () => {
    const publicField = screen.getByText('Public');

    expect(publicField).toBeInTheDocument();
  });

  it('should render ArtworkCard with correct src and alt attributes', () => {
    const imgElem = screen.getByTestId('image');

    expect(imgElem).toBeInTheDocument();
    expect(imgElem).toHaveAttribute(
      'src',
      `https://www.artic.edu/iiif/2/imageid8526/full/843,/0/default.jpg`,
    );
    expect(imgElem).toHaveAttribute('alt', 'Alt text for Apples and Computers');
  });

  it('should call goToArtworkPage when the image is clicked', () => {
    const imageElem = screen.getByTestId('image');

    const goToArtworkPageSpy = jest.spyOn(console, 'log').mockImplementation();

    fireEvent.click(imageElem);

    expect(goToArtworkPageSpy).toHaveBeenCalledWith(
      `Navigating to artwork page with ID: ${MOCK_ARTWORK.id}`,
    );

    goToArtworkPageSpy.mockRestore();
  });

  it('should call goToArtworkPage when the description card is clicked', () => {
    const divElem = screen.getByTestId('description');

    const goToArtworkPageSpy = jest.spyOn(console, 'log').mockImplementation();

    fireEvent.click(divElem);

    expect(goToArtworkPageSpy).toHaveBeenCalledWith(
      `Navigating to artwork page with ID: ${MOCK_ARTWORK.id}`,
    );

    goToArtworkPageSpy.mockRestore();
  });
});

describe('ArtworkCard with false value of is_public_domain', () => {
  it('should render ArtworkCard without Public field', () => {
    render(
      <MemoryRouter>
        <ArtworkCard artwork={MOCK_ARTWORK_NOT_PUBLIC as Artwork} />
      </MemoryRouter>,
    );
    const publicField = screen.queryByTestId('public');
    expect(publicField).toBeNull();
  });
});

describe('ArtworkCard with prop: variant="small"', () => {
  it('should render ArtworkCard with class "artwork small"', () => {
    render(
      <MemoryRouter>
        <ArtworkCard artwork={MOCK_ARTWORK} variant="small" />
      </MemoryRouter>,
    );
    const artworkElem = screen.getByRole('article');

    expect(artworkElem).toHaveClass('artwork small');
  });
});
