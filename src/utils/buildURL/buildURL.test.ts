import { buildURL } from './index';

const endpoint = '/api/v1/data';
const serverURL = 'https://example.com';
const params = { q: 'Monet', limit: 100 };
const emptyParams = {};

describe('buildURL', () => {
  it('should construct a URL with the given endpoint, serverURL, and params', () => {
    const expectedURL = `${serverURL}${endpoint}?q=Monet&limit=100`;

    const url = buildURL({ endpoint, serverURL, params });

    expect(url.toString()).toBe(expectedURL);
  });

  it('should handle empty params object', () => {
    const expectedURL = `${serverURL}${endpoint}`;

    const url = buildURL({ endpoint, serverURL, params: emptyParams });

    expect(url.toString()).toBe(expectedURL);
  });
});
