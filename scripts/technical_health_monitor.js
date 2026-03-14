const axios = require('axios');
require('dotenv').config();

// Configuration
const TARGET_URLS = [
    'https://rxfit.co/',
    'https://rxfit.co/services/in-home-personal-training-austin/'
];
const PAGE_SPEED_API_KEY = process.env.GOOGLE_PAGE_SPEED_API_KEY;

// E-E-A-T Pillar 4: Trust (Technical Health & Speed)
async function runHealthCheck() {
    console.log('Starting SEO Technical Health & Speed Audit...\n');
    let report = [];

    for (const url of TARGET_URLS) {
        console.log(`\n--- Auditing: ${url} ---`);
        let pageData = { url };

        // 1. Uptime & TTFB Test
        try {
            const startTime = Date.now();
            const response = await axios.get(url, { timeout: 10000 });
            const endTime = Date.now();
            pageData.status = response.status;
            pageData.ttfb = `${endTime - startTime}ms`;
            console.log(`[+] Status: ${response.status} OK`);
            console.log(`[+] Time to First Byte (TTFB): ${pageData.ttfb}`);
        } catch (error) {
            pageData.status = error.response ? error.response.status : 'DOWN';
            console.error(`[-] Error accessing ${url}: ${pageData.status}`);
        }

        // 2. PageSpeed Insights (Mobile LCP is critical for executives)
        if (PAGE_SPEED_API_KEY) {
            try {
                console.log('Running Google PageSpeed API (Mobile)...');
                const psiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&key=${PAGE_SPEED_API_KEY}`;
                
                const psiResponse = await axios.get(psiUrl);
                const metrics = psiResponse.data.lighthouseResult.audits;
                
                pageData.mobileScore = psiResponse.data.lighthouseResult.categories.performance.score * 100;
                pageData.lcp = metrics['largest-contentful-paint'].displayValue;
                pageData.cls = metrics['cumulative-layout-shift'].displayValue;

                console.log(`[+] Mobile Performance Score: ${pageData.mobileScore}`);
                console.log(`[+] Largest Contentful Paint (LCP): ${pageData.lcp}`);
                console.log(`[+] Cumulative Layout Shift (CLS): ${pageData.cls}`);
                
                if (parseFloat(pageData.lcp) > 2.5) {
                    console.warn(`[!] WARNING: LCP is ${pageData.lcp} (Target is < 2.5s). Need image optimization.`);
                }
            } catch (error) {
                console.error(`[-] Failed to fetch PageSpeed data: ${error.message}`);
            }
        } else {
            console.log('[!] Skipping PageSpeed check: GOOGLE_PAGE_SPEED_API_KEY not found in environment.');
        }

        report.push(pageData);
    }

    console.log('\n--- Health Audit Complete ---');
    
    // In the future: Insert logic here to push 'report' directly to the E-E-A-T Google Sheet
    // using the Google Sheets API.
    return report;
}

runHealthCheck();
