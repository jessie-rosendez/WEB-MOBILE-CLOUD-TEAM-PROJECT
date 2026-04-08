const catalogProducts = [
  {
    id: "razer-blade-14",
    code: "B14",
    name: "Razer Blade 14",
    category: "Laptop",
    price: 2399,
    tag: "Ultra-portable",
    glow: "rgba(117, 255, 145, 0.32)",
    description:
      "A compact flagship gaming laptop benchmarked to the current Razer Blade 14 lineup with premium display and high-end graphics.",
  },
  {
    id: "razer-blade-16",
    code: "B16",
    name: "Razer Blade 16",
    category: "Laptop",
    price: 2999,
    tag: "Flagship laptop",
    glow: "rgba(77, 208, 255, 0.28)",
    description:
      "A larger flagship gaming laptop reference for the store, positioned as the premium step-up option in the catalog.",
  },
  {
    id: "razer-blade-18",
    code: "B18",
    name: "Razer Blade 18",
    category: "Laptop",
    price: 3499,
    tag: "Desktop-class",
    glow: "rgba(181, 105, 255, 0.24)",
    description:
      "A desktop-replacement laptop benchmark for the top of the performance stack with the largest screen in the Blade line.",
  },
  {
    id: "razer-viper-v4-pro",
    code: "VV4",
    name: "Razer Viper V4 Pro",
    category: "Mouse",
    price: 179,
    tag: "Esports mouse",
    glow: "rgba(255, 177, 75, 0.22)",
    description:
      "An ultralight symmetrical mouse benchmark built for fast competitive play and premium wireless performance.",
  },
  {
    id: "razer-deathadder-v4-pro",
    code: "DA4",
    name: "Razer DeathAdder V4 Pro",
    category: "Mouse",
    price: 169,
    tag: "Ergonomic mouse",
    glow: "rgba(255, 118, 160, 0.22)",
    description:
      "An ergonomic esports mouse reference for users who prefer a sculpted shape over a symmetrical shell.",
  },
  {
    id: "razer-blackwidow-v4-pro",
    code: "BW4",
    name: "Razer BlackWidow V4 Pro",
    category: "Keyboard",
    price: 229,
    tag: "Full-size control",
    glow: "rgba(117, 255, 145, 0.26)",
    description:
      "A full-size mechanical keyboard benchmark with macro and lighting-focused premium desktop appeal.",
  },
  {
    id: "razer-huntsman-v3-pro-8khz",
    code: "H8K",
    name: "Razer Huntsman V3 Pro 8KHz",
    category: "Keyboard",
    price: 299,
    tag: "Tournament speed",
    glow: "rgba(77, 208, 255, 0.22)",
    description:
      "An esports-first optical keyboard reference built around ultra-fast input and competitive tuning.",
  },
  {
    id: "razer-deathstalker-v2-pro",
    code: "DS2",
    name: "Razer DeathStalker V2 Pro",
    category: "Keyboard",
    price: 249,
    tag: "Low-profile wireless",
    glow: "rgba(181, 105, 255, 0.22)",
    description:
      "A slim wireless keyboard benchmark for users who want a cleaner desk profile without giving up gaming performance.",
  },
  {
    id: "razer-blackshark-v3-pro",
    code: "BS3",
    name: "Razer BlackShark V3 Pro",
    category: "Audio",
    price: 249,
    tag: "Esports audio",
    glow: "rgba(255, 177, 75, 0.2)",
    description:
      "A competitive headset benchmark focused on wireless performance, clarity, and pro-level communication.",
  },
  {
    id: "razer-kraken-v4-pro",
    code: "KV4",
    name: "Razer Kraken V4 Pro",
    category: "Audio",
    price: 399,
    tag: "Immersion first",
    glow: "rgba(117, 255, 145, 0.24)",
    description:
      "A premium headset benchmark for cinematic audio, stronger immersion, and a more feature-heavy setup.",
  },
  {
    id: "razer-nommo-v2-pro",
    code: "NM2",
    name: "Razer Nommo V2 Pro",
    category: "Audio",
    price: 449,
    tag: "Desk speakers",
    glow: "rgba(77, 208, 255, 0.22)",
    description:
      "A powerful desktop speaker benchmark for battlestations that want more room-filling sound than a headset alone.",
  },
  {
    id: "razer-wolverine-v3-pro",
    code: "WV3",
    name: "Razer Wolverine V3 Pro",
    category: "Controller",
    price: 199,
    tag: "Xbox + PC",
    glow: "rgba(255, 177, 75, 0.2)",
    description:
      "A premium wireless controller benchmark for players who want a competitive console and PC option in the store.",
  },
  {
    id: "razer-kishi-v3-pro",
    code: "KS3",
    name: "Razer Kishi V3 Pro",
    category: "Controller",
    price: 149,
    tag: "Mobile gaming",
    glow: "rgba(255, 118, 160, 0.2)",
    description:
      "A full-sized mobile controller benchmark that fits phones, mini tablets, and portable play setups.",
  },
  {
    id: "razer-firefly-v2-pro",
    code: "FF2",
    name: "Razer Firefly V2 Pro",
    category: "Desk setup",
    price: 109,
    tag: "RGB mat",
    glow: "rgba(181, 105, 255, 0.22)",
    description:
      "A bright battlestation mouse-mat benchmark with a harder RGB-first visual style for premium desks.",
  },
  {
    id: "razer-gigantus-v2",
    code: "GV2",
    name: "Razer Gigantus V2",
    category: "Desk setup",
    price: 39,
    tag: "Soft surface",
    glow: "rgba(117, 255, 145, 0.22)",
    description:
      "A soft mouse-mat benchmark for players who want a simpler, lower-cost desk essential in the lineup.",
  },
  {
    id: "razer-thunderbolt-5-dock",
    code: "TB5",
    name: "Razer Thunderbolt 5 Dock",
    category: "Connectivity",
    price: 399,
    tag: "Creator dock",
    glow: "rgba(77, 208, 255, 0.22)",
    description:
      "A high-bandwidth dock benchmark for multi-display desk setups, content creation, and laptop expansion.",
  },
  {
    id: "razer-hyperflux-v2",
    code: "HF2",
    name: "Razer HyperFlux V2",
    category: "Desk setup",
    price: 119,
    tag: "Wireless charging",
    glow: "rgba(255, 118, 160, 0.22)",
    description:
      "A charging-system benchmark that adds a more futuristic battlestation accessory to the Phantm catalog.",
  },
];

