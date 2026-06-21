# Shri Anjaneya Showcase Site — Prioritized Improvement Plan

Scope: Next.js showcase site (no commerce; WhatsApp enquiry only; expanding to full Satvik-style category range). 64 audit items deduped/merged below into actionable fixes, highest-impact first within each group.

> Cross-cutting note: **sitemap/robots** and **BreadcrumbList JSON-LD** each appeared in both SEO and AEO audits — merged into single items (see SEO-1 and AEO-2). Several responsive items the audit flagged as "already correct" (SearchBar width, ProductInfo trust badge grid) are folded into verify-only notes.

---

## 1. Security

| # | Severity | Fix (one-line) | File(s) |
|---|----------|----------------|---------|
| SEC-1 | High | Upgrade Next.js 16.2.1 → 16.2.9 (`npm i next@16.2.9`); clears 11+ CVEs **and** the bundled-PostCSS XSS (GHSA-qx2v-qp2m-jg93) in one move. | `package.json` (resolves `node_modules/next/node_modules/postcss`) |
| SEC-2 | Medium | Drop `'unsafe-inline'` from `script-src`/`style-src`; move to nonce-based CSP. | `next.config.ts` (lines 5–7) |
| SEC-3 | Medium | Tighten Google image `remotePatterns` pathname from `/aida-public/**` to the exact product-folder prefix. | `next.config.ts` (lines 31–36) |
| SEC-4 | Low | Add `typeof window` / `useEffect` guard around localStorage language read to harden against future SSR hydration mismatch. | `src/context/LanguageContext.tsx` (lines 18–20) |
| SEC-5 | Low | No code change — document that the `wa.me` `window.open()` URL is safe (hardcoded domain + `encodeURIComponent`). | `src/components/shop/ProductCard.tsx` (line 56) |

> SEC-1 merges the two High items (outdated Next.js + vulnerable PostCSS) since the same upgrade fixes both.

---

## 2. Satvik-Parity Navigation & Categories

| # | Severity | Fix (one-line) | File(s) |
|---|----------|----------------|---------|
| NAV-1 | High | Extend `ProductCategory` union with `brass-idols`, `jap-mala`, `rudraksha`, `astro-products`, `astro-services`, `gifting`, `collections`; declare each in `categories` array with `productCount: 0` for showcase mode. | `src/types/product.ts`, `src/data/products.ts` |
| NAV-2 | High | Rebuild Shop dropdown into a 3-column mega-nav (Collections, Festivals, Brass Idols, Jap Mala, Rudraksha, Astro Products, Astro & ePuja Services, Gifting) with section headers + icons; make it keyboard-accessible (see A11Y-1). | `src/components/layout/Navbar.tsx` |
| NAV-3 | High | Add category landing routes `/collections`, `/festivals`, `/gifting`, `/astro-products` with hero banner + description; ship empty (showcase mode). | `src/app/shop/page.tsx` (+ new route folders) |
| NAV-4 | High | Build `/festivals` discovery grid (Navratri, Diwali, Shivratri, Hanuman Jayanti…) — each card → products filtered by festival tag. | `src/app/page.tsx` (+ `/festivals` route) |
| NAV-5 | Medium | Add curated **empty-state** page (hero + "Coming Soon" + related links + WhatsApp enquiry) when a filter/subcategory returns 0 products. | `src/app/shop/page.tsx` |
| NAV-6 | Medium | Add `gifting` meta tag to products; `/gifting` route surfaces bundles, gift sets, occasion-based picks. | `src/data/products.ts`, `/gifting` route |
| NAV-7 | Medium | Refresh `TrustSection` with real signals: authenticity/handcrafted seals, GST badge, certification links, review count. | `src/components/home/TrustSection.tsx` |
| NAV-8 | Low | Make `CategoryGrid` render dynamically from the `categories` array (remove 6-item cap); responsive 2/3/4-col to scale to 8–12+ categories. | `src/components/home/CategoryGrid.tsx` |
| NAV-9 | Low | Add corner badge (`Certified`/`Handcrafted`/`Premium`) to product cards from product metadata. | `src/components/shop/ProductCard.tsx` |
| NAV-10 | Low | Expand footer Shop column to full category/collection list (2-col grid to avoid overflow). | `src/components/layout/Footer.tsx` |

