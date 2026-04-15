/* PHANTM STOREFRONT — Shared JS */

/* ─── Product Catalog ─────────────────────────────────────── */
const PRODUCTS = [
  /* Laptops */
  { id:"blade-14",  name:"Phantm Blade 14",            sub:"Ultra-Portable Gaming Powerhouse",      cat:"PC",      tag:"Laptop",      price:2399, glow:"rgba(117,255,145,0.28)" },
  { id:"blade-16",  name:"Phantm Blade 16",            sub:"Slim. Immersive. Infinite.",            cat:"PC",      tag:"Laptop",      price:2999, glow:"rgba(77,208,255,0.28)",  badge:"NEW" },
  { id:"blade-18",  name:"Phantm Blade 18",            sub:"Desktop-Class Performance. Portable.",  cat:"PC",      tag:"Laptop",      price:3499, glow:"rgba(181,105,255,0.24)" },
  /* Mice */
  { id:"viper-v4",  name:"Phantm Viper V4 Pro",        sub:"For The Pro.",                          cat:"Mice",    tag:"Mouse",       price:179,  glow:"rgba(255,80,80,0.24)",   badge:"NEW" },
  { id:"da-v4",     name:"Phantm DeathAdder V4 Pro",   sub:"Ergonomic Esports Mouse.",              cat:"Mice",    tag:"Mouse",       price:169,  glow:"rgba(255,118,160,0.22)" },
  { id:"firefly",   name:"Phantm Firefly V2 Pro",      sub:"The Only RGB Mouse Mat.",               cat:"Mice",    tag:"Mouse Mat",   price:109,  glow:"rgba(181,105,255,0.22)" },
  /* Keyboards */
  { id:"bw-v4",     name:"Phantm BlackWidow V4 Pro",   sub:"Full-Size Mechanical Mastery.",         cat:"Keyboards",tag:"Keyboard",   price:229,  glow:"rgba(117,255,145,0.26)" },
  { id:"hunts-8k",  name:"Phantm Huntsman V3 Pro",     sub:"Analog Optical Esports Keyboard.",      cat:"Keyboards",tag:"Keyboard",   price:299,  glow:"rgba(77,208,255,0.22)",  badge:"NEW" },
  { id:"ds-v2",     name:"Phantm DeathStalker V2 Pro", sub:"Low-Profile Wireless Gaming.",          cat:"Keyboards",tag:"Keyboard",   price:249,  glow:"rgba(181,105,255,0.22)" },
  /* Audio */
  { id:"bs-v3",     name:"Phantm BlackShark V3 Pro",   sub:"Wireless ANC Esports Headset.",         cat:"Audio",   tag:"Headset",     price:249,  glow:"rgba(255,177,75,0.2)",   badge:"NEW" },
  { id:"kraken-v4", name:"Phantm Kraken V4 Pro",       sub:"Immersive THX Spatial Audio.",          cat:"Audio",   tag:"Headset",     price:399,  glow:"rgba(117,255,145,0.22)" },
  { id:"nommo-v2",  name:"Phantm Nommo V2 Pro",        sub:"Desktop Speakers. Redefined.",          cat:"Audio",   tag:"Speakers",    price:449,  glow:"rgba(77,208,255,0.2)" },
  /* Controllers */
  { id:"wolv-v3",   name:"Phantm Wolverine V3 Pro",    sub:"Native 8000 Hz Wireless Controller.",   cat:"Console", tag:"Controller",  price:199,  glow:"rgba(255,177,75,0.22)",  badge:"NEW" },
  { id:"kishi-v3",  name:"Phantm Kishi V3 Pro",        sub:"Pro Mobile Gaming Controller.",         cat:"Mobile",  tag:"Controller",  price:149,  glow:"rgba(255,118,160,0.2)" },
  /* Connectivity */
  { id:"tb5-dock",  name:"Phantm Thunderbolt 5 Dock",  sub:"The Creator's Hub.",                    cat:"PC",      tag:"Dock",        price:399,  glow:"rgba(77,208,255,0.22)" },
  /* Desk Setup */
  { id:"gigantus",  name:"Phantm Gigantus V2",         sub:"Precision For Every Playstyle.",        cat:"Lifestyle",tag:"Mouse Mat",  price:39,   glow:"rgba(117,255,145,0.2)" },
  { id:"hyperflux", name:"Phantm HyperFlux V2",        sub:"Wireless Charging. Redefined.",         cat:"Lifestyle",tag:"Charging",   price:119,  glow:"rgba(255,118,160,0.2)" },
  /* Signature Chair */
  { id:"spectre-x", name:"Phantm Spectre X",           sub:"Racing Shell. Creator Utility.",        cat:"Lifestyle",tag:"Chair",      price:799,  glow:"rgba(68,214,44,0.3)",    badge:"ONLY AT PHANTM" },
];