const agentKnowledge = {
  contact: [
    { label: "Support email", value: "support@phantm.com" },
    { label: "Phone", value: "(919) 555-0142" },
    { label: "Support hours", value: "Mon-Fri, 9:00 AM to 6:00 PM ET" },
    { label: "Live chat", value: "Available during launch weeks and sale weekends" },
  ],
  location: [
    { label: "Headquarters", value: "Raleigh, North Carolina" },
    { label: "Primary fulfillment", value: "Austin, Texas" },
    { label: "Service region", value: "United States domestic shipping only for launch" },
    { label: "Campus pop-up goal", value: "Southeast university events in year one" },
  ],
  service: [
    { label: "Warranty", value: "1-year limited warranty on electronics and premium accessories" },
    { label: "Returns", value: "30-day return window for unopened or lightly used items" },
    { label: "Setup help", value: "Email guidance for battlestation setup, chair assembly, lumbar tuning, and controller compatibility" },
    { label: "Bundles", value: "Laptop, audio, and desk bundles built around a Razer-benchmarked lineup" },
  ],
  pricing: [
    { label: "Catalog status", value: "Product names benchmark the Razer lineup reviewed on April 7, 2026" },
    { label: "Price note", value: "Catalog prices are class-project placeholders, not live storefront prices" },
    { label: "Signature product target", value: "$799 early-backer target for the Phantm Spectre X racing chair" },
    { label: "Campaign goal", value: "$9,500 fixed-funding preview target" },
  ],
  faqs: [
    {
      question: "What makes the Phantm Spectre X different from the rest of the catalog?",
      answer:
        "The Phantm Spectre X is the one original flagship product in the build. It turns the signature slot into an aggressive racing-style chair concept with winged shoulders, adaptive lumbar support, hidden storage, modular mounts, and reactive lighting instead of copying an existing catalog item.",
    },
    {
      question: "Are these prices supposed to match the live Razer store?",
      answer:
        "No. The product names benchmark the current Razer lineup, but the prices in this prototype are placeholders so your team can build the store and cart without relying on constantly changing live prices.",
    },
    {
      question: "Can the customer service agent answer compatibility questions?",
      answer:
        "Yes. The agent should be trained on port types, power delivery limits, supported devices, return policy, and product-specific setup steps using website and product data.",
    },
    {
      question: "How should the agent explain the benchmarked catalog?",
      answer:
        "It should explain that the class project uses a Phantm brand identity, a catalog benchmarked to the Razer lineup for planning, and one original signature chair that anchors the Kickstarter campaign.",
    },
    {
      question: "Who is the Phantm Spectre X made for?",
      answer:
        "The target buyer is a competitive gamer or streamer who wants a bold racing-chair silhouette but still cares about long-session comfort, storage, and premium battlestation details.",
    },
    {
      question: "What content counts as unstructured data for RAG?",
      answer:
        "FAQ answers, campaign story copy, return policy language, product descriptions, warranty notes, and any longer-form support or shipping explanations all work well as unstructured website data.",
    },
  ],
};

