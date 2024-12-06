/**
 * Extract the relevant information from the response.
 *
 * @param {{ data: { downloads: number } }} response
 * @return {number}
 */
export function parseResponse (response) {
  return response.data.downloads;
}
