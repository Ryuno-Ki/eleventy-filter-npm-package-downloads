# eleventy-filter-npm-package-downloads

![CircleCI status](https://img.shields.io/circleci/project/github/Ryuno-Ki/eleventy-filter-npm-package-downloads.svg?style=popout-square)
[![Known Vulnerabilities](https://snyk.io/test/github/Ryuno-Ki/eleventy-filter-npm-package-downloads/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Ryuno-Ki/eleventy-npm-package-downloads?targetFile=package.json)
[![codecov](https://codecov.io/gh/Ryuno-Ki/eleventy-filter-npm-package-downloads/branch/master/graph/badge.svg)](https://codecov.io/gh/Ryuno-Ki/eleventy-npm-package-downloads)
[![Greenkeeper badge](https://badges.greenkeeper.io/Ryuno-Ki/eleventy-filter-npm-package-downloads.svg)](https://greenkeeper.io/)
![Maintainability](https://img.shields.io/codeclimate/maintainability/Ryuno-Ki/eleventy-filter-npm-package-downloads.svg?style=popout-square)


Filter for 11ty to show the number of downloads of a npm package.
Based on the [work](https://github.com/11ty/eleventy/issues/471#issuecomment-482988986)
of [@alex-page](https://github.com/alex-page)!

## Installation

That's easy!

```sh
npm install eleventy-filter-npm-package-downloads
```

## Usage

Add it to your `.eleventy.js` like so:

```js
const npmPackageDownloads = require('eleventy-filter-npm-package-downloads');

module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksAsyncFilter('packageDownloads', async (packageName, callback) => {
    await npmPackageDownloads(packageName, callback);
  });

  return {
    templateFormats: [
      'html',
      'md',
      'njk'
    ]
  };
};
```

Now you can use it in your layout templates:

```njk
You've got {{ '@11ty/eleventy' | packageDownloads }} downloads this week!
```

## License

MIT. See [LICENSE](./LICENSE)