/* ─── Category SVG Icons ─────────────────────────────────── */
const ICONS = {
  Laptop: `<svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="7" y="9" width="40" height="27" rx="2.5" stroke="currentColor" stroke-width="1.8"/><rect x="11" y="13" width="32" height="19" rx="1" fill="currentColor" opacity="0.1" stroke="currentColor" stroke-width="1.2" opacity="0.4"/><path d="M2 38h50l-2.5 6H4.5L2 38z" stroke="currentColor" stroke-width="1.8" fill="none"/><rect x="21" y="38.5" width="12" height="1.5" rx=".75" fill="currentColor" opacity="0.5"/></svg>`,
  Mouse: `<svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 5C18 5 13 12.5 13 21v12c0 9.5 5.5 16 14 16s14-6.5 14-16V21C41 12.5 36 5 27 5z" stroke="currentColor" stroke-width="1.8"/><line x1="27" y1="5" x2="27" y2="24" stroke="currentColor" stroke-width="1.5" opacity="0.55"/><line x1="13" y1="24" x2="41" y2="24" stroke="currentColor" stroke-width="1.3" opacity="0.4"/><circle cx="27" cy="16" r="2.5" stroke="currentColor" stroke-width="1.5" opacity="0.7"/></svg>`,
  "Mouse Mat": `<svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="14" width="46" height="28" rx="4" stroke="currentColor" stroke-width="1.8"/><rect x="4" y="14" width="46" height="28" rx="4" fill="currentColor" opacity="0.07"/><path d="M4 20h46" stroke="currentColor" stroke-width="1" opacity="0.3"/></svg>`,
  Keyboard: `<svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="16" width="46" height="22" rx="3" stroke="currentColor" stroke-width="1.8"/><rect x="8" y="20" width="5" height="4" rx="1" fill="currentColor" opacity="0.55"/><rect x="15" y="20" width="5" height="4" rx="1" fill="currentColor" opacity="0.55"/><rect x="22" y="20" width="5" height="4" rx="1" fill="currentColor" opacity="0.55"/><rect x="29" y="20" width="5" height="4" rx="1" fill="currentColor" opacity="0.55"/><rect x="36" y="20" width="5" height="4" rx="1" fill="currentColor" opacity="0.55"/><rect x="8" y="27" width="5" height="4" rx="1" fill="currentColor" opacity="0.55"/><rect x="15" y="27" width="5" height="4" rx="1" fill="currentColor" opacity="0.55"/><rect x="22" y="27" width="5" height="4" rx="1" fill="currentColor" opacity="0.55"/><rect x="29" y="27" width="5" height="4" rx="1" fill="currentColor" opacity="0.55"/><rect x="36" y="27" width="5" height="4" rx="1" fill="currentColor" opacity="0.55"/><rect x="15" y="34" width="24" height="4" rx="1" fill="currentColor" opacity="0.55"/></svg>`,
  Headset: `<svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 28C12 17.5 18.7 9 27 9s15 8.5 15 19" stroke="currentColor" stroke-width="1.8"/><rect x="7" y="26" width="9" height="14" rx="3.5" stroke="currentColor" stroke-width="1.8"/><rect x="38" y="26" width="9" height="14" rx="3.5" stroke="currentColor" stroke-width="1.8"/><path d="M43 40v5a5 5 0 01-5 5H27" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><circle cx="27" cy="50" r="2.5" stroke="currentColor" stroke-width="1.6"/></svg>`,
  Speakers: `<svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="6" width="16" height="42" rx="3" stroke="currentColor" stroke-width="1.8"/><circle cx="16" cy="20" r="4" stroke="currentColor" stroke-width="1.5"/><circle cx="16" cy="33" r="3" stroke="currentColor" stroke-width="1.5"/><rect x="30" y="10" width="16" height="34" rx="3" stroke="currentColor" stroke-width="1.8"/><circle cx="38" cy="22" r="4" stroke="currentColor" stroke-width="1.5"/><circle cx="38" cy="34" r="3" stroke="currentColor" stroke-width="1.5"/></svg>`,
  Controller: `<svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 23c0-4.5 3.5-10 10-10h18c6.5 0 10 5.5 10 10L42 43c-1 4-4.5 5.5-7.5 5.5-2 0-4-1-8.5-1s-6.5 1-8.5 1C14.5 48.5 11 47 10 43L8 23z" stroke="currentColor" stroke-width="1.8" fill="none"/><line x1="17" y1="22" x2="17" y2="31" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><line x1="12.5" y1="26.5" x2="21.5" y2="26.5" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><circle cx="37" cy="22" r="2.2" fill="currentColor" opacity="0.75"/><circle cx="32" cy="27" r="2.2" fill="currentColor" opacity="0.75"/><circle cx="37" cy="27" r="2.2" fill="currentColor" opacity="0.75"/><circle cx="42" cy="27" r="2.2" fill="currentColor" opacity="0.75"/><circle cx="37" cy="32" r="2.2" fill="currentColor" opacity="0.75"/></svg>`,
  Dock: `<svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="14" width="38" height="24" rx="3" stroke="currentColor" stroke-width="1.8"/><rect x="8" y="14" width="38" height="24" rx="3" fill="currentColor" opacity="0.07"/><rect x="13" y="23" width="6" height="4" rx="1" fill="currentColor" opacity="0.6"/><rect x="22" y="23" width="6" height="4" rx="1" fill="currentColor" opacity="0.6"/><rect x="31" y="23" width="6" height="4" rx="1" fill="currentColor" opacity="0.6"/><line x1="27" y1="38" x2="27" y2="47" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><circle cx="27" cy="50" r="2.5" stroke="currentColor" stroke-width="1.6"/></svg>`,
  Charging: `<svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="34" width="38" height="12" rx="3" stroke="currentColor" stroke-width="1.8"/><circle cx="27" cy="20" r="10" stroke="currentColor" stroke-width="1.8"/><path d="M24 17l-3 6h6l-3 6" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  Chair: `<svg viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="17" y="4" width="20" height="26" rx="4" stroke="currentColor" stroke-width="1.8"/><rect x="14" y="28" width="26" height="8" rx="3" stroke="currentColor" stroke-width="1.8"/><line x1="18" y1="36" x2="14" y2="50" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="36" y1="36" x2="40" y2="50" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="27" y1="36" x2="27" y2="44" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><line x1="20" y1="44" x2="34" y2="44" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
};

const getIcon = (tag) => ICONS[tag] || ICONS.Dock;

/* ─── Currency ───────────────────────────────────────────── */
const fmt = (n) => new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",maximumFractionDigits:0}).format(n);