const cloudTiers = [
  {
    tier: "Tier 1",
    name: "Pilot Launch",
    audience: "1K monthly visitors",
    costs: {
      "Hosting/compute": 480,
      Storage: 120,
      Database: 240,
      CDN: 180,
      Monitoring: 120,
      "AI/API": 300,
    },
  },
  {
    tier: "Tier 2",
    name: "Campus Buzz",
    audience: "5K monthly visitors",
    costs: {
      "Hosting/compute": 960,
      Storage: 240,
      Database: 540,
      CDN: 360,
      Monitoring: 240,
      "AI/API": 780,
    },
  },
  {
    tier: "Tier 3",
    name: "Regional Traction",
    audience: "20K monthly visitors",
    costs: {
      "Hosting/compute": 2400,
      Storage: 480,
      Database: 1200,
      CDN: 840,
      Monitoring: 480,
      "AI/API": 1920,
    },
  },
  {
    tier: "Tier 4",
    name: "Kickstarter Surge",
    audience: "75K monthly visitors",
    costs: {
      "Hosting/compute": 6000,
      Storage: 960,
      Database: 3000,
      CDN: 2100,
      Monitoring: 960,
      "AI/API": 4500,
    },
  },
  {
    tier: "Tier 5",
    name: "National Scale",
    audience: "250K monthly visitors",
    costs: {
      "Hosting/compute": 13200,
      Storage: 2100,
      Database: 6600,
      CDN: 4800,
      Monitoring: 1920,
      "AI/API": 10200,
    },
  },
];

const forecastAssumptions = [
  "Traffic grows from a classroom pilot to a national campaign spike across five yearly tiers.",
  "All values are cloud-only and exclude inventory, wages, shipping, rent, and manufacturing.",
  "AI/API estimates assume a customer support agent handles more conversations as traffic and orders rise.",
  "Storage and database costs scale with product media, customer data, and support content.",
  "CDN and monitoring rise with heavier product pages, launch traffic, and more uptime expectations.",
];

const kickstarterPerks = [
  {
    title: "Digital Supporter Pack",
    price: 10,
    note: "Reward tier 1",
    description:
      "Backers receive a thank-you update, branded wallpapers, and early campaign announcements.",
  },
  {
    title: "Phantm Decal Pack",
    price: 25,
    note: "Reward tier 2",
    description:
      "Includes the digital rewards plus a limited decal set and early access to behind-the-scenes prototype updates.",
  },
  {
    title: "Spectre Lumbar Kit",
    price: 89,
    note: "Reward tier 3",
    description:
      "Includes the decal pack plus a branded lumbar and neck support kit designed to preview the racing-chair comfort system.",
  },
  {
    title: "Spectre Utility Mount Kit",
    price: 169,
    note: "Reward tier 4",
    description:
      "Includes the prior perks plus modular headset and controller mount accessories that sell the creator-utility angle of the chair.",
  },
  {
    title: "Phantm Spectre X Early Backer",
    price: 799,
    note: "Reward tier 5",
    description:
      "Includes the full signature racing chair at the early-backer target price plus priority updates and first-wave fulfillment.",
  },
];