---

## 3. Responsive / Adaptive Design

| # | Severity | Fix (one-line) | File(s) |
|---|----------|----------------|---------|
| RWD-1 | High | Pagination overflows at 375px — make buttons `w-8 h-8 md:w-10 md:h-10` and/or wrap in a horizontally-scrollable container. | `src/components/shop/Pagination.tsx` |
| RWD-2 | High | ProductGrid cards too wide at 768px — change to `sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4`. | `src/components/shop/ProductGrid.tsx` |
| RWD-3 | Medium | Make product-card "Enquire" overlay always-visible + ≥44px tap target on mobile (`opacity-100 md:opacity-0 … py-4`). | `src/components/shop/ProductCard.tsx` |
| RWD-4 | Medium | MobileMenu drawer `w-[280px]` cramps in landscape — use `w-[85vw] md:w-[300px]`. | `src/components/layout/MobileMenu.tsx` |
| RWD-5 | Medium | Hero too tall on small screens — `min-h-[400px] sm:min-h-[480px] md:min-h-[520px]`. | `src/components/home/HeroSection.tsx` |
| RWD-6 | Medium | ProductTabs hide overflow with no cue — add hidden-scrollbar + left/right fade indicators (or `flex-wrap` on mobile). | `src/components/product/ProductTabs.tsx` |
| RWD-7 | Medium | Announcement bar text not truncating at 375px — add `truncate`/`line-clamp-1` or `text-[10px] py-1` on mobile. | `src/components/layout/Navbar.tsx` |
| RWD-8 | Medium | ImageGallery thumbnails scroll with no hint — add snap-scroll + visible indicator or "scroll for more" cue. | `src/components/product/ImageGallery.tsx` |
| RWD-9 | Low | Carousel scroll buttons missing on tablet — change `hidden md:flex` → `hidden lg:flex` (or add swipe affordance). | `src/components/home/ProductCarousel.tsx` |
| RWD-10 | Low | CategoryGrid title may truncate at 375px — `text-sm sm:text-lg md:text-2xl` + `line-clamp-2`. | `src/components/home/CategoryGrid.tsx` |
| RWD-11 | Low | Verify-only: ProductInfo trust-badge `grid-cols-3` and SearchBar `w-full` are already correct — just confirm icons stay readable and navbar parent has padding. | `src/components/product/ProductInfo.tsx`, `src/components/ui/SearchBar.tsx` |

---

## 4. SEO

| # | Severity | Fix (one-line) | File(s) |
|---|----------|----------------|---------|
| SEO-1 | High | Add `src/app/sitemap.ts` (static pages + dynamic product/category routes) and `src/app/robots.ts` (allow all). | `src/app/sitemap.ts`, `src/app/robots.ts` |
| SEO-2 | High | `'use client'` routes ship empty heads — add `layout.tsx` wrappers exporting `metadata` for `/shop`, `/about`, `/contact`, `/kits`, `/search`. | `src/app/{shop,about,contact,kits,search}/layout.tsx` |
| SEO-3 | High | Add canonical URLs to all routes via `metadataBase` + path; products → `…/shop/[slug]`. | route metadata, `src/app/shop/[slug]/page.tsx` |
| SEO-4 | Medium | Product OG images use relative paths — prepend absolute origin (`https://…` + `encodeURI(images[0])`). | `src/app/shop/[slug]/page.tsx` (line 30) |
| SEO-5 | Medium | Add full `openGraph` (image, type, url, description) to `/shop`, `/about`, `/contact`, `/kits`. | those route metadata files |
| SEO-6 | Medium | Add Twitter card metadata (`summary_large_image` + title/desc/image) to secondary routes, mirroring root layout. | secondary route metadata |
| SEO-7 | Medium | Expand policy-page metadata with `description` + `openGraph` (currently title-only). | `src/app/policies/*` |
| SEO-8 | Low | Logo alt → "Shri Anjaneya logo — authentic pooja samagri and attars". | `src/components/layout/Navbar.tsx` (line 61) |
| SEO-9 | Low | Search page: add `generateMetadata` injecting query into title/description. | `src/app/search/page.tsx` |