/* ─── Category Showcase Copy ─────────────────────────────── */
const CATEGORY_SHOWCASES = {
  All: {
    kicker: "Build The Full Setup",
    title: "A Phantm Loadout For Every Playstyle",
    body: "Shop across laptops, keyboards, headsets, controllers, and lifestyle gear from one storefront built to feel premium, cinematic, and competition-ready.",
    theme: "arsenal",
    products: ["blade-16", "hunts-8k", "bs-v3", "spectre-x"],
  },
  PC: {
    kicker: "Phantm PC",
    title: "Gaming Laptops",
    body: "From compact performance to desktop-class power, the Blade lineup anchors the Phantm PC tier with cleaner silhouettes and stronger battlestation presence.",
    theme: "pc",
    products: ["blade-14", "blade-16", "blade-18"],
  },
  Mice: {
    kicker: "Phantm Precision",
    title: "Gaming Mice",
    body: "Ultralight control, ergonomic comfort, and RGB surface gear built to move as one system instead of separate parts.",
    theme: "mice",
    products: ["viper-v4", "da-v4", "firefly"],
  },
  Keyboards: {
    kicker: "Phantm Input",
    title: "Gaming Keyboards",
    body: "Mechanical and optical boards tuned for speed, full-size control, and low-profile desk setups with unmistakable RGB drama.",
    theme: "keyboards",
    products: ["bw-v4", "hunts-8k", "ds-v2"],
  },
  Audio: {
    kicker: "Phantm Audio",
    title: "Gaming Headsets",
    body: "Wireless ANC, immersive spatial sound, and hero-product presentation shaped to feel closer to a premium launch campaign than a flat catalog grid.",
    theme: "audio",
    products: ["bs-v3", "kraken-v4", "nommo-v2"],
  },
  Console: {
    kicker: "Phantm Console",
    title: "Pro Controllers",
    body: "Competitive controller hardware with clean industrial forms, fast wireless response, and merchandising that feels more flagship than filler.",
    theme: "console",
    products: ["wolv-v3"],
  },
  Mobile: {
    kicker: "Phantm Mobile",
    title: "Mobile Gaming",
    body: "Portable control and all-day flexibility for players who move between handheld, phone, and desktop ecosystems.",
    theme: "mobile",
    products: ["kishi-v3"],
  },
  Lifestyle: {
    kicker: "Furniture & Lifestyle",
    title: "Gaming Chairs",
    body: "The Phantm Spectre X — the world's only gaming chair with a heated and cooling seat, a heated and cooling cup holder, full bed recline, and an 8-node massage system. Available exclusively at Phantm.",
    theme: "lifestyle",
    products: ["spectre-x", "hyperflux", "gigantus"],
    panels: [
      {
        title: "Phantm Spectre X // Black / Green",
        sub: "Engineered for ergonomics. Crafted for comfort.",
        href: "product.html?id=spectre-x",
        action: "Learn More",
      },
      {
        title: "Phantm Spectre X // Quartz / Light Gray",
        sub: "Concept finish direction for premium campaign visuals.",
        href: "product.html?id=spectre-x",
        action: "View Product",
      },
    ],
  },
};

/* ─── Cart ───────────────────────────────────────────────── */
const CART_KEY = "phantm-cart-v2";

function cartLoad() {
  try { return JSON.parse(localStorage.getItem(CART_KEY)) || []; }
  catch { return []; }
}
function cartSave(cart) {
  try { localStorage.setItem(CART_KEY, JSON.stringify(cart)); } catch {}
}
function cartAdd(productId) {
  const cart = cartLoad();
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.id === productId);
  if (existing) { existing.qty += 1; }
  else { cart.push({ id: product.id, name: product.name, tag: product.tag, price: product.price, qty: 1, glow: product.glow }); }
  cartSave(cart);
  updateCartBadge();
  flashBadge();
}
function cartUpdate(productId, action) {
  let cart = cartLoad();
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  if (action === "inc") item.qty += 1;
  if (action === "dec") item.qty -= 1;
  if (action === "remove" || item.qty <= 0) cart = cart.filter(i => i.id !== productId);
  cartSave(cart);
  updateCartBadge();
}
function cartTotal(cart) { return cart.reduce((s,i) => s + i.price * i.qty, 0); }
function cartCount(cart) { return cart.reduce((s,i) => s + i.qty, 0); }

function getProductThumbMarkup(item) {
  const src = `src/images/${item.id}.jpg`;
  return `
    <img
      src="${src}"
      alt="${item.name}"
      class="product-thumb-image"
      loading="lazy"
      onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
    />
    <div class="product-thumb-fallback" style="display:none">
      ${getIcon(item.tag)}
    </div>
  `;
}

/* Update the nav cart badge on every page */
function updateCartBadge() {
  const badge = document.getElementById("cartBadge");
  if (!badge) return;
  const n = cartCount(cartLoad());
  badge.textContent = n;
  badge.style.display = n > 0 ? "flex" : "none";
}

function flashBadge() {
  const badge = document.getElementById("cartBadge");
  if (!badge) return;
  badge.classList.remove("badge-flash");
  void badge.offsetWidth;
  badge.classList.add("badge-flash");
}

/* ─── Nav mobile toggle ──────────────────────────────────── */
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links  = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
  });
  // Highlight active nav link
  const page = location.pathname.split("/").pop() || "index.html";
  links.querySelectorAll("a").forEach(a => {
    if (a.getAttribute("href") === page) a.classList.add("active");
  });
}