const sprintPlan = [
  {
    sprint: "Sprint 1",
    title: "Storefront Foundation",
    summary:
      "Lock the information architecture, storefront layout, and starter catalog so the project has a visible base.",
    items: [
      "Finalize category approval and confirm group-size product count.",
      "Build homepage sections and replace sample visuals with team branding.",
      "Seed product data, contact info, service details, and pricing language.",
      "Set up the Scrum board and assign sprint ownership.",
    ],
  },
  {
    sprint: "Sprint 2",
    title: "AI, Forecast, And Campaign",
    summary:
      "Turn the skeleton into a real project system by connecting support knowledge, cloud planning, and the custom product campaign.",
    items: [
      "Prepare structured and unstructured content for the customer service agent.",
      "Create the Excel forecast sheet and annual cloud spend graph.",
      "Refine Phantm Spectre X specs, campaign story, and reward tiers.",
      "Draft the Kickstarter preview page and pitch video outline.",
    ],
  },
  {
    sprint: "Sprint 3",
    title: "Polish And Final Demo",
    summary:
      "Tighten the experience, rehearse the presentation, and prepare the final deliverables for review.",
    items: [
      "Polish catalog visuals, copy, and cart experience.",
      "Test the agent responses, forecast assumptions, and campaign compliance.",
      "Finalize sprint review slides and demo flow.",
      "Capture final Scrum board artifacts and presentation assets.",
    ],
  },
];

const checklistItems = [
  {
    title: "Homepage storefront shell",
    status: "Completed",
    statusClass: "status-live",
    summary:
      "The homepage has a strong overall structure with a hero, dashboard, tracker, catalog, signature product, forecast, Kickstarter, Scrum, and next-step sections.",
    focus: "Next focus: swap in final images and team-approved brand copy.",
  },
  {
    title: "Catalog and cart demo",
    status: "In Progress",
    statusClass: "status-progress",
    summary:
      "The site now includes 17 exact Razer product names, category filters, and a working front-end cart so the online store requirement is visibly moving.",
    focus: "Next focus: refine placeholder pricing and decide which products get deeper writeups first.",
  },
  {
    title: "Signature custom product",
    status: "In Progress",
    statusClass: "status-progress",
    summary:
      "Phantm Spectre X now has a clearer racing-chair identity, feature set, target buyer, and campaign role.",
    focus: "Next focus: finalize exact materials, dimensions, and feature names for the pitch.",
  },
  {
    title: "Customer service agent content",
    status: "In Progress",
    statusClass: "status-progress",
    summary:
      "Structured and unstructured starter data is seeded for contact details, service info, pricing notes, and FAQs.",
    focus: "Next focus: expand this into the actual GCP-ready knowledge set and source files.",
  },
  {
    title: "Cloud forecast starter",
    status: "In Progress",
    statusClass: "status-progress",
    summary:
      "The five-tier scale-up model, assumptions, and annual spend visualization are on the page and ready to move into Excel.",
    focus: "Next focus: mirror these numbers in the spreadsheet and build the graph for class submission.",
  },
  {
    title: "Kickstarter preview",
    status: "In Progress",
    statusClass: "status-progress",
    summary:
      "The campaign goal, funding type, five perks, and pitch framing are present and aligned to the assignment rules.",
    focus: "Next focus: write the actual campaign story, perk details, and pitch video outline.",
  },
  {
    title: "Assets still needed",
    status: "Needs Assets",
    statusClass: "status-warn",
    summary:
      "The biggest missing pieces now are final logo/assets, final chair imagery, and final deliverable ownership across the team.",
    focus: "Next focus: collect assets and assign owners before polishing too many secondary details.",
  },
  {
    title: "Submission polish pass",
    status: "Next Up",
    statusClass: "status-plan",
    summary:
      "After content decisions are locked, the next pass should focus on cleanup, presentation quality, and converting placeholder pieces into real deliverables.",
    focus: "Next focus: connect the site, spreadsheet, agent build, and presentation assets into one consistent story.",
  },
];

const reviewNotes = [
  "The project is structurally strong right now: the assignment components are visible and no longer scattered.",
  "The biggest strength is that the site already tells a coherent story across storefront, chair concept, cloud forecast, Kickstarter, and Scrum.",
  "The biggest risk is over-polishing placeholder content before the team fills in real support details, forecast values, and campaign assets.",
  "Keeping exact Razer product names is now an intentional choice, which removes a major naming blocker and lets the team focus on deliverables.",
  "The smartest next work is replacing placeholders with final data and assets, not adding random new sections.",
];

