import { fetchData } from './index';

const mockURL = new URL('https://example.com/api/v1/data');
const mockData = { data: 'mock data' };

describe('fetchData', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return data when fetch is successful', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(mockData),
    });

    const data = await fetchData(mockURL);
    expect(data).toEqual(mockData);
  });

  it('should throw an error when response is not ok', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
    });

    await expect(fetchData(mockURL)).rejects.toThrow(
      'Failed to fetch artworks. HTTP Error: 500',
    );
  });
});