> SEO-1 and SEO-3 absorb the AEO duplicates of sitemap/robots and canonical/breadcrumb. BreadcrumbList schema is consolidated under AEO-2.

---

## 5. AEO (Answer Engine Optimization)

| # | Severity | Fix (one-line) | File(s) |
|---|----------|----------------|---------|
| AEO-1 | High | Create `/faq` page with 15–20 Q&A (attar vs agarbatti, Diwali samagri, alcohol-free, Kannauj attar, hawan safety) + `FAQPage` JSON-LD. | `src/app/faq/page.tsx` |
| AEO-2 | High | Make `Breadcrumb` emit `BreadcrumbList` JSON-LD (Home > Shop > Category > Subcat > Product) across shop/product/about/contact/kits; add `aria-current` on Home. | `src/components/ui/Breadcrumb.tsx`, `src/app/shop/[slug]/page.tsx` (line 74) |
| AEO-3 | Medium | Enrich Product JSON-LD: `aggregateRating` (ratingValue/reviewCount), `availability` (In/OutOfStock), `author` Organization. | `src/app/shop/[slug]/page.tsx` (lines 49–64) |
| AEO-4 | Medium | Add `LocalBusiness` schema for the Kannauj location (`areaServed: IN`, `priceRange`) to the existing Organization schema. | `src/app/layout.tsx` |
| AEO-5 | Medium | Consolidate scattered Q&A into the FAQ; reformat About "Why Choose" and Contact quick-actions as bold-question Q&A. | `src/app/about/page.tsx` (38–53), `src/app/contact/page.tsx` (64–97), `src/app/kits/page.tsx` |
| AEO-6 | Medium | Make Breadcrumb i18n-aware via `useLanguage()` so Hindi mode renders entity-clear hierarchy. | `src/components/ui/Breadcrumb.tsx` |
| AEO-7 | Low | Shop page `generateMetadata` keyed off `?category`/`?sub`; add `CollectionPage` schema for category views. | `src/app/shop/page.tsx` |
| AEO-8 | Low | Add entity schema: `Product` for "Kannauj Attar", `Place` for "Kannauj, Uttar Pradesh" to link the brand to the Kannauj-attar entity. | `src/app/layout.tsx`, `src/app/page.tsx` |

---

## 6. Performance

| # | Severity | Fix (one-line) | File(s) |
|---|----------|----------------|---------|
| PERF-1 | High | Remove unneeded `'use client'` from About/Contact (static pages) — render server-side, keep translations server-resolved. | `src/app/about/page.tsx`, `src/app/contact/page.tsx` |
| PERF-2 | High | Optimize LCP: `priority`/`eager` on first attar image; lazy-load non-visible hero images. | `src/components/home/SignatureAttar.tsx` (line 19), `src/components/home/HeroSection.tsx` |
| PERF-3 | High | Preload Material Symbols font (`rel=preload as=font`) + `font-display: swap/block` to cut CLS. | font `<link>` in root layout |
| PERF-4 | Medium | Add `loading="lazy"` to below-fold CategoryGrid images. | `src/components/home/CategoryGrid.tsx` (line 84) |
| PERF-5 | Medium | Configure `next.config.ts` images: `minimumCacheTTL`, `deviceSizes`/`imageSizes` to match breakpoints, `quality` 75–80. | `next.config.ts` |
| PERF-6 | Medium | Add `priority` to navbar logo (above-the-fold on every page). | `src/components/layout/Navbar.tsx` (line 59) |
| PERF-7 | Low | Footer logo: remove `priority`, add `loading="lazy"` (below the fold). | `src/components/layout/Footer.tsx` (line 19) |
| PERF-8 | Low | VideoShowcase poster `loading="lazy"`; confirm video is `muted` + `playsInline`. | `src/components/home/VideoShowcase.tsx` (line 55) |
| PERF-9 | Low | `next/dynamic` (ssr:true) for below-fold ProductCarousel / FeaturedProducts to split their JS. | those components |

