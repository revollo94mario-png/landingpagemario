const workItems = [
  {
    index: "01",
    size: "large",
    tone: "photo",
    title: "Photography",
    description:
      "Images built for attention, mood, and clarity. Portraits, campaigns, products, and visual direction with a clean point of view.",
    meta: "Editorial / Brand / Campaign",
    links: [
      {
        label: "Portfolio",
        href: "https://revollo94mario.myportfolio.com/",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/framesofmario/",
      },
    ],
  },
  {
    index: "02",
    size: "small-right",
    tone: "content",
    title: "Content",
    description:
      "Short-form visual content shaped for social platforms, launches, and ongoing brand presence without looking disposable.",
    meta: "Social / Creative Direction / Motion",
    links: [
      { label: "Selected posts", href: "#" },
      { label: "Socials", href: "#" },
    ],
  },
  {
    index: "03",
    size: "small-left",
    tone: "apps",
    title: "Apps",
    description:
      "Tools and products I designed and built with a focus on usefulness, structure, and a clear interface.",
    meta: "Product / UX / Development",
    links: [
      {
        label: "ContentWise",
        href: "https://content-strategist-mu.vercel.app/",
      },
      {
        label: "Gtracker",
        href: "https://script.google.com/macros/s/AKfycbzjTbQP3bK4xoqMgr0lc6l5GOELkG7AoPL8rXLpMzvtzAEZjqfH1kTYlQHuIgAcrpY9/exec",
      },
      {
        label: "Remotely",
        href: "https://remotelybiz.vercel.app/",
      },
    ],
  },
  {
    index: "04",
    size: "large-right",
    tone: "web",
    title: "Websites",
    description:
      "Web experiences developed for brands, founders, and my own agency. Clean structure, strong presentation, and no wasted movement.",
    meta: "Client Work / Agency / Frontend",
    links: [
      {
        label: "Grupo R&N Prod",
        href: "https://gruporyn.vercel.app/",
      },
      {
        label: "Grupo R&N temporal",
        href: "https://www.gruporyn.com/",
      },
      {
        label: "Chroma Sine Records",
        href: "https://records.chromasine.studio/",
      },
      {
        label: "Chroma Sine Studio",
        href: "https://www.chromasine.studio/",
      },
      {
        label: "DSRPTVE Media",
        href: "https://dsrptivemedia.framer.website/",
      },
    ],
  },
];

const contactLinks = [
  { label: "Email", href: "mailto:revollo94mario@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/morq94/" },
  { label: "Instagram", href: "https://www.instagram.com/framesofmario/" },
  { label: "GitHub", href: "https://github.com/revollo94mario-png/" },
];

function createLinkChip({ label, href }) {
  const isPending = !href || href === "#";
  const isMailto = typeof href === "string" && href.startsWith("mailto:");

  if (isPending) {
    return `<span class="link-chip is-pending">${label}</span>`;
  }

  if (isMailto) {
    return `<a class="link-chip is-link" href="${href}">${label}</a>`;
  }

  return `<a class="link-chip is-link" href="${href}" target="_blank" rel="noreferrer">${label}</a>`;
}

function renderWorkGrid() {
  const workGrid = document.getElementById("work-grid");

  if (!workGrid) {
    return;
  }

  workGrid.innerHTML = workItems
    .map(
      (item) => `
        <article class="work-card reveal" data-size="${item.size}" data-tone="${item.tone}">
          <div class="card-shell">
            <div class="card-core">
              <div class="card-content">
                <p class="card-index">${item.index}</p>
                <div class="card-visual" aria-hidden="true"></div>
                <div class="card-copy">
                  <p class="card-meta">${item.meta}</p>
                  <h3>${item.title}</h3>
                  <p>${item.description}</p>
                </div>
              </div>
              <div class="card-links">
                ${item.links.map(createLinkChip).join("")}
              </div>
            </div>
          </div>
        </article>
      `
    )
    .join("");
}

function renderContactLinks() {
  const contactContainer = document.getElementById("contact-links");

  if (!contactContainer) {
    return;
  }

  contactContainer.innerHTML = contactLinks.map(createLinkChip).join("");
}

function setupRevealAnimations() {
  const revealed = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    revealed.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.2,
    }
  );

  revealed.forEach((element) => observer.observe(element));
}

renderWorkGrid();
renderContactLinks();
setupRevealAnimations();
