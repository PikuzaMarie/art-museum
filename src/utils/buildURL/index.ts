interface BuildURLParams {
  endpoint: string;
  serverURL: string;
  params: Record<string, string | number>;
}

/**
 * The function constructs a URL with the specified endpoint and parameters
 *
 * @param {Object} props - properties
 * @param {string} props.endpoint - API endpoint
 * @param {string} props.serverURL - server base URL
 * @param {Object} props.params - URL parameters
 *
 * @returns {URL} - constructed URL
 */
export function buildURL({ endpoint, serverURL, params }: BuildURLParams) {
  const url = new URL(endpoint, serverURL);
  Object.entries(params).forEach(([key, value]) =>
    url.searchParams.append(key, String(value)),
  );

  return url;
}