const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const countdown = document.querySelector("[data-countdown]");
const filterBar = document.querySelector("[data-filter-bar]");
const cartToggle = document.querySelector(".cart-toggle");
const cartPanel = document.querySelector(".cart-panel");
const cartClose = document.querySelector(".cart-close");
const checkoutButton = document.querySelector(".cart-checkout");
const catalogGrid = document.querySelector("[data-catalog-grid]");
const cartItemsContainer = document.querySelector("[data-cart-items]");
const cartCount = document.querySelector("[data-cart-count]");
const cartQuantity = document.querySelector("[data-cart-quantity]");
const cartSubtotal = document.querySelector("[data-cart-subtotal]");
const contactList = document.querySelector("[data-contact-list]");
const locationList = document.querySelector("[data-location-list]");
const serviceList = document.querySelector("[data-service-list]");
const pricingList = document.querySelector("[data-pricing-list]");
const faqList = document.querySelector("[data-faq-list]");
const forecastChart = document.querySelector("[data-forecast-chart]");
const forecastCards = document.querySelector("[data-forecast-cards]");
const assumptionsList = document.querySelector("[data-assumptions-list]");
const perkGrid = document.querySelector("[data-perk-grid]");
const sprintGrid = document.querySelector("[data-sprint-grid]");
const trackerSummary = document.querySelector("[data-tracker-summary]");
const checklistGrid = document.querySelector("[data-checklist-grid]");
const reviewList = document.querySelector("[data-review-list]");
const checkoutNote = document.querySelector("[data-checkout-note]");

let cart = [];
let activeFilter = "All";

const catalogFilters = [
  "All",
  ...new Set(catalogProducts.map((product) => product.category)),
];

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);

const closeMenu = () => {
  if (!menuToggle || !siteNav) {
    return;
  }

  siteNav.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
};

const setCartOpen = (isOpen) => {
  if (!cartToggle || !cartPanel) {
    return;
  }

  document.body.classList.toggle("cart-open", isOpen);
  cartToggle.setAttribute("aria-expanded", String(isOpen));
};

const findProduct = (productId) =>
  catalogProducts.find((product) => product.id === productId);

const renderCatalog = () => {
  if (!catalogGrid) {
    return;
  }

  const filteredProducts =
    activeFilter === "All"
      ? catalogProducts
      : catalogProducts.filter((product) => product.category === activeFilter);

  catalogGrid.innerHTML = filteredProducts
    .map(
      (product) => `
        <article class="product-card">
          <div class="product-visual" style="--product-glow: ${product.glow}">
            <span>${product.code}</span>
          </div>
          <div>
            <div class="product-meta">
              <span class="product-category">${product.category}</span>
              <span class="product-price">${formatCurrency(product.price)}</span>
            </div>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <div class="product-actions">
              <span class="product-tag">${product.tag}</span>
              <button
                class="button button-secondary add-button"
                type="button"
                data-add-to-cart="${product.id}"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </article>
      `
    )
    .join("");
};

const renderFilters = () => {
  if (!filterBar) {
    return;
  }

  filterBar.innerHTML = catalogFilters
    .map(
      (filter) => `
        <button
          class="filter-chip ${filter === activeFilter ? "is-active" : ""}"
          type="button"
          data-filter="${filter}"
        >
          ${filter}
        </button>
      `
    )
    .join("");
};

const renderInfoList = (container, items) => {
  if (!container) {
    return;
  }

  container.innerHTML = items
    .map(
      (item) => `
        <li>
          <span>${item.label}</span>
          <strong>${item.value}</strong>
        </li>
      `
    )
    .join("");
};

const renderFaqs = () => {
  if (!faqList) {
    return;
  }

  faqList.innerHTML = agentKnowledge.faqs
    .map(
      (faq) => `
        <details class="faq-item">
          <summary>${faq.question}</summary>
          <p>${faq.answer}</p>
        </details>
      `
    )
    .join("");
};

