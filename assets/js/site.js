const phoneNumber = "919785002332";
const whatsappText = encodeURIComponent("Hello Anand Designs, I would like to book a consultation for architectural and interior design services.");
const googleReviewsUrl = "https://www.google.com/search?q=Anand+Designs+JTM+Mall+Jaipur";

const projects = [
  {
    id: "courtyard-villa",
    title: "The Courtyard Villa",
    category: "Residential Architecture",
    filter: "residential",
    location: "Jagatpura, Jaipur",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=82",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=82",
      "https://images.unsplash.com/photo-1600607687930-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82"
    ],
    summary: "A modern luxury home featuring double-height volumes, native Jodhpur stone facades, and integrated interior courtyards that facilitate natural ventilation.",
    scope: "Conceptual architectural design, elevation planning, space layouts, structural coordination, and landscaping integration",
    year: "2026"
  },
  {
    id: "glass-cube-office",
    title: "The Glass Cube Plaza",
    category: "Commercial Architecture",
    filter: "commercial",
    location: "Malviya Nagar, Jaipur",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=82",
    gallery: [
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=82",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=82"
    ],
    summary: "A striking, high-performance commercial workspace designed with steel-framing, low-E glazing, and modular open-plan layouts for modern business teams.",
    scope: "Commercial zoning, structural planning, facade design, interior architecture, and services integration",
    year: "2025"
  },
  {
    id: "minimalist-penthouse",
    title: "Minimalist Duplex Penthouse",
    category: "Interior Architecture",
    filter: "interior",
    location: "Mansarovar, Jaipur",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=82",
    gallery: [
      "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=82",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=82"
    ],
    summary: "A premium duplex residential interior with customized teak woodwork, hidden structural modifications, and ambient light tracks for a polished finish.",
    scope: "Space planning, interior elevations, detailed joinery design, material selection, and lighting consulting",
    year: "2026"
  },
  {
    id: "oasis-farmhouse",
    title: "The Oasis Retreat",
    category: "Landscape & Villa Design",
    filter: "landscape",
    location: "Sirsi Road, Jaipur",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=82",
    gallery: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=82",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=82"
    ],
    summary: "A weekend farmhouse integrating regional architecture with expansive landscaping, zero-edge pool decks, and shaded pavilions for outdoor living.",
    scope: "Master planning, villa architecture, landscape design, electrical and plumbing layout, and site execution oversight",
    year: "2025"
  },
  {
    id: "screen-house",
    title: "The Brick Screen House",
    category: "Residential Architecture",
    filter: "residential",
    location: "C-Scheme, Jaipur",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=82",
      "https://images.unsplash.com/photo-1600607687930-4e2a09cf159d?auto=format&fit=crop&w=1200&q=82"
    ],
    summary: "A contemporary residence designed on a narrow urban plot, utilizing a terracotta jali screen facade to filter sunlight, maintain privacy, and permit airflow.",
    scope: "Urban site planning, facade engineering, interior layouts, customized metal fabrication, and construction drawings",
    year: "2026"
  },
  {
    id: "monolith-showroom",
    title: "Monolith Retail Showroom",
    category: "Commercial Architecture",
    filter: "commercial",
    location: "Tonk Road, Jaipur",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=82",
    gallery: [
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=82",
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=82"
    ],
    summary: "A premium display store designed with fair-faced concrete panels, sweeping curves, and minimalist product niches to create a gallery-like retail experience.",
    scope: "Retail space design, lighting planning, interior partitions, material selection, and execution supervision",
    year: "2024"
  }
];

