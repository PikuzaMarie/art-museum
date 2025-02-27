import { SERVER_URL, ARTWORKS_ENDPOINT, MOCK_PARAMS } from '../../constants';
import { buildURL } from './index';

describe('buildURL', () => {
  it('should construct a URL with the given endpoint, url, and params', () => {
    const expectedURL = `${SERVER_URL}${ARTWORKS_ENDPOINT}?q=Monet&limit=100`;

    const url = buildURL({
      endpoint: ARTWORKS_ENDPOINT,
      serverURL: SERVER_URL,
      params: MOCK_PARAMS,
    });

    expect(url.toString()).toBe(expectedURL);
  });

  it('should handle empty params object', () => {
    const expectedURL = `${SERVER_URL}${ARTWORKS_ENDPOINT}`;

    const url = buildURL({
      endpoint: ARTWORKS_ENDPOINT,
      serverURL: SERVER_URL,
      params: {},
    });

    expect(url.toString()).toBe(expectedURL);
  });
});
