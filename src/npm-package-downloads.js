import axios from 'axios';

import { getRequestObject } from './get-request-object.js';
import { handleError } from './handle-error.js';
import { parseResponse } from './parse-response.js';


/**
 * Expose Eleventy filter for querying NPM for download stats.
 *
 * @param {string} packageName
 * @param {function} callback
 */
export async function npmPackageDownloads (packageName, callback) {
  const requestObject = getRequestObject(packageName);

  try {
    const response = await axios(requestObject);
    const downloads = await parseResponse(response);
    callback(null, downloads)
  } catch (reason) {
    handleError(reason);
    callback(reason);
  }
}
