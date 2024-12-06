# eleventy-filter-npm-package-downloads

[![Known Vulnerabilities](https://snyk.io/test/github/Ryuno-Ki/eleventy-filter-npm-package-downloads/badge.svg?targetFile=package.json)](https://snyk.io/test/github/Ryuno-Ki/eleventy-filter-npm-package-downloads?targetFile=package.json)

Filter for 11ty to show the number of downloads of a npm package.
Based on the [work](https://github.com/11ty/eleventy/issues/471#issuecomment-482988986)
of [@alex-page](https://github.com/alex-page)!

## Installation

That's easy!

```sh
npm install eleventy-filter-npm-package-downloads
```

## Usage

Add it to your `eleventy.config.js` like so:

```js
import { npmPackageDownloads } from 'eleventy-filter-npm-package-downloads';

export default function (eleventyConfig) {
  eleventyConfig.addNunjucksAsyncFilter('packageDownloads',
  async (packageName, callback) => {
    await npmPackageDownloads(packageName, callback);
  });

  return {
    markdownTemplateEngine: "njk"
  };
};
```

Now you can use it in your layout templates:

```njk
You've got {{ '@11ty/eleventy' | packageDownloads }} downloads last week!
```

## License

MIT. See [LICENSE](./LICENSE)
