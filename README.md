
# LuxePoint Suites — GitHub Pages Website

## What is included

- Premium responsive owner-first landing experience
- Dedicated `/property-owners.html` conversion page
- About / founder page
- Operating approach page
- Properties collection
- Guest stays page
- Owner Information Pack
- Insights/blog architecture
- Accessible navigation, reduced-motion support and semantic HTML
- SEO titles, descriptions, Open Graph, Twitter cards and LodgingBusiness schema
- Data-driven properties in `assets/js/properties.js`
- Data-driven blog posts in `assets/js/blog.js`
- Frontend contact validation, loading state, honeypot spam protection and endpoint-ready submission

## Important static-hosting note

GitHub Pages cannot run PHP, Node.js, SMTP or server-side code. The contact form is therefore deliberately frontend-only until an HTTPS form endpoint is connected.

Edit:

`assets/js/main.js`

and set:

`enquiryEndpoint: "https://YOUR-FORM-ENDPOINT"`

Do not put SMTP usernames, passwords or API secrets in this repository.

If you want direct SMTP delivery through Hostinger Email, use a server-side endpoint outside GitHub Pages (for example a small Hostinger/PHP endpoint) and point `enquiryEndpoint` to it.

## Temporary configuration placeholders

Replace:

- `hello@luxepoint.com.au`
- `03 9088 0838`
- `[GITHUB_USERNAME]`
- `[REPOSITORY]`

Also replace the temporary founder SVG and remote architectural images with final approved photography when available.

## GitHub Pages

1. Create a GitHub repository.
2. Upload the contents of this folder to the repository root.
3. GitHub → Settings → Pages.
4. Deploy from the `main` branch, root folder.
5. Update canonical URLs and sitemap after you know the final GitHub Pages URL or custom domain.
6. For a custom domain, add `CNAME` and configure DNS at your domain registrar.

## Data-driven properties

Add/edit properties only in:

`assets/js/properties.js`

The collection and property detail template automatically use that data.

## Data-driven blog

Add/edit posts only in:

`assets/js/blog.js`

The blog index and article template automatically use that data.

### SEO caveat

GitHub Pages + a strict no-build requirement creates a trade-off: dynamically rendered detail pages using query strings are convenient, but unique per-item HTML metadata is not as strong for SEO as pre-generated static pages.

For the launch, this architecture is excellent for maintainability. Once the property/blog portfolio becomes important for organic search, the best upgrade is a tiny static build step that generates individual `.html` files from the same data files. The visual system does not need to change.


## Current brand/contact configuration
- Domain: https://luxepoint.com.au
- Email: hello@luxepoint.com.au
- Phone: 03 9088 0838
- Logo assets: assets/images/brand/luxepoint-logo.png and luxepoint-logo-light.png

## Logo asset
The header and footer logo assets are cropped directly from the supplied LuxePoint Suites approved mockup artwork, rather than recreated as text. The header uses `assets/images/brand/luxepoint-logo.png` and the footer uses `assets/images/brand/luxepoint-logo-light.png`.


## Visual refinement V2
Editorial hospitality direction applied to the homepage and owner page, including stronger hero treatment, consistent property imagery, refined founder presentation, larger footer branding, and mobile-responsive spacing.