/* ─── Store Page ─────────────────────────────────────────── */
function initStore() {
  const grid = document.getElementById("productGrid");
  const tabs = document.getElementById("categoryTabs");
  if (!grid || !tabs) return;

  // Read ?cat= from URL to support nav deep-links (e.g. store.html?cat=PC)
  const urlCat = new URLSearchParams(location.search).get("cat") || "All";
  const validCats = ["All", ...new Set(PRODUCTS.map(p => p.cat))];
  const activeCat = validCats.includes(urlCat) ? urlCat : "All";

  tabs.innerHTML = validCats.map(c => `
    <button class="tab-btn${c===activeCat?" active":""}" data-cat="${c}">${c}</button>
  `).join("");

  renderGrid(activeCat);

  function switchTab(cat) {
    const resolved = validCats.includes(cat) ? cat : "All";
    tabs.querySelectorAll(".tab-btn").forEach(b => {
      b.classList.toggle("active", b.dataset.cat === resolved);
    });
    renderGrid(resolved);
  }

  tabs.addEventListener("click", e => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;
    switchTab(btn.dataset.cat);
    history.replaceState(null, "", btn.dataset.cat === "All" ? "store.html" : `store.html?cat=${btn.dataset.cat}`);
  });

  grid.addEventListener("click", e => {
    const buyBtn = e.target.closest("[data-buy]");
    if (buyBtn) { cartAdd(buyBtn.dataset.buy); }
  });

  function renderGrid(cat) {
    const list = cat === "All" ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
    grid.innerHTML = list.map(p => {
      const imgSrc = `src/images/${p.id}.jpg`;
      const detailHref = p.id === "spectre-x" ? "product.html?id=spectre-x" : `product.html?id=${p.id}`;
      return `
      <article class="product-card" style="--card-glow:${p.glow}">
        <a href="${detailHref}" class="product-card-visual" data-img="${imgSrc}" data-icon="${p.tag}" style="text-decoration:none;display:flex;align-items:center;justify-content:center;position:relative;">
          ${getIcon(p.tag)}
          <span class="ph-watermark">PH</span>
        </a>
        <div class="product-card-info">
          ${p.badge ? `<span class="badge-${p.badge==="ONLY AT PHANTM"?"only":"new"} card-badge">${p.badge}</span>` : ""}
          <h3>${p.name}</h3>
          <p class="card-sub">${p.sub}</p>
          <p class="card-price">${fmt(p.price)}</p>
        </div>
        <div class="card-ctas">
          <a class="card-cta-learn" href="${p.id==="spectre-x"?"chair.html":"product.html?id="+p.id}">Learn More &gt;</a>
          <button class="card-cta-buy" data-buy="${p.id}">Buy &gt;</button>
        </div>
      </article>
    `}).join("");

    // Swap SVG icons for real images where available
    grid.querySelectorAll(".product-card-visual[data-img]").forEach(el => {
      const src = el.dataset.img;
      const img = new Image();
      img.onload = () => {
        el.innerHTML = `<img src="${src}" alt="" style="width:60%;max-width:220px;object-fit:contain;filter:drop-shadow(0 0 20px var(--card-glow))"/>`;
      };
      img.src = src;
    });
  }

}

/* ─── Cart Page ──────────────────────────────────────────── */
function initCart() {
  const container = document.getElementById("cartItems");
  const emptyState = document.getElementById("cartEmpty");
  const subtotalEl = document.getElementById("cartSubtotal");
  const totalEl    = document.getElementById("cartTotal");
  const headerEl   = document.getElementById("cartHeaderTotal");
  if (!container) return;

  function render() {
    const cart = cartLoad();
    const total = cartTotal(cart);

    if (headerEl) headerEl.textContent = `Your cart total is ${fmt(total)}`;
    if (subtotalEl) subtotalEl.textContent = fmt(total);
    if (totalEl) totalEl.textContent = fmt(total);

    if (cart.length === 0) {
      container.innerHTML = "";
      if (emptyState) emptyState.style.display = "block";
      return;
    }
    if (emptyState) emptyState.style.display = "none";

    container.innerHTML = cart.map(item => `
      <div class="cart-item" data-id="${item.id}">
        <div class="cart-item-thumb">
          ${getProductThumbMarkup(item)}
        </div>
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p class="item-price">${fmt(item.price)} each</p>
        </div>
        <div class="cart-item-right">
          <span class="item-line-total">${fmt(item.price * item.qty)}</span>
          <div class="qty-controls">
            <button class="qty-btn" data-action="dec" data-id="${item.id}">−</button>
            <span class="qty-display">${item.qty}</span>
            <button class="qty-btn" data-action="inc" data-id="${item.id}">+</button>
          </div>
          <button class="remove-btn" data-action="remove" data-id="${item.id}">Remove</button>
        </div>
      </div>
    `).join("");
  }

  container.addEventListener("click", e => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;
    cartUpdate(btn.dataset.id, btn.dataset.action);
    render();
  });

  render();
}

/* ─── Checkout Page ──────────────────────────────────────── */
function initCheckout() {
  const orderItems = document.getElementById("orderItems");
  const orderSubtotal = document.getElementById("orderSubtotal");
  const orderTotal = document.getElementById("orderTotal");
  if (!orderItems) return;

  const cart = cartLoad();
  const total = cartTotal(cart);

  if (orderSubtotal) orderSubtotal.textContent = fmt(total);
  if (orderTotal) orderTotal.textContent = fmt(total);

  orderItems.innerHTML = cart.map(item => `
    <div class="order-item">
      <div class="order-item-thumb">
        ${getProductThumbMarkup(item)}
        <span class="order-item-qty">${item.qty}</span>
      </div>
      <span class="order-item-name">${item.name}</span>
      <span class="order-item-price">${fmt(item.price * item.qty)}</span>
    </div>
  `).join("") || `<p style="color:var(--gray);font-size:.88rem">No items in cart.</p>`;
}

/* ─── Product Detail Page Data ───────────────────────────── */

