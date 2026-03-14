# RxFit.co — Full SEO & AEO Audit Report
**Date:** March 9, 2026  
**Domain:** [rxfit.co](https://rxfit.co)  
**Audited by:** Antigravity Agent

---

## Executive Summary

RxFit.co has a **solid SEO foundation** with proper meta tags, structured data, analytics tracking, and strong local keyword targeting for "personal training Austin." However, there are **critical gaps in AEO readiness**, image optimization, and mobile performance that are leaving significant traffic on the table.

### Overall Scores

| Category | Score | Grade |
|:---|:---:|:---:|
| **Google PageSpeed — Desktop** | 97/100 | 🟢 A |
| **Google PageSpeed — Mobile** | 78/100 | 🟡 B |
| **Google SEO Score** | 92/100 | 🟢 A |
| **Accessibility Score** | 89/100 | 🟢 A- |
| **Best Practices Score** | 100/100 | 🟢 A+ |
| **AEO Readiness** | ~45/100 | 🔴 D |

---

## Part 1: On-Page SEO Audit

### 1.1 Title Tags

| Page | Title | Length | Verdict |
|:---|:---|:---:|:---:|
| Homepage | `RxFit: Austin Personal Training - Free Assessment` | 51 chars | ✅ Good |
| About | `RxFit: Austin Fitness for Professionals \| About Us` | 52 chars | ✅ Good |
| In-Home Training | `RxFit Austin: In-Home Personal Training Services` | 50 chars | ✅ Good |
| Blog | `RxFit \| Resources` | 19 chars | ⚠️ Too short / generic |
| Free Assessment | `Free RxFit Assessment: Your Fitness Goals Start Here` | 54 chars | ✅ Good |
| Testimonials | `RxFit Testimonials: Personalized Fitness Success Stories` | 57 chars | ✅ Good |

> [!WARNING]
> The **Blog page title** (`RxFit | Resources`) is too generic and misses keyword opportunities. Recommend: `RxFit Blog: Austin Personal Training Tips, Fitness & Nutrition Guides`

### 1.2 Meta Descriptions

| Page | Description | Length | Verdict |
|:---|:---|:---:|:---:|
| Homepage | RxFit: Get stronger and more flexible with our customized personal training plans in Austin, TX... | ~155 chars | ✅ |
| About | RxFit: Austin's fitness experts. Improve your well-being... | ~82 chars | ⚠️ Short |
| In-Home | RxFit provides in-home personal training in Austin... | ~110 chars | ✅ |
| Blog | Discover RxFit resources to start your fitness journey... | ~65 chars | ⚠️ Short |
| Assessment | Free RxFit assessment: Ready to transform your fitness?... | ~118 chars | ✅ |
| Testimonials | See how RxFit's Austin clients achieve fitness success. | ~55 chars | ⚠️ Very short |

> [!IMPORTANT]
> **About**, **Blog**, and **Testimonials** meta descriptions are under 120 characters. Google recommends 150-160 characters to maximize SERP real estate.

### 1.3 Heading Structure (H1s)

| Page | H1 | Verdict |
|:---|:---|:---:|
| Homepage | `YOUR PERSONAL TRAINER IN AUSTIN` | ✅ Strong local keyword |
| About | `Dedicated to making Austin healthier` | ⚠️ Generic |
| In-Home | `Austin's #1 At Home Personal Trainer Services (No Gym Required)` | ✅ Excellent |
| Blog | `Resources to kick off your fitness journey` | ⚠️ Generic |
| Assessment | `Free Assessment` | ⚠️ Too vague |
| Testimonials | `The reviews are in...` | ❌ No keywords |

> [!TIP]
> **H1 recommendations:**
> - About → `About RxFit: Austin's Personal Training & Fitness Experts`
> - Blog → `RxFit Fitness Blog: Training Tips & Nutrition Guides for Austin`
> - Assessment → `Book Your Free Personal Training Assessment in Austin`
> - Testimonials → `Client Success Stories: Austin Personal Training Results`

### 1.4 Image Optimization

| Issue | Details | Severity |
|:---|:---|:---:|
| **Missing alt text** | ~7 blog thumbnails lack alt attributes | 🟡 Medium |
| **Missing alt text** | 3 SVG icons on assessment page | 🟡 Medium |
| **Lazy loading** | ✅ Detected on several images | ✅ Good |
| **Missing og:image** | Homepage has no Open Graph image tag | 🔴 High |
| **Favicon** | Present (150×150 JPG) | ⚠️ Should be .ico or .svg |

> [!CAUTION]
> **Missing `og:image`** means Facebook, LinkedIn, Slack, and other social platforms won't show a preview image when the homepage URL is shared. This is a high-impact fix.

### 1.5 URL Structure

| Page | URL | Issue |
|:---|:---|:---:|
| Assessment | `/free-assesment/` | ❌ **TYPO** — should be `/free-assessment/` |
| All others | Clean, keyword-rich slugs | ✅ Good |

> [!CAUTION]
> The misspelled slug `/free-assesment/` (missing an "s") hurts keyword matching for "free assessment" searches. **Fix:** Create `/free-assessment/` and set up a 301 redirect from the old URL.

---

## Part 2: Technical SEO Audit

### 2.1 Performance Metrics

| Metric | Mobile | Desktop | Target |
|:---|:---:|:---:|:---:|
| **Performance Score** | 78 | 97 | 90+ |
| **First Contentful Paint** | 2.1s | 0.7s | <1.8s |
| **Largest Contentful Paint** | 5.3s | 1.3s | <2.5s |
| **Total Blocking Time** | 0ms | 0ms | <200ms ✅ |
| **Cumulative Layout Shift** | 0 | 0 | <0.1 ✅ |
| **Speed Index** | 2.5s | 0.8s | <3.4s ✅ |

> [!WARNING]
> **Mobile LCP of 5.3s is critical.** Google considers >4s "poor" for Core Web Vitals. This likely affects mobile search rankings. Root causes:
> - Hero image not optimized for mobile (large file size)
> - Image format likely JPEG instead of WebP/AVIF
> - No responsive `srcset` for different screen sizes

### 2.2 Crawlability & Indexing

| Factor | Status | Notes |
|:---|:---:|:---|
| **robots.txt** | ✅ Present | Points to sitemap index |
| **Sitemap** | ✅ Present | Yoast-generated at `/sitemap_index.xml` |
| **SSL/HTTPS** | ✅ Active | Valid certificate |
| **Canonical tags** | ✅ Present | Self-referencing on all pages |
| **404 handling** | ✅ Custom page | Branded: "This is why you never skip leg day" |
| **Mixed content** | ✅ None detected | |
| **Robots meta** | ✅ `follow, index` | Correct directives |
| **hreflang** | ⬜ Not needed | Single language site (en-US) |

### 2.3 Analytics & Tracking

| Tool | Status | ID |
|:---|:---:|:---|
| **Google Analytics 4** | ✅ Active | `G-W642PSR5FW` |
| **Google Tag Manager** | ✅ Active | `GTM-K23PSXPW` |

### 2.4 Structured Data (Schema.org)

| Schema Type | Present | Notes |
|:---|:---:|:---|
| `Organization` | ✅ | Includes address, phone, social profiles |
| `WebSite` | ✅ | Includes SearchAction |
| `BreadcrumbList` | ✅ | On inner pages |
| `ImageObject` | ✅ | On several images |
| `LocalBusiness` | ❌ | **Missing — critical for local SEO** |
| `FAQPage` | ❌ | **Missing — critical for AEO** |
| `Service` | ❌ | Missing |
| `Review`/`AggregateRating` | ❌ | Missing |
| `Person` (Founder) | ❌ | Missing |

---

## Part 3: Content Audit

### 3.1 Word Count by Page

| Page | Word Count | Verdict |
|:---|:---:|:---:|
| Homepage | ~1,298 | ✅ Good |
| About | ~1,450 | ✅ Good |
| In-Home Training | ~2,090 | ✅ Excellent |
| Blog Index | ~652 | ⚠️ Thin |
| Assessment | ~1,247 | ✅ Good |
| Testimonials | ~170 | ❌ Very Thin |

> [!WARNING]
> **Testimonials page has only ~170 words.** It relies on video testimonial embeds but provides almost no searchable text. Google can't index video content without transcripts.

### 3.2 Content Gaps

Based on competitor analysis for "personal training Austin" queries:

| Missing Content | Priority | Impact |
|:---|:---:|:---:|
| **FAQ section** on homepage or services pages | 🔴 Critical | Featured snippets + AEO |
| **Pricing transparency** page | 🟡 Medium | Matches high-intent queries |
| **Area-specific landing pages** (e.g., "personal trainer South Austin") | 🔴 High | Local SEO |
| **Blog post frequency** — appears low | 🟡 Medium | Topical authority |
| **Video transcripts** on testimonials | 🟡 Medium | Indexable content |
| **Trainer profile pages** | 🟡 Medium | E-E-A-T signals |

---

## Part 4: AEO (Answer Engine Optimization) Audit

AEO measures how well your site is optimized for AI-powered search (Google AI Overviews, ChatGPT, Perplexity, voice assistants, etc.).

### 4.1 AEO Readiness Scorecard

| AEO Factor | Status | Score |
|:---|:---:|:---:|
| **FAQ Schema (FAQPage)** | ❌ Missing | 0/15 |
| **Answer-first content format** | ⚠️ Partial | 5/15 |
| **Entity-based optimization** | ⚠️ Partial | 5/10 |
| **Conversational query targeting** | ❌ Missing | 2/10 |
| **Structured data depth** | ⚠️ Basic only | 5/15 |
| **E-E-A-T signals** | ⚠️ Partial | 8/15 |
| **Content freshness signals** | ❌ No dates visible | 3/10 |
| **Citation-worthy data points** | ⚠️ Some stats | 5/10 |
| **Total** | | **33/100** |

### 4.2 Critical AEO Gaps

#### ❌ No FAQ Schema
The site has **zero `FAQPage` structured data**. This is the #1 AEO priority. FAQ schema has one of the highest citation rates in AI-generated answers. Every service page should have 5-8 FAQs with concise, direct answers (40-60 words each).

**Recommended FAQs for homepage:**
- "How much does a personal trainer cost in Austin?"
- "Do RxFit trainers come to my home?"
- "What is included in the free fitness assessment?"
- "How often should I train with a personal trainer?"
- "What areas in Austin does RxFit serve?"

#### ❌ No Answer-First Content Blocks
Blog posts and service pages don't lead with direct answers to common questions. AI systems extract the first 40-60 words after a heading as the "answer." Content should be restructured to front-load direct answers.

#### ❌ No `LocalBusiness` Schema
For a local service business, `LocalBusiness` (or more specifically `HealthAndBeautyBusiness` or `SportsActivityLocation`) schema is essential. This should include:
- Business hours
- Service area (GeoCircle/GeoShape)
- Price ranges
- Aggregate ratings
- Accepted payment methods

#### ❌ No `Review`/`AggregateRating` Schema
Despite having a testimonials page, there's no review schema. This prevents review stars from appearing in search results and limits AI citation of your ratings.

#### ⚠️ Weak E-E-A-T Signals
- No author bios on blog posts
- Founder "Danny" page exists but lacks `Person` schema
- No certifications or credentials markup
- No "About the Author" structured data

#### ⚠️ No Content Freshness Indicators
- Blog posts don't display "Last Updated" dates
- No `dateModified` in structured data
- AI systems prefer recently updated content

---

## Part 5: Priority Recommendations

### 🔴 Critical (Do Immediately)

| # | Action | Impact | Effort |
|:---:|:---|:---|:---:|
| 1 | **Fix `/free-assesment/` typo** — redirect to `/free-assessment/` | Keyword matching | Low |
| 2 | **Add `og:image`** to homepage and all pages | Social sharing, CTR | Low |
| 3 | **Add `FAQPage` schema** to homepage and service pages | AEO, featured snippets | Medium |
| 4 | **Add `LocalBusiness` schema** with full details | Local SEO, AI citations | Medium |
| 5 | **Optimize mobile LCP** — compress hero image, use WebP, add srcset | Core Web Vitals, rankings | Medium |

### 🟡 High Priority (This Month)

| # | Action | Impact | Effort |
|:---:|:---|:---|:---:|
| 6 | **Add alt text** to all blog thumbnails and SVG icons | Image search, accessibility | Low |
| 7 | **Expand testimonials page** with text transcripts | Indexable content | Medium |
| 8 | **Improve Blog title/H1** with keywords | Search visibility | Low |
| 9 | **Add `AggregateRating` schema** from testimonials | Rich snippets in SERPs | Medium |
| 10 | **Lengthen meta descriptions** on About, Blog, Testimonials | Click-through rate | Low |

### 🟢 Growth Opportunities (Next Quarter)

| # | Action | Impact | Effort |
|:---:|:---|:---|:---:|
| 11 | **Create area-specific landing pages** (South Austin, North Austin, etc.) | Local SEO expansion | High |
| 12 | **Add FAQ sections** with answer-first format to all service pages | AEO + voice search | Medium |
| 13 | **Create trainer profile pages** with `Person` schema | E-E-A-T | Medium |
| 14 | **Add blog author bios** with credentials | E-E-A-T, AI trust signals | Low |
| 15 | **Implement `dateModified`** in article schema | Content freshness signals | Low |
| 16 | **Target conversational queries** in blog content (how/what/why format) | Voice search + AI Overviews | High |
| 17 | **Add pricing page** or pricing FAQ schema | High-intent query capture | Medium |

---

## Part 6: Competitive Positioning

### Search Visibility
RxFit appears in search results for core terms like "personal training Austin" and "in-home personal trainer Austin." The brand has:
- ✅ Positive reviews on Thumbtack
- ✅ Features on VoyageAustin and Bark
- ✅ Consistent NAP (Name, Address, Phone) across platforms

### Missing Competitive Signals
- ❌ No Google Business Profile schema integration
- ❌ No press/media page linking to earned coverage
- ❌ Limited backlink profile (based on available data)
- ❌ No comparison content ("RxFit vs gym membership")

---

## Appendix: Screenshots & Evidence

### Homepage
![RxFit Homepage](C:/Users/danie/.gemini/antigravity/brain/3e3e0d7f-32c9-4a25-8b88-a2ee14a152b0/rxfit_homepage_1773081897981.png)

### PageSpeed Results (Mobile)
![PageSpeed Mobile Results](C:/Users/danie/.gemini/antigravity/brain/3e3e0d7f-32c9-4a25-8b88-a2ee14a152b0/pagespeed_results_mobile_1773082312154.png)

### Browser Recordings
- ![Homepage crawl recording](C:/Users/danie/.gemini/antigravity/brain/3e3e0d7f-32c9-4a25-8b88-a2ee14a152b0/rxfit_homepage_audit_1773081872942.webp)
- ![Inner pages audit recording](C:/Users/danie/.gemini/antigravity/brain/3e3e0d7f-32c9-4a25-8b88-a2ee14a152b0/rxfit_inner_pages_1773082061747.webp)
- ![PageSpeed test recording](C:/Users/danie/.gemini/antigravity/brain/3e3e0d7f-32c9-4a25-8b88-a2ee14a152b0/pagespeed_test_1773082229893.webp)