const renderForecast = () => {
  if (!forecastChart || !forecastCards || !assumptionsList) {
    return;
  }

  const totals = cloudTiers.map((tier) =>
    Object.values(tier.costs).reduce((sum, value) => sum + value, 0)
  );
  const maxTotal = Math.max(...totals);

  forecastChart.innerHTML = cloudTiers
    .map((tier, index) => {
      const total = totals[index];
      const height = `${Math.round((total / maxTotal) * 100)}%`;

      return `
        <article class="chart-bar">
          <div class="chart-bar-fill" style="--bar-height: ${height}"></div>
          <strong>${tier.tier}</strong>
          <span>${formatCurrency(total)}</span>
        </article>
      `;
    })
    .join("");

  forecastCards.innerHTML = cloudTiers
    .map((tier, index) => {
      const total = totals[index];
      const costRows = Object.entries(tier.costs)
        .map(
          ([label, value]) => `
            <div>
              <span>${label}</span>
              <span>${formatCurrency(value)}</span>
            </div>
          `
        )
        .join("");

      return `
        <article class="forecast-card">
          <div class="forecast-card-top">
            <div>
              <h3>${tier.tier}: ${tier.name}</h3>
              <p>${tier.audience}</p>
            </div>
            <strong>${formatCurrency(total)}</strong>
          </div>
          <div class="cost-list">${costRows}</div>
        </article>
      `;
    })
    .join("");

  assumptionsList.innerHTML = forecastAssumptions
    .map((assumption) => `<li>${assumption}</li>`)
    .join("");
};

const renderPerks = () => {
  if (!perkGrid) {
    return;
  }

  perkGrid.innerHTML = kickstarterPerks
    .map(
      (perk) => `
        <article class="perk-card">
          <span class="perk-note">${perk.note}</span>
          <h3>${perk.title}</h3>
          <div class="perk-price">${formatCurrency(perk.price)}</div>
          <p>${perk.description}</p>
        </article>
      `
    )
    .join("");
};

const renderSprints = () => {
  if (!sprintGrid) {
    return;
  }

  sprintGrid.innerHTML = sprintPlan
    .map(
      (sprint) => `
        <article class="scrum-card">
          <div class="scrum-card-header">
            <span class="scrum-card-step">${sprint.sprint}</span>
          </div>
          <h3>${sprint.title}</h3>
          <p>${sprint.summary}</p>
          <ul class="sprint-list">
            ${sprint.items.map((item) => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `
    )
    .join("");
};

const renderTracker = () => {
  if (!trackerSummary || !checklistGrid || !reviewList) {
    return;
  }

  const completedCount = checklistItems.filter(
    (item) => item.status === "Completed"
  ).length;
  const progressCount = checklistItems.filter(
    (item) => item.status === "In Progress"
  ).length;
  const needsTeamCount = checklistItems.filter(
    (item) => item.status === "Needs Assets"
  ).length;
  const nextUpCount = checklistItems.filter(
    (item) => item.status === "Next Up"
  ).length;

  trackerSummary.innerHTML = `
    <article class="tracker-summary-card">
      <span>Catalog benchmark</span>
      <strong>${catalogProducts.length}</strong>
    </article>
    <article class="tracker-summary-card">
      <span>Completed</span>
      <strong>${completedCount}</strong>
    </article>
    <article class="tracker-summary-card">
      <span>In progress</span>
      <strong>${progressCount}</strong>
    </article>
    <article class="tracker-summary-card">
      <span>Needs decisions / next</span>
      <strong>${needsTeamCount + nextUpCount}</strong>
    </article>
  `;

  checklistGrid.innerHTML = checklistItems
    .map(
      (item) => `
        <article class="tracker-card">
          <span class="status-pill ${item.statusClass}">${item.status}</span>
          <h3>${item.title}</h3>
          <p>${item.summary}</p>
          <div class="tracker-card-meta">
            <small>${item.focus}</small>
          </div>
        </article>
      `
    )
    .join("");

  reviewList.innerHTML = reviewNotes
    .map((note) => `<li>${note}</li>`)
    .join("");
};

