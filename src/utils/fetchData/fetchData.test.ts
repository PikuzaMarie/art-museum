import { MOCK_URL, MOCK_DATA } from '../../constants';
import { fetchData } from './index';

describe('fetchData', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('should return data when fetch is successful', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: jest.fn().mockResolvedValue(MOCK_DATA),
    });

    const data = await fetchData(MOCK_URL);
    expect(data).toEqual(MOCK_DATA);
  });

  it('should throw an error when response is not ok', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      status: 500,
    });

    await expect(fetchData(MOCK_URL)).rejects.toThrow(
      'Failed to fetch artworks. HTTP Error: 500',
    );
  });
});
