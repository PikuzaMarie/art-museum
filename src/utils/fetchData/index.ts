export async function fetchData<T>(url: URL) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Failed to fetch artworks. HTTP Error: ${response.status}`);
  }

  return response.json() as Promise<T>;
}