/* Features: 6 cards per product type */
const PDP_FEATURES = {
  Laptop: {
    heading: "Built For The Edge",
    sub: "Every component chosen for peak performance in the most demanding sessions.",
    cards: [
      { title:"High-Refresh Display",   body:"QHD 240Hz panel with OLED-level contrast ratios and near-zero response time." },
      { title:"Next-Gen GPU",            body:"NVIDIA RTX 40-series GPU with DLSS 3 and full ray-tracing support." },
      { title:"Whisper Mode Cooling",    body:"Dual-fan vapor chamber keeps thermals quiet under sustained all-day load." },
      { title:"Per-Key RGB",             body:"Full per-key Chroma RGB backlight with 16.8M color programmability." },
      { title:"All-Day Battery",         body:"Up to 12 hours on a charge with the 80Wh cell and smart power management." },
      { title:"CNC Aluminum Chassis",    body:"Milled from a single block of aerospace-grade aluminum. Under 2 kg." },
    ]
  },
  Mouse: {
    heading: "Precision Engineered",
    sub: "From sensor to switch, every detail tuned for competitive play.",
    cards: [
      { title:"Focus Pro 35K Sensor",    body:"35,000 DPI optical sensor with zero smoothing, filtering, or acceleration." },
      { title:"8000 Hz Polling Rate",     body:"Reports position 8× faster than standard mice for sub-millisecond response." },
      { title:"HyperSpeed Wireless",      body:"Phantm's 2.4GHz wireless delivers <1ms latency — identical to wired." },
      { title:"280-Hour Battery",         body:"Up to 280 hours of continuous play on a single charge." },
      { title:"Optical Switches",         body:"70M click rated optical switches with zero debounce delay." },
      { title:"Lightweight Build",        body:"Under 80g with honeycomb shell option for extended play without fatigue." },
    ]
  },
  "Mouse Mat": {
    heading: "The Foundation Of Your Setup",
    sub: "Surface, lighting, and size engineered as one unified system.",
    cards: [
      { title:"Micro-Textured Cloth",    body:"Precision weave optimized for both high-DPI optical and laser sensors." },
      { title:"Chroma RGB Underglow",    body:"19-zone addressable RGB lighting with 16.8M colors per zone." },
      { title:"Anti-Slip Base",           body:"Rubberized base grips any desk surface — even glass." },
      { title:"USB-A Passthrough",        body:"Built-in USB hub keeps your receiver or dongle cable-free on the desk." },
      { title:"Extended XL Size",         body:"930×300mm — room for your keyboard, mouse, and full low-sensitivity sweeps." },
      { title:"Spill-Resistant Surface",  body:"Nano-coated top layer repels water and light liquid spills." },
    ]
  },
  Keyboard: {
    heading: "Every Keystroke Counts",
    sub: "Optical precision, 8000Hz polling, and full per-key control.",
    cards: [
      { title:"Optical Switches",         body:"Analog optical switches actuate at 1.5mm with 100M keystroke rating." },
      { title:"8000 Hz Polling Rate",     body:"Keyboard state reported 8× faster than standard for zero input lag." },
      { title:"Tri-Mode Connectivity",    body:"USB-C wired, 2.4GHz wireless, and Bluetooth — one keyboard, all devices." },
      { title:"Per-Key Chroma RGB",       body:"Full per-key lighting with reactive, audio-responsive, and ambient modes." },
      { title:"N-Key Rollover",           body:"Every key registered simultaneously — no ghosting under any condition." },
      { title:"Detachable Wrist Rest",    body:"Magnetically attached memory foam wrist rest included in-box." },
    ]
  },
  Headset: {
    heading: "Hear Everything",
    sub: "Immersive spatial audio with ANC built for long-session comfort.",
    cards: [
      { title:"50mm Titanium Drivers",    body:"Tuned for wide soundstage with extended bass response and crisp highs." },
      { title:"THX Spatial Audio",        body:"Software-powered surround processing maps sound in three-dimensional space." },
      { title:"Beamforming Mic + ANC",    body:"Dual microphone array isolates your voice and cancels background noise." },
      { title:"70-Hour Battery",          body:"Up to 70 hours wireless on a single charge with ANC off." },
      { title:"HyperSpeed Wireless",      body:"Sub-1ms 2.4GHz wireless. No perceptible latency in any game." },
      { title:"Memory Foam Cushions",     body:"Breathable leatherette with pressure-equalizing foam for all-day wear." },
    ]
  },
  Speakers: {
    heading: "Feel The Game",
    sub: "Room-filling audio with THX certification and Chroma immersion.",
    cards: [
      { title:"120W THX Certified",       body:"Full 120W RMS output across satellite drivers and an 8-inch subwoofer." },
      { title:"8-Inch Subwoofer",         body:"Down-firing bass driver delivers physical impact at any volume level." },
      { title:"THX Spatial Audio",        body:"Virtual surround processing for games, music, and cinema at your desk." },
      { title:"Chroma RGB Lighting",      body:"Reactive Chroma underglow syncs with your in-game events and music." },
      { title:"Multi-Source Input",       body:"USB, optical, and 3.5mm AUX — switch sources without unplugging." },
      { title:"Bedside Remote Control",   body:"Wireless desktop controller for volume, EQ, and lighting presets." },
    ]
  },
  Controller: {
    heading: "Compete Without Compromise",
    sub: "Pro-grade ergonomics and 8000Hz wireless for every platform.",
    cards: [
      { title:"8000 Hz Wireless",         body:"Phantm HyperSpeed wireless reports at 8000Hz — matches wired pro controllers." },
      { title:"Hair-Trigger Locks",       body:"Two-stage trigger locks for hair-trigger mode in FPS titles." },
      { title:"4 Remappable Buttons",     body:"Four rear paddles remap any face button or combo without software." },
      { title:"Mecha-Tactile Bumpers",    body:"Clicky tactile bumpers with shorter travel and faster reset than standard." },
      { title:"30-Hour Battery",          body:"30 hours of wireless play on a single charge via USB-C." },
      { title:"Universal Compatibility",  body:"Works on PC, Xbox, PS5 (via adapter), and mobile via Bluetooth." },
    ]
  },
  Dock: {
    heading: "One Hub. Every Device.",
    sub: "Thunderbolt 5 bandwidth for creators, streamers, and power users.",
    cards: [
      { title:"Thunderbolt 5 Interface",  body:"120Gbps bidirectional bandwidth — enough for dual 8K displays and full storage." },
      { title:"Dual Display Output",      body:"Two DisplayPort 2.1 + one HDMI 2.1 outputs simultaneously." },
      { title:"96W Pass-Through Power",   body:"Charges your laptop at full speed while powering all connected devices." },
      { title:"4× USB-A 3.2",            body:"Full USB 3.2 Gen 2 on all four downstream ports." },
      { title:"2× USB-C Downstream",     body:"Two USB-C ports with 20Gbps each for fast storage and peripherals." },
      { title:"2.5G Ethernet",            body:"Integrated 2.5 Gigabit Ethernet port for stable low-latency network." },
    ]
  },
  Charging: {
    heading: "No Cables. No Interruptions.",
    sub: "Extended wireless charging surface built for your gaming desk.",
    cards: [
      { title:"HyperFlux Technology",     body:"Proprietary wireless power delivery optimized for gaming mice in motion." },
      { title:"Extended Surface",         body:"Full XL mat surface so your mouse charges anywhere it rests." },
      { title:"15W Maximum Output",       body:"Charges compatible mice at full speed even during intense gameplay." },
      { title:"Chroma RGB Edge Lighting", body:"16-zone addressable RGB border light reacts to in-game events." },
      { title:"USB-C 1.8m Cable",         body:"Included 1.8m braided USB-C cable keeps the desk tidy." },
      { title:"Simultaneous Charging",    body:"Charge mouse and phone (Qi) simultaneously from a single cable." },
    ]
  },
  Chair: {
    heading: "Built Different. Available Nowhere Else.",
    sub: "The Phantm Spectre X is the only gaming chair on the market that heats your seat, cools your drink, reclines into a full bed, and delivers a complete massage — engineered exclusively for Phantm.",
    cards: [
      { title:"Heated & Cooling Seat",    body:"Dual-zone thermoelectric seat cushion lets you choose between warming heat or cooling relief — adjustable on the fly so every session feels exactly right." },
      { title:"Heated & Cooling Cup Holder", body:"Built-in smart cup holder keeps your drink cold or hot depending on your preference, powered directly through the chair's USB hub. Never leave your setup for a refill again." },
      { title:"Full Recline — Converts to Bed", body:"The Spectre X reclines completely flat into a full sleeping surface. Flip down the integrated leg rest and you have a bed-grade recline that no other gaming chair offers." },
      { title:"Full-Body Massage System", body:"Eight embedded massage nodes across the lumbar, back, and seat deliver customizable vibration therapy. Choose from five massage patterns to relieve tension during long sessions or between matches." },
      { title:"Adaptive Lumbar Spine",    body:"A four-zone adjustable lumbar system that adapts to your posture throughout the marathon sessions the Spectre X was built for." },
      { title:"Modular Mount System",     body:"Snap-on side rails accept headset mount, controller holders, and phone arm accessories — the ultimate battlestation command center." },
    ]
  },
};

