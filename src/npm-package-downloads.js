const axios = require('axios');

const getRequestObject = require('./get-request-object.js');
const handleError = require('./handle-error.js');
const parseResponse = require('./parse-response.js');


const npmPackageDownloads = async function npmPackageDownloads (packageName, callback) {
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

module.exports = npmPackageDownloads;
