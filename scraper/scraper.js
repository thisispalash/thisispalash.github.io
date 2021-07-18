const path = require('path')
const scrape = require('website-scraper');


const download = (urls, dir) => {
  let options = {
    urls: urls,
    directory: path.join(__dirname, dir),
  };
    
  scrape(options).then((result) => {
    console.log(result['filename'], '\t~..~Website succesfully downloaded');
  }).catch((err) => {
    console.log(err, '\n\n~!!~An error occured');
  });
}

/* Change the params to include all subpages */

download(
  ['https://isthispalash.softr.app/'],
  'softr'
)