/* Video label per product */
const PDP_VIDEO = {
  Laptop:     p => `Watch: ${p.name} — Engineering Deep Dive (2:00)`,
  Mouse:      p => `Watch: ${p.name} — Sensor & Switch Breakdown (1:30)`,
  "Mouse Mat":p => `Watch: ${p.name} — Setup Tour & RGB Demo (1:00)`,
  Keyboard:   p => `Watch: ${p.name} — Switch Feel & Performance (1:30)`,
  Headset:    p => `Watch: ${p.name} — Sound Demo & Mic Test (2:00)`,
  Speakers:   p => `Watch: ${p.name} — Audio Demo & THX Walkthrough (2:00)`,
  Controller: p => `Watch: ${p.name} — Pro Feel & Feature Tour (1:30)`,
  Dock:       p => `Watch: ${p.name} — Full Setup Walkthrough (1:00)`,
  Charging:   p => `Watch: ${p.name} — Desk Setup & Charging Demo (1:00)`,
  Chair:      p => `Watch: ${p.name} — The Full Story (1:30)`,
};

/* Compare table per product type: [col2, col3, col4] competitor names + rows */
const COMPARE_TABLES = {
  Laptop: {
    cols: ["Phantm", "ASUS ROG", "MSI Titan"],
    rows: [
      { label:"Price",         vals:[null, "from $2,299","from $2,199"] },
      { label:"Display",       vals:["QHD 240Hz","QHD 240Hz","FHD 360Hz"] },
      { label:"GPU",           vals:["RTX 40-Series","RTX 40-Series","RTX 40-Series"] },
      { label:"Polling Rate",  vals:["8000 Hz","—","—"] },
      { label:"Per-Key RGB",   vals:[true,true,true] },
      { label:"Weight",        vals:["< 2 kg","2.1 kg","2.5 kg"] },
    ]
  },
  Mouse: {
    cols: ["Phantm","Logitech G Pro","SteelSeries Prime"],
    rows: [
      { label:"Price",         vals:[null,"$149","$129"] },
      { label:"Max DPI",       vals:["35,000","25,600","18,000"] },
      { label:"Polling Rate",  vals:["8000 Hz","8000 Hz","1000 Hz"] },
      { label:"Wireless",      vals:[true,true,false] },
      { label:"Battery",       vals:["280 hrs","95 hrs","—"] },
      { label:"Optical Switch",vals:[true,false,true] },
    ]
  },
  "Mouse Mat": {
    cols: ["Phantm","SteelSeries QcK","Corsair MM700"],
    rows: [
      { label:"Price",         vals:[null,"$59","$89"] },
      { label:"RGB",           vals:[true,false,true] },
      { label:"USB Hub",       vals:[true,false,true] },
      { label:"Spill Resist",  vals:[true,false,false] },
      { label:"Size",          vals:["930×300mm","900×300mm","930×300mm"] },
      { label:"Wireless Power",vals:[false,false,false] },
    ]
  },
  Keyboard: {
    cols: ["Phantm","Corsair K100","SteelSeries Apex Pro"],
    rows: [
      { label:"Price",         vals:[null,"$229","$199"] },
      { label:"Switch",        vals:["Optical","Cherry MX","OmniPoint Mag"] },
      { label:"Polling Rate",  vals:["8000 Hz","8000 Hz","8000 Hz"] },
      { label:"Wireless",      vals:[true,false,false] },
      { label:"Per-Key RGB",   vals:[true,true,true] },
      { label:"Wrist Rest",    vals:[true,false,false] },
    ]
  },
  Headset: {
    cols: ["Phantm","SteelSeries Arctis Nova Pro","Astro A50"],
    rows: [
      { label:"Price",         vals:[null,"$349","$299"] },
      { label:"Battery",       vals:["70 hrs","22 hrs","15 hrs"] },
      { label:"ANC",           vals:[true,true,false] },
      { label:"THX Audio",     vals:[true,false,false] },
      { label:"Wireless",      vals:[true,true,true] },
      { label:"Mic ANC",       vals:[true,true,false] },
    ]
  },
  Speakers: {
    cols: ["Phantm","Logitech G560","Corsair SP2500"],
    rows: [
      { label:"Price",         vals:[null,"$199","$299"] },
      { label:"Total Power",   vals:["120W","240W","200W"] },
      { label:"THX Certified", vals:[true,false,false] },
      { label:"RGB",           vals:[true,true,false] },
      { label:"Subwoofer",     vals:["8-inch","5.25-inch","5.25-inch"] },
      { label:"USB Input",     vals:[true,true,false] },
    ]
  },
  Controller: {
    cols: ["Phantm","Xbox Elite S2","SCUF Instinct Pro"],
    rows: [
      { label:"Price",         vals:[null,"$179","$209"] },
      { label:"Polling Rate",  vals:["8000 Hz","125 Hz","125 Hz"] },
      { label:"Rear Paddles",  vals:["4","4","4"] },
      { label:"Wireless",      vals:[true,true,true] },
      { label:"Hair Triggers", vals:[true,true,true] },
      { label:"Battery",       vals:["30 hrs","40 hrs","—"] },
    ]
  },
  Dock: {
    cols: ["Phantm","CalDigit TS4","OWC Thunderbolt 4"],
    rows: [
      { label:"Price",         vals:[null,"$379","$299"] },
      { label:"Interface",     vals:["TB5","TB4","TB4"] },
      { label:"Bandwidth",     vals:["120Gbps","40Gbps","40Gbps"] },
      { label:"USB-A Ports",   vals:["4","5","3"] },
      { label:"Power Delivery",vals:["96W","98W","60W"] },
      { label:"2.5G Ethernet", vals:[true,true,false] },
    ]
  },
  Charging: {
    cols: ["Phantm","Corsair MM1000","SteelSeries QcK Charge"],
    rows: [
      { label:"Price",         vals:[null,"$99","$79"] },
      { label:"Max Output",    vals:["15W","10W","10W"] },
      { label:"RGB",           vals:[true,false,false] },
      { label:"Qi Charging",   vals:[true,true,true] },
      { label:"Mat Surface",   vals:[true,true,true] },
      { label:"Extended Size", vals:[true,false,false] },
    ]
  },
  Chair: {
    cols: ["Phantm Spectre X","Razer Iskur V2","Razer Enki"],
    rows: [
      { label:"Price",              vals:[null,"$499","$299"] },
      { label:"Heated Seat",        vals:[true,false,false] },
      { label:"Cooling Seat",       vals:[true,false,false] },
      { label:"Heated/Cooling Cup Holder", vals:[true,false,false] },
      { label:"Reclines to Full Bed",vals:[true,false,false] },
      { label:"Massage System",     vals:["8-Node Full Body","—","—"] },
      { label:"Adaptive Lumbar",    vals:["4-Zone","Built-In","—"] },
      { label:"Modular Mounts",     vals:[true,false,false] },
      { label:"Armrests",           vals:["4D","4D","4D"] },
    ]
  },
};

