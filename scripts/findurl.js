const axios = require('axios');
const cheerio = require('cheerio');

async function getInHomeUrl() {
  try {
    const res = await axios.get('https://rxfit.co/page-sitemap.xml', {
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }
    });
    const $ = cheerio.load(res.data, { xmlMode: true });
    $('loc').each((i, el) => {
      const url = $(el).text();
      if (url.includes('in-home')) {
        console.log(url);
      }
    });
  } catch(e) { console.error('Error fetching page sitemap:', e.message); }
}

getInHomeUrl();
