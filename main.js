
const CONFIG = {
  brand: "LuxePoint Suites",
  enquiryEndpoint: "", // Configure a form endpoint when ready. Never place SMTP credentials here.
  email: "hello@luxepoint.com.au",
  phone: "03 9088 0838"
};

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  window.addEventListener("scroll", () => {
    if (header) header.classList.toggle("scrolled", window.scrollY > 30);
  }, {passive:true});

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  document.querySelectorAll(".nav-links a").forEach(a => {
    a.addEventListener("click", () => nav?.classList.remove("open"));
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {threshold:.12});

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());

  const form = document.querySelector("[data-owner-form]");
  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const status = form.querySelector(".form-status");
      const submit = form.querySelector("button[type=submit]");
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const honeypot = form.querySelector("[name=website]");
      if (honeypot && honeypot.value) return;

      submit.disabled = true;
      submit.textContent = "Sending…";
      status.textContent = "";

      const data = Object.fromEntries(new FormData(form).entries());

      try {
        if (!CONFIG.enquiryEndpoint) {
          status.textContent = "Your enquiry is ready to send, but online submissions are not yet connected. Please email hello@luxepoint.com.au and we’ll be happy to help.";
          status.setAttribute("role","status");
          return;
        }
        const response = await fetch(CONFIG.enquiryEndpoint, {
          method:"POST",
          headers:{"Content-Type":"application/json","Accept":"application/json"},
          body:JSON.stringify(data)
        });
        if (!response.ok) throw new Error("Submission failed");
        form.reset();
        status.textContent = "Thank you. Your enquiry has been received. We’ll be in touch shortly.";
        status.setAttribute("role","status");
      } catch(err) {
        status.textContent = "We couldn’t submit your enquiry. Please try again or contact us directly.";
        status.setAttribute("role","alert");
      } finally {
        submit.disabled = false;
        submit.textContent = "Request Owner Proposal";
      }
    });
  }
});
