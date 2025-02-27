/**
 * The function fetches data from the specified URL
 *
 * @param {URL} url - URL to fetch data from
 *
 * @returns {Promise<T>} - a promise that resolves to the fetched data
 */
export async function fetchData<T>(url: URL) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch artworks. HTTP Error: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
