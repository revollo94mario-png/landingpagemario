const workItems = [
  {
    index: "01",
    size: "large",
    tone: "photo",
    title: "Photography",
    description:
      "Events, product, and food photography built to hold attention without losing clarity or atmosphere.",
    meta: "Events / Product / Food",
    backgrounds: [
      "/assets/photography/cafe-mundi-01.jpg",
      "/assets/photography/cafe-mundi-02.jpg",
      "/assets/photography/livecity-feb-01.jpg",
      "/assets/photography/livecity-jan-01.jpg",
      "/assets/photography/livecity-jan-02.jpg",
      "/assets/photography/livecity-jan-03.jpg",
      "/assets/photography/miskisimi-01.jpg",
      "/assets/photography/slaven-maroska-01.jpg",
      "/assets/photography/slaven-maroska-02.jpg",
    ],
    links: [
      {
        label: "Photography Portfolio",
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
    tone: "video",
    titleHtml: "Audiovisual<br />Content Creation",
    description:
      "Engaging short form motion and audiovisual content, with an extra focus on aesthetics and sound design.",
    meta: "Short Form / Social / Motion",
    videoSrc: "/assets/video/audiovisual-reel.mp4",
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/framesofmario/",
      },
      {
        label: "Watch videos",
        href: "https://revollo94mario.myportfolio.com/video-audiovisual",
      },
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
    backgrounds: [
      "/Web-mockups/Contetnwise.png",
      "/Web-mockups/Remotely.png",
    ],
    links: [
      {
        label: "ContentWise",
        href: "https://content-wise.app/",
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
      "From clean simple stack landing pages to visually engaging complex websites for brands, founders, and agency work.",
    meta: "Landing Pages / Agency / Complex Builds",
    backgrounds: [
      "/Web-mockups/CSR.png",
      "/Web-mockups/CSS.png",
      "/Web-mockups/Gruporynprod.png",
    ],
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
  {
    index: "05",
    size: "wide",
    tone: "stills",
    title: "Still Content Creation",
    description:
      "Reels are the hype, but stills are the conversion. Social media portrait work and corporate carousels built to carry a brand clearly.",
    meta: "Portrait / Corporate / Carousels",
    stripImages: [
      "/assets/stills/2026-kw-13-1.png",
      "/assets/stills/2026-kw-13-2.png",
      "/assets/stills/2026-kw-13-3.png",
      "/assets/stills/2026-kw-13-4.png",
      "/assets/stills/2026-kw-13-5.png",
      "/assets/stills/campaigns-flows.png",
      "/assets/stills/slide-1.png",
      "/assets/stills/slide-2.png",
      "/assets/stills/slide-3.png",
      "/assets/stills/slide-4.png",
      "/assets/stills/slide-5.png",
      "/assets/stills/webhook.png",
    ],
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/framesofmario/",
      },
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/morq94/",
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
              ${
                item.backgrounds
                  ? `
                <div class="card-media card-carousel" aria-hidden="true">
                  ${item.backgrounds
                    .map(
                      (background, slideIndex) => `
                    <span
                      class="card-slide${slideIndex === 0 ? " is-active" : ""}"
                      style="background-image: url('${background}')"
                    ></span>
                  `
                    )
                    .join("")}
                </div>
              `
                  : ""
              }
              <div class="card-content">
                <p class="card-index">${item.index}</p>
                <div class="card-body${item.videoSrc ? " has-video" : ""}${item.stripImages ? " has-strip" : ""}">
                  <div class="card-copy">
                  <p class="card-meta">${item.meta}</p>
                  <h3>${item.titleHtml || item.title}</h3>
                  <p>${item.description}</p>
                  </div>
                  ${
                    item.videoSrc
                      ? `
                    <div class="card-video-shell">
                      <video
                        class="card-video"
                        src="${item.videoSrc}"
                        autoplay
                        muted
                        loop
                        playsinline
                        webkit-playsinline="true"
                        preload="auto"
                      ></video>
                    </div>
                  `
                      : ""
                  }
                  ${
                    item.stripImages
                      ? `
                    <div class="card-strip-shell" aria-hidden="true">
                      <div class="card-strip-track">
                        ${item.stripImages
                          .concat(item.stripImages)
                          .map(
                            (image, index) => `
                          <span class="card-strip-item" style="--strip-index:${index}">
                            <img src="${image}" alt="" loading="lazy" />
                          </span>
                        `
                          )
                          .join("")}
                      </div>
                    </div>
                  `
                      : ""
                  }
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

  contactContainer.innerHTML = `
    <div class="contact-person">
      <p class="contact-name">Mario Oscar Revollo Quezada</p>
      <a class="contact-mail" href="mailto:revollo94mario@gmail.com">revollo94mario@gmail.com</a>
    </div>
    <div class="contact-chip-group">
      ${contactLinks.map(createLinkChip).join("")}
    </div>
  `;
}

function setupCardCarousels() {
  const carousels = document.querySelectorAll(".card-carousel");

  if (!carousels.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  carousels.forEach((carousel) => {
    const slides = Array.from(carousel.querySelectorAll(".card-slide"));

    if (slides.length < 2) {
      return;
    }

    let activeIndex = 0;

    window.setInterval(() => {
      slides[activeIndex].classList.remove("is-active");
      activeIndex = (activeIndex + 1) % slides.length;
      slides[activeIndex].classList.add("is-active");
    }, 2800);
  });
}

function setupCardVideos() {
  const videos = document.querySelectorAll(".card-video");

  videos.forEach((video) => {
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.autoplay = true;

    const startPlayback = () => {
      const playback = video.play();

      if (playback && typeof playback.catch === "function") {
        playback.catch(() => {
          // Ignore autoplay failures; the video element remains visible as fallback.
        });
      }
    };

    if (video.readyState >= 2) {
      startPlayback();
      return;
    }

    video.addEventListener("loadeddata", startPlayback, { once: true });
  });
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
setupCardVideos();
setupCardCarousels();
setupRevealAnimations();
