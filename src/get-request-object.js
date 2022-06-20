export function getRequestObject (packageName) {
  const API_ENDPOINT = `https://api.npmjs.org/downloads/point/last-week/${ packageName }`;

  return {
    method: 'get',
    url: API_ENDPOINT,
    responseType: 'json'
  };
}
