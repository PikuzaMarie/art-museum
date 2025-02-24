interface BuildURLProps {
  endpoint: string;
  serverURL: string;
  params: Record<string, string | number>;
}

export function buildURL({ endpoint, serverURL, params }: BuildURLProps) {
  const url = new URL(endpoint, serverURL);
  Object.entries(params).forEach(([key, value]) =>
    url.searchParams.append(key, String(value)),
  );
  console.log(url);

  return url;
}