/* ─── Color / Variant Options per product type ──────────────── */
const COLOR_OPTIONS = {
  Laptop:     [{ name:"Phantom Black", hex:"#111" }, { name:"Mercury Silver", hex:"#b0b4b8" }],
  Mouse:      [{ name:"Phantom Black", hex:"#111" }, { name:"Mercury White", hex:"#ddd" }],
  "Mouse Mat":[{ name:"Phantom Black", hex:"#111" }, { name:"Esports Green", hex:"#44D62C" }],
  Keyboard:   [{ name:"Phantom Black", hex:"#111" }, { name:"Mercury White", hex:"#ddd" }, { name:"Esports Green Edition", hex:"#44D62C" }],
  Headset:    [{ name:"Phantom Black", hex:"#111" }, { name:"Mercury White", hex:"#ddd" }, { name:"Phantom Green Edition", hex:"#0b3f18" }, { name:"Phantom White Edition", hex:"#e9ecef" }],
  Speakers:   [{ name:"Phantom Black", hex:"#111" }],
  Controller: [{ name:"Phantom Black", hex:"#111" }, { name:"Mercury White", hex:"#ddd" }, { name:"Esports Green", hex:"#44D62C" }],
  Dock:       [{ name:"Phantom Black", hex:"#111" }],
  Charging:   [{ name:"Phantom Black", hex:"#111" }, { name:"Esports Green", hex:"#44D62C" }],
  Chair:      [{ name:"Black / Green", hex:"#44D62C" }, { name:"Phantom Black", hex:"#111" }, { name:"Quartz", hex:"#f2aebf" }, { name:"Light Gray", hex:"#c9ccd1" }],
};