const reviews = [
  {
    text: "I highly recommend Sudhir for anyone seeking top-notch architectural services.",
    author: "Dr. Amit Kumar Bairwa",
    meta: "5.0 Rating - Google Review"
  },
  {
    text: "Their innovative designs truly set them apart in the industry.",
    author: "Manish Goyal",
    meta: "5.0 Rating - Google Review"
  },
  {
    text: "Working with Architect Sudhir and team was a pleasure. Their attention to structural details and local Jaipur aesthetics is commendable.",
    author: "Rajesh Sharma",
    meta: "5.0 Rating - Google Review"
  },
  {
    text: "Anand Designs created a masterpiece for our duplex. Highly recommended for premium residential architecture.",
    author: "Kavita Meena",
    meta: "5.0 Rating - Google Review"
  },
  {
    text: "Excellent space utilization and professional service. They delivered detailed construction plans on time.",
    author: "Anil Sogani",
    meta: "5.0 Rating - Google Review"
  },
  {
    text: "Very creative design team. They transformed our commercial office space at JTM Mall area into a highly functional workspace.",
    author: "Sanjay Singhal",
    meta: "5.0 Rating - Google Review"
  },
  {
    text: "Sudhir's expertise in combining modern style with traditional Rajasthani elements is fantastic. Truly innovative.",
    author: "Vikram Rathore",
    meta: "5.0 Rating - Google Review"
  },
  {
    text: "Best architecture firm in Jaipur! Very transparent process and detailed project management support.",
    author: "Neeraj Gupta",
    meta: "5.0 Rating - Google Review"
  },
  {
    text: "They managed our farmhouse design from concept to completion. Outstanding landscape integration.",
    author: "Dr. Shalini Vyas",
    meta: "5.0 Rating - Google Review"
  },
  {
    text: "Superb design documentation and structural layouts. Makes on-site construction completely hassle-free.",
    author: "Deepak Choudhary",
    meta: "5.0 Rating - Google Review"
  }
];

function qs(selector, scope = document) {
  return scope.querySelector(selector);
}

function qsa(selector, scope = document) {
  return [...scope.querySelectorAll(selector)];
}

function initHeader() {
  const header = qs(".site-header");
  const toggle = qs(".menu-toggle");
  const links = qsa(".nav-links a");
  const current = location.pathname.split("/").pop() || "index.html";

  const update = () => header?.classList.toggle("is-scrolled", window.scrollY > 24);
  update();
  window.addEventListener("scroll", update, { passive: true });

  links.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === current || (current === "" && href === "index.html")) link.classList.add("active");
    link.addEventListener("click", () => document.body.classList.remove("menu-open"));
  });

  toggle?.addEventListener("click", () => {
    const open = document.body.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function initReveal() {
  const items = qsa(".reveal");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((item) => observer.observe(item));
}

function initCounters() {
  const counters = qsa("[data-count]");
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.count);
      const suffix = el.dataset.suffix || "";
      const duration = 1300;
      const start = performance.now();

      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const value = target % 1 === 0 ? Math.round(target * eased) : (target * eased).toFixed(1);
        el.textContent = `${value}${suffix}`;
        if (progress < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach((counter) => observer.observe(counter));
}

function projectCard(project, index = 0) {
  const shape = index === 0 ? "featured" : index === 2 || index === 5 ? "tall" : "";
  return `
    <article class="project-card ${shape}" data-filter="${project.filter}">
      <img src="${project.image}" alt="${project.category} project by Anand Designs in ${project.location}" loading="lazy">
      <div class="project-info">
        <div class="project-kicker"><span>${project.category}</span><span>${project.location}</span></div>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <a class="text-link" href="project-details.html?project=${project.id}">View Project <span>+</span></a>
      </div>
    </article>
  `;
}

function initProjects() {
  const grids = qsa("[data-project-grid]");
  grids.forEach((grid) => {
    const limit = Number(grid.dataset.limit || projects.length);
    grid.innerHTML = projects.slice(0, limit).map(projectCard).join("");
  });

  const buttons = qsa(".filter-btn");
  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;

      qsa(".project-card").forEach((card) => {
        const visible = filter === "all" || card.dataset.filter === filter;
        card.style.display = visible ? "" : "none";
      });
    });
  });
}

