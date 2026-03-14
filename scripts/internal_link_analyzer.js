const axios = require('axios');
const cheerio = require('cheerio');
const URL = require('url');

// Configuration
const BASE_URL = 'https://rxfit.co';
// A simplified list of URLs to scan for this example. 
// In production, this would parse the sitemap_index.xml to get all URLs.
const URLS_TO_SCAN = [
    'https://rxfit.co/',
    'https://rxfit.co/about/',
    'https://rxfit.co/services/in-home-personal-training-austin/',
    'https://rxfit.co/resources/',
    'https://rxfit.co/free-assessment/'
];

// E-E-A-T Pillar 1: Experience (Internal Link Graph)
async function runInternalLinkAudit() {
    console.log('Starting Internal Link Graph Analyzer...\n');
    let linkGraph = {};
    let allFoundLinks = new Set();

    for (const url of URLS_TO_SCAN) {
        console.log(`Scanning: ${url}`);
        linkGraph[url] = { outgoingInternal: [], incomingCount: 0 };

        try {
            const response = await axios.get(url);
            const $ = cheerio.load(response.data);

            // Find all anchor tags
            $('a').each((i, link) => {
                let href = $(link).attr('href');
                if (!href) return;

                // Resolve relative URLs to absolute
                const resolvedUrl = new URL.URL(href, BASE_URL).href;

                // Check if it's an internal link (ignoring anchors/hashlinks on the same page)
                if (resolvedUrl.startsWith(BASE_URL) && !resolvedUrl.includes('#')) {
                    // Normalize by removing trailing slashes for comparison
                    const normalizedUrl = resolvedUrl.replace(/\/$/, "");
                    
                    if (!linkGraph[url].outgoingInternal.includes(normalizedUrl)) {
                        linkGraph[url].outgoingInternal.push(normalizedUrl);
                    }
                    allFoundLinks.add(normalizedUrl);
                }
            });
            console.log(`  -> Found ${linkGraph[url].outgoingInternal.length} unique internal outgoing links.`);
        } catch (error) {
            console.error(`[-] Error crawling ${url}: ${error.message}`);
        }
    }

    console.log('\n--- Calculating Incoming Links (Detecting Orphans) ---');
    
    // Calculate incoming link counts for the pages we scanned
    for (const targetUrl of URLS_TO_SCAN) {
        const normalizedTarget = targetUrl.replace(/\/$/, "");
        let incomingCount = 0;
        
        for (const sourceUrl of URLS_TO_SCAN) {
            if (sourceUrl === targetUrl) continue; // Don't count self-referencing links
            
            const normalizedSourceOutbox = linkGraph[sourceUrl].outgoingInternal.map(u => u.replace(/\/$/, ""));
            if (normalizedSourceOutbox.includes(normalizedTarget)) {
                incomingCount++;
            }
        }
        
        linkGraph[targetUrl].incomingCount = incomingCount;
        console.log(`[+] ${targetUrl} has ${incomingCount} incoming internal links from the scanned pool.`);
        
        if (incomingCount === 0 && targetUrl !== BASE_URL && targetUrl !== BASE_URL + '/') {
            console.warn(`[!] ORPHAN PAGE WARNING: ${targetUrl} has 0 incoming internal links!`);
        }
    }

    console.log('\n--- Link Analysis Complete ---');
    // Future integration: Push orphan page warnings to the E-E-A-T Google Sheet
    return linkGraph;
}

runInternalLinkAudit();