const renderCart = () => {
  if (!cartItemsContainer || !cartCount || !cartQuantity || !cartSubtotal) {
    return;
  }

  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCount.textContent = String(totalQuantity);
  cartQuantity.textContent = String(totalQuantity);
  cartSubtotal.textContent = formatCurrency(subtotal);

  if (checkoutButton) {
    checkoutButton.disabled = totalQuantity === 0;
  }

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <div class="cart-empty">
        No items yet. Add products from the catalog to test the cart flow.
      </div>
    `;
    return;
  }

  cartItemsContainer.innerHTML = cart
    .map(
      (item) => `
        <article class="cart-item">
          <div class="cart-item-top">
            <div>
              <h4>${item.name}</h4>
              <p>${formatCurrency(item.price)} each</p>
            </div>
            <strong>${formatCurrency(item.price * item.quantity)}</strong>
          </div>
          <div class="cart-controls">
            <div class="qty-controls">
              <button
                class="qty-button"
                type="button"
                data-cart-action="decrement"
                data-product-id="${item.id}"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span>${item.quantity}</span>
              <button
                class="qty-button"
                type="button"
                data-cart-action="increment"
                data-product-id="${item.id}"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
            <button
              class="remove-link"
              type="button"
              data-cart-action="remove"
              data-product-id="${item.id}"
            >
              Remove
            </button>
          </div>
        </article>
      `
    )
    .join("");
};

const addToCart = (productId) => {
  const product = findProduct(productId);

  if (!product) {
    return;
  }

  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
};

const updateCartItem = (productId, action) => {
  const item = cart.find((entry) => entry.id === productId);

  if (!item) {
    return;
  }

  if (action === "increment") {
    item.quantity += 1;
  }

  if (action === "decrement") {
    item.quantity -= 1;
  }

  if (action === "remove" || item.quantity <= 0) {
    cart = cart.filter((entry) => entry.id !== productId);
  }

  renderCart();
};

const getNextWednesdayDeadline = (fromDate = new Date()) => {
  const deadline = new Date(fromDate);
  let daysUntilWednesday = (3 - fromDate.getDay() + 7) % 7;

  if (daysUntilWednesday === 0 && fromDate.getHours() >= 23) {
    daysUntilWednesday = 7;
  }

  deadline.setDate(fromDate.getDate() + daysUntilWednesday);
  deadline.setHours(23, 59, 59, 999);

  return deadline;
};

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
}

if (cartToggle && cartPanel) {
  cartToggle.addEventListener("click", () => {
    if (window.innerWidth > 700) {
      cartPanel.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }

    const isOpen = !document.body.classList.contains("cart-open");
    setCartOpen(isOpen);
  });
}

if (cartClose) {
  cartClose.addEventListener("click", () => setCartOpen(false));
}

if (checkoutButton && checkoutNote) {
  checkoutButton.addEventListener("click", () => {
    if (cart.length === 0) {
      checkoutNote.textContent =
        "Add at least one item to the cart to demo the checkout flow. This button is still a placeholder.";
      return;
    }

    checkoutNote.textContent =
      "Cart demo is working. The next real implementation step is saving cart state and connecting an actual checkout or order workflow.";
  });
}

if (catalogGrid) {
  catalogGrid.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add-to-cart]");

    if (!addButton) {
      return;
    }

    addToCart(addButton.dataset.addToCart);
  });
}

if (filterBar) {
  filterBar.addEventListener("click", (event) => {
    const filterButton = event.target.closest("[data-filter]");

    if (!filterButton) {
      return;
    }

    activeFilter = filterButton.dataset.filter;
    renderFilters();
    renderCatalog();
  });
}

if (cartItemsContainer) {
  cartItemsContainer.addEventListener("click", (event) => {
    const actionButton = event.target.closest("[data-cart-action]");

    if (!actionButton) {
      return;
    }

    updateCartItem(
      actionButton.dataset.productId,
      actionButton.dataset.cartAction
    );
  });
}

window.addEventListener("resize", () => {
  if (window.innerWidth > 860) {
    closeMenu();
  }

  if (window.innerWidth > 700) {
    setCartOpen(false);
  }
});

if (countdown) {
  let deadline = getNextWednesdayDeadline();

  const updateCountdown = () => {
    const now = new Date();

    if (now >= deadline) {
      deadline = getNextWednesdayDeadline(new Date(now.getTime() + 60000));
    }

    const distance = deadline - now;
    const days = Math.floor(distance / 86400000);
    const hours = Math.floor((distance % 86400000) / 3600000);
    const minutes = Math.floor((distance % 3600000) / 60000);
    const seconds = Math.floor((distance % 60000) / 1000);

    countdown.textContent = `${String(days).padStart(2, "0")}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
  };

  updateCountdown();
  window.setInterval(updateCountdown, 1000);
}

renderCatalog();
renderFilters();
renderInfoList(contactList, agentKnowledge.contact);
renderInfoList(locationList, agentKnowledge.location);
renderInfoList(serviceList, agentKnowledge.service);
renderInfoList(pricingList, agentKnowledge.pricing);
renderFaqs();
renderForecast();
renderPerks();
renderSprints();
renderTracker();
renderCart();
