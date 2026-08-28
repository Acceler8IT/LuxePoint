
window.LUXEPOINT_PROPERTIES = [
  {
    title: "Melbourne Collection — Coming Soon",
    slug: "melbourne-collection",
    client: "LuxePoint Suites",
    category: "Accommodation",
    shortDescription: "Our first Melbourne property is currently being prepared for the LuxePoint Suites collection.",
    fullDescription: "LuxePoint Suites is building a considered collection of premium Melbourne accommodation. Property details will be published here as properties are acquired and prepared.",
    services: ["Accommodation", "Property Care", "Guest Management"],
    technologies: ["Professional Cleaning", "Guest Verification", "Operational Monitoring"],
    completionDate: "2026",
    featuredImage: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    galleryImages: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80"
    ],
    websiteUrl: ""
  }
];

function renderProperties(target) {
  const items = window.LUXEPOINT_PROPERTIES || [];
  target.innerHTML = items.map(p => `
    <article class="property-card reveal">
      <img src="${p.featuredImage}" alt="${p.title}" loading="lazy">
      <div class="property-body">
        <div class="meta">${p.category} · ${p.completionDate}</div>
        <h3>${p.title}</h3>
        <p>${p.shortDescription}</p>
        <a class="btn btn-secondary" href="property.html?slug=${encodeURIComponent(p.slug)}">View property</a>
      </div>
    </article>
  `).join("");
}

function renderPropertyDetail(target, slug) {
  const p = (window.LUXEPOINT_PROPERTIES || []).find(x => x.slug === slug) || window.LUXEPOINT_PROPERTIES[0];
  if (!p) return;
  document.title = `${p.title} | LuxePoint Suites`;
  document.querySelector('meta[name="description"]')?.setAttribute("content", p.shortDescription);
  target.innerHTML = `
    <div class="grid-2">
      <img src="${p.featuredImage}" alt="${p.title}" style="width:100%;aspect-ratio:4/3;object-fit:cover">
      <div>
        <div class="eyebrow">${p.category}</div>
        <h1>${p.title}</h1>
        <p class="lead">${p.fullDescription}</p>
        <ul class="feature-list">${p.services.map(x=>`<li>${x}</li>`).join("")}</ul>
        <a class="btn" href="property-owners.html">Partner With LuxePoint Suites</a>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded",()=>{
  const list = document.querySelector("[data-properties]");
  if(list) renderProperties(list);
  const detail = document.querySelector("[data-property-detail]");
  if(detail) renderPropertyDetail(detail, new URLSearchParams(location.search).get("slug"));
});
