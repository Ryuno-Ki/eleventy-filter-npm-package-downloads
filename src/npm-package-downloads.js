const axios = require('axios');

const getRequestObject = require('./get-request-object.js');
const handleError = require('./handle-error.js');
const parseResponse = require('./parse-response.js');


const npmPackageDownloads = async function npmPackageDownloads (packageName) {
  const requestObject = getRequestObject(packageName);
  return axios(requestObject)
    .then(parseResponse)
    .catch(handleError);
}

module.exports = npmPackageDownloads;
