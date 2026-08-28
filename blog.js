
window.LUXEPOINT_POSTS = [
  {
    title:"What Property Owners Should Look For In A Short-Stay Accommodation Partner",
    slug:"what-property-owners-should-look-for",
    author:"LuxePoint Suites",
    publishDate:"2026-08-20",
    excerpt:"A practical guide to assessing professionalism, property care, communication and risk controls before leasing to a short-stay operator.",
    featuredImage:"https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    categories:["Property Owners"],
    tags:["Melbourne","Property","Short Stay"],
    seoTitle:"What Property Owners Should Look For | LuxePoint Suites",
    metaDescription:"Learn what Melbourne property owners should consider when choosing a professional short-stay accommodation tenant.",
    article:`<p>Choosing a short-stay accommodation partner is ultimately a question of trust. Owners should look beyond headline rent and assess how the operator will care for the property, communicate issues and manage guests.</p><h2>Start with accountability</h2><p>A professional operator should be clear about who is responsible for the lease, communication, maintenance and guest management.</p><h2>Look for operating standards</h2><p>Cleaning, inspections, guest rules and maintenance processes should be deliberate rather than improvised.</p><h2>Ask how risk is managed</h2><p>Guest screening, house rules, noise management and proactive oversight can help reduce operational risk.</p>`
  }
];

function renderPosts(target){
  target.innerHTML = window.LUXEPOINT_POSTS.map(p=>`
    <article class="article-card reveal">
      <div class="meta">${p.categories.join(" · ")} · ${new Date(p.publishDate).toLocaleDateString("en-AU",{day:"numeric",month:"long",year:"numeric"})}</div>
      <h3>${p.title}</h3><p>${p.excerpt}</p>
      <a class="btn btn-secondary" href="post.html?slug=${encodeURIComponent(p.slug)}">Read article</a>
    </article>`).join("");
}
function renderPost(target,slug){
  const p=(window.LUXEPOINT_POSTS||[]).find(x=>x.slug===slug)||window.LUXEPOINT_POSTS[0];
  if(!p)return;
  document.title=p.seoTitle;
  document.querySelector('meta[name="description"]')?.setAttribute("content",p.metaDescription);
  target.innerHTML=`<article style="max-width:800px;margin:auto"><div class="meta">${p.categories.join(" · ")} · ${p.publishDate}</div><h1>${p.title}</h1><p class="lead">${p.excerpt}</p><img src="${p.featuredImage}" alt="${p.title}" style="width:100%;margin:35px 0;aspect-ratio:16/9;object-fit:cover"><div>${p.article}</div></article>`;
}
document.addEventListener("DOMContentLoaded",()=>{
  const list=document.querySelector("[data-posts]"); if(list)renderPosts(list);
  const detail=document.querySelector("[data-post-detail]"); if(detail)renderPost(detail,new URLSearchParams(location.search).get("slug"));
});