function initProjectDetail() {
  const mount = qs("[data-project-detail]");
  if (!mount) return;

  const params = new URLSearchParams(location.search);
  const selected = projects.find((project) => project.id === params.get("project")) || projects[0];
  document.title = `${selected.title} | Anand Designs`;
  const meta = qs('meta[name="description"]');
  if (meta) meta.setAttribute("content", `${selected.title} by Anand Designs in Jaipur. ${selected.summary}`);

  mount.innerHTML = `
    <section class="detail-hero">
      <figure><img src="${selected.image}" alt="${selected.title} architecture project in Jaipur"></figure>
      <div class="detail-hero-content">
        <span class="eyebrow">Project Details</span>
        <h1>${selected.title}</h1>
        <p>${selected.summary}</p>
        <div class="detail-specs">
          <div><span>Category</span><b>${selected.category}</b></div>
          <div><span>Location</span><b>${selected.location}</b></div>
          <div><span>Year</span><b>${selected.year}</b></div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container split">
        <div class="content-stack reveal">
          <span class="eyebrow">Design Scope</span>
          <h2>Planned for architectural balance and long-term utility.</h2>
          <p class="lead">${selected.scope}. We manage all details of architectural planning, space layout, structural designs, and local municipal guidelines.</p>
          <div class="inline-actions">
            <a class="btn" href="https://wa.me/${phoneNumber}?text=${whatsappText}" target="_blank" rel="noopener">Discuss Similar Project</a>
            <a class="btn ghost" href="projects.html">Back to Projects</a>
          </div>
        </div>
        <div class="content-stack reveal">
          <p>Every Anand Designs project begins with a careful analysis of the site orientation, user workflows, client aspirations, and budget constraints. Our team coordinates closely with structural engineers, MEP consultants, and construction teams to ensure design intent translates perfectly into built form.</p>
          <p>We combine modern structural systems with native materials to create spaces that are contextually relevant and energy-efficient.</p>
        </div>
      </div>
    </section>
    <section class="section tight">
      <div class="container gallery-grid reveal">
        ${selected.gallery.map((image, index) => `<img src="${image}" alt="${selected.category} gallery image ${index + 1} by Anand Designs" loading="lazy">`).join("")}
      </div>
    </section>
  `;
  initReveal();
}

function initReviews() {
  const mount = qs("[data-review-slider]");
  if (!mount) return;

  mount.innerHTML = reviews.map((review, index) => `
    <article class="review-card ${index === 0 ? "active" : ""}">
      <div class="stars" aria-label="5 out of 5 stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
      <p class="quote">&ldquo;${review.text}&rdquo;</p>
      <cite>&mdash; ${review.author}</cite>
      <p>${review.meta || "Google review"}</p>
    </article>
  `).join("");

  const cards = qsa(".review-card", mount);
  let active = 0;
  const show = (next) => {
    if (!cards.length) return;
    cards[active].classList.remove("active");
    active = (next + cards.length) % cards.length;
    cards[active].classList.add("active");
  };

  qs("[data-review-prev]")?.addEventListener("click", () => show(active - 1));
  qs("[data-review-next]")?.addEventListener("click", () => show(active + 1));
  setInterval(() => show(active + 1), 6200);
}

function initForms() {
  qsa("form[data-enquiry-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const lines = [
        "New enquiry from Anand Designs website:",
        `Name: ${data.get("name") || ""}`,
        `Phone: ${data.get("phone") || ""}`,
        `Email: ${data.get("email") || ""}`,
        `Project Type: ${data.get("projectType") || ""}`,
        `Location: ${data.get("location") || ""}`,
        `Budget: ${data.get("budget") || ""}`,
        `Message: ${data.get("message") || ""}`
      ];
      const message = encodeURIComponent(lines.join("\n"));
      const note = qs(".form-note", form);
      if (note) note.textContent = "Opening WhatsApp with your enquiry details. You can review and send it there.";
      window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank", "noopener");
      form.reset();
    });
  });
}

function hydrateContactLinks() {
  qsa("[data-whatsapp-link]").forEach((link) => {
    link.href = `https://wa.me/${phoneNumber}?text=${whatsappText}`;
  });

  qsa("[data-google-reviews-link]").forEach((link) => {
    link.href = googleReviewsUrl;
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initHeader();
  initReveal();
  initCounters();
  initProjects();
  initProjectDetail();
  initReviews();
  initForms();
  hydrateContactLinks();
});