---

## 7. Accessibility

| # | Severity | Fix (one-line) | File(s) |
|---|----------|----------------|---------|
| A11Y-1 | High | Make Shop dropdown keyboard-operable: `aria-haspopup="menu"`, `aria-expanded`, Enter/Space/Arrow handling, focus management (pairs with NAV-2). | `src/components/layout/Navbar.tsx` |
| A11Y-2 | High | Expose dropdown to screen readers: `role="menu"`/`role="menuitem"`, descriptive button `aria-label`, no stale `aria-hidden` when open. | `src/components/layout/Navbar.tsx` |
| A11Y-3 | High | Restore focus indicator on search input: replace `outline-none` with `focus-visible:outline-2 focus-visible:outline-primary`. | `src/components/ui/SearchBar.tsx` |
| A11Y-4 | Medium | Product tabs ARIA: `role="tablist"`/`tab`/`tabpanel`, `aria-selected`, arrow-key nav (pairs with RWD-6). | `src/components/product/ProductTabs.tsx` |
| A11Y-5 | Medium | Language toggle: swap `title` for `aria-label` ("Switch to Hindi/English"). | `src/components/layout/Navbar.tsx` |
| A11Y-6 | Medium | MobileMenu backdrop: `role="dialog"` + `aria-modal="true"`; close button `aria-label="Close menu"`. | `src/components/layout/MobileMenu.tsx` |
| A11Y-7 | Medium | Verify body-text contrast (`#5c4037` on `#fff8f2`) meets WCAG AA at small sizes; darken variant if not. | `src/app/globals.css` |
| A11Y-8 | Medium | Hero carousel: add `aria-live="polite"` + `aria-atomic="true"` region for slide announcements. | `src/components/home/HeroSection.tsx` |
| A11Y-9 | Low | Product-card overlay: add `group-focus-within:opacity-100` so "Enquire" appears on keyboard focus (pairs with RWD-3). | `src/components/shop/ProductCard.tsx` |
| A11Y-10 | Low | Associate FilterSidebar labels with inputs via `htmlFor`/`id`. | `src/components/shop/FilterSidebar.tsx` |
| A11Y-11 | Low | Mark rating stars semantically: `role="img"` + `aria-label="4.5 out of 5 stars"`. | `src/components/product/ProductInfo.tsx` |
| A11Y-12 | Low | `aria-hidden="true"` on decorative Material Symbol icons (expand_more, chevron_left, …). | `src/components/layout/Navbar.tsx` |

---

## Suggested execution order (highest leverage first)

1. **SEC-1** — single dependency bump clears the entire High-severity security backlog.
2. **NAV-1 → NAV-4** — the category taxonomy is the spine; mega-nav (NAV-2) and routes (NAV-3/4) depend on the type/data changes in NAV-1, and NAV-2 should be built together with A11Y-1/A11Y-2 so accessibility isn't retrofitted.
3. **RWD-1, RWD-2** — fix the two High mobile/tablet layout breaks.
4. **SEO-1/2/3** — sitemap, robots, route metadata + canonicals unlock crawlability (also clear AEO sitemap/breadcrumb dupes).
5. **AEO-1, AEO-2** — FAQ + BreadcrumbList give the biggest answer-engine lift.
6. **PERF-1/2/3** — LCP, font, and unnecessary client-rendering wins.
7. Remaining Medium/Low items as polish.

**Shared-file flags (touch once, satisfy several items):** `Navbar.tsx` → NAV-2, NAV-9-adjacent, SEO-8, RWD-7, A11Y-1/2/5/12, PERF-6. `ProductCard.tsx` → NAV-9, RWD-3, A11Y-9, SEC-5. `Breadcrumb.tsx` → AEO-2/6. `CategoryGrid.tsx` → NAV-8, RWD-10, PERF-4. `next.config.ts` → SEC-2/3, PERF-5. `layout.tsx` → AEO-4/8.
