
const packageJson = require('./package.json');
const isProd = process.env.NODE_ENV === 'production';
//requiring path and fs modules
const path = require('path');
const fs = require('fs');
const listFiles = require('./utils/list-files');


function parseId(bookFileName){
  return path.parse(bookFileName).name
}
// fs.writeFileSync('prep-utils/json/index.json', JSON.stringify(listFiles,null,2))
// [ '59.json' ]
const booksFileNames = listFiles('prep-utils/json');

// https://nextjs.org/docs/api-reference/next.config.js/runtime-configuration
// https://nextjs.org/docs/api-reference/next.config.js/cdn-support-with-asset-prefix
// https://nextjs.org/docs/api-reference/next.config.js/environment-variables
// https://github.com/zeit/next.js/blob/master/errors/export-path-mismatch.md
// https://nextjs.org/learn/excel/static-html-export/exporting-other-pages
const assetsBaseUrl = `/${packageJson.name}`;
const baseUrl =  isProd ? assetsBaseUrl : '';

module.exports = {
    publicRuntimeConfig: {
      NODE_ENV: process.env.NODE_ENV,
      assetsBaseUrl: baseUrl,
      basePath: baseUrl
    },
    assetPrefix: baseUrl,
    exportTrailingSlash: true,
    exportPathMap: async function() {
      const paths = {
        '/': { page: '/' },
        '/books': { page: '/books/index' }
      };
      // const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
      // const data = await res.json();
      // const books = data.map(entry => entry);
  
      booksFileNames.forEach(bookFileName => {
  
        const bookId = parseId(bookFileName);
        // Static pages for books
        paths[`/books/${bookId}`] = { page: `/books/[bookId]`, query: { bookId: bookId} };
        const book = require(path.join(process.cwd(), `prep-utils/json/${bookFileName}`))
        const chapters = book.chapters;
         // Static pages for chapters in each book
        chapters.forEach((chapter, index)=>{
          paths[`/books/${bookId}/${index}`] = { page: `/books/[bookId]/[chapterId]`, query: { bookId: bookId, chapterId: index} };
        })
      });
  
      return paths;
    }
  }