const PDP_OPTION_GROUPS = {
  Keyboard: [{ label:"Size", options:["Full Size", "Tenkeyless"] }],
  Headset: [{ label:"Platform", options:["PC", "PlayStation", "Xbox"] }],
  Controller: [{ label:"Platform", options:["PlayStation & PC", "Xbox & PC", "Tournament Black"] }],
};

const PDP_MEDIA_FRAMES = {
  Laptop: ["Studio Shot", "Display Glow", "Keyboard Deck", "Profile View"],
  Mouse: ["Main Angle", "Charging Setup", "Desk Shot", "Profile View"],
  "Mouse Mat": ["Full Surface", "RGB Edge", "Desk Setup", "Texture Detail"],
  Keyboard: ["Main Setup", "Keycap Glow", "Desk Angle", "Low Profile"],
  Headset: ["Hero Angle", "White Variant", "Desk Setup", "Cup Detail"],
  Speakers: ["Desk Pair", "Subwoofer", "RGB Demo", "Control Detail"],
  Controller: ["Hero Shot", "Rear View", "Angle Detail", "In-Hand Setup"],
  Dock: ["Front Ports", "Desk Setup", "Rear I/O", "Creator Rig"],
  Charging: ["Surface View", "Charging Glow", "Desk Setup", "Detail"],
  Chair: ["Studio Hero", "Rear Silhouette", "Battlestation Scene", "Lumbar Detail"],
};

/* ─── Top Picks (4 related product IDs per product type) ────── */
const TOP_PICKS_IDS = {
  Laptop:     ["viper-v4",   "bw-v4",     "bs-v3",    "tb5-dock"],
  Mouse:      ["bw-v4",      "firefly",   "bs-v3",    "hunts-8k"],
  "Mouse Mat":["viper-v4",   "bw-v4",     "bs-v3",    "hyperflux"],
  Keyboard:   ["viper-v4",   "bs-v3",     "firefly",  "blade-16"],
  Headset:    ["viper-v4",   "bw-v4",     "nommo-v2", "bs-v3"],
  Speakers:   ["bs-v3",      "kraken-v4", "bw-v4",    "viper-v4"],
  Controller: ["blade-16",   "bs-v3",     "bw-v4",    "kishi-v3"],
  Dock:       ["blade-16",   "blade-18",  "blade-14", "tb5-dock"],
  Charging:   ["viper-v4",   "firefly",   "bw-v4",    "hyperflux"],
  Chair:      ["gigantus",   "hyperflux", "bw-v4",    "spectre-x"],
};

/* ─── Awards data per product type ──────────────────────────── */
const AWARDS = {
  Laptop:     [
    { icon:"★★★★★", source:"Tom's Guide", label:"Best Gaming Laptop 2026" },
    { icon:"⬡",     source:"PC Gamer",    label:"Editor's Choice" },
    { icon:"✦",     source:"IGN",         label:"9.5 / 10" },
    { icon:"▲",     source:"The Verge",   label:"Top Pick" },
  ],
  Mouse:      [
    { icon:"★★★★★", source:"PC Gamer",    label:"Best Wireless Mouse" },
    { icon:"⬡",     source:"Tom's Guide", label:"Editor's Choice" },
    { icon:"✦",     source:"GamesRadar",  label:"5 Stars" },
  ],
  Keyboard:   [
    { icon:"★★★★★", source:"Tom's Guide", label:"Best Gaming Keyboard" },
    { icon:"⬡",     source:"PC Gamer",    label:"Editor's Choice" },
    { icon:"✦",     source:"IGN",         label:"9.2 / 10" },
  ],
  Headset:    [
    { icon:"★★★★★", source:"GamesRadar",  label:"Editor's Choice" },
    { icon:"⬡",     source:"Tom's Guide", label:"Best Wireless Headset" },
    { icon:"✦",     source:"Rtings",      label:"9.1 / 10" },
    { icon:"▲",     source:"IGN",         label:"Top Pick 2026" },
  ],
  Controller: [
    { icon:"★★★★★", source:"IGN",         label:"Best Pro Controller" },
    { icon:"⬡",     source:"GamesRadar",  label:"5 Stars" },
  ],
  Chair:      [
    { icon:"★★★★★", source:"PC Gamer",    label:"Best Gaming Chair 2026" },
    { icon:"⬡",     source:"Tom's Guide", label:"Editor's Choice" },
    { icon:"✦",     source:"GamesRadar",  label:"5 Stars" },
    { icon:"▲",     source:"IGN",         label:"Top Pick" },
  ],
};

/* ─── Chair add-to-cart (legacy — still called on chair.html redirect) ── */
function initChair() {
  const btn = document.getElementById("chairAddToCart");
  if (!btn) return;
  btn.addEventListener("click", () => {
    cartAdd("spectre-x");
    btn.textContent = "Added to Cart ✓";
    btn.style.background = "#5aff3c";
    setTimeout(() => { btn.textContent = "Buy Now"; btn.style.background = ""; }, 1800);
  });
}

/* ─── Bootstrap ──────────────────────────────────────────── */
document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  initNav();
  initStore();
  initCart();
  initCheckout();
  initChair();

  // Inline add-to-cart buttons on homepage
  document.querySelectorAll("[data-add]").forEach(btn => {
    btn.addEventListener("click", () => cartAdd(btn.dataset.add));
  });
});
