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

  tabs.addEventListener("click", e => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;
    tabs.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderGrid(btn.dataset.cat);
  });

  grid.addEventListener("click", e => {
    const buyBtn = e.target.closest("[data-buy]");
    if (buyBtn) { cartAdd(buyBtn.dataset.buy); }
  });

  function renderGrid(cat) {
    const list = cat === "All" ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
    grid.innerHTML = list.map(p => {
      const imgSrc = `src/images/${p.id}.jpg`;
      return `
      <article class="product-card" style="--card-glow:${p.glow}">
        <div class="product-card-visual" data-img="${imgSrc}" data-icon="${p.tag}">
          ${getIcon(p.tag)}
          <span class="ph-watermark">PH</span>
        </div>
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
        <div class="cart-item-thumb">${getIcon(item.tag)}</div>
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
        ${getIcon(item.tag)}
        <span class="order-item-qty">${item.qty}</span>
      </div>
      <span class="order-item-name">${item.name}</span>
      <span class="order-item-price">${fmt(item.price * item.qty)}</span>
    </div>
  `).join("") || `<p style="color:var(--gray);font-size:.88rem">No items in cart.</p>`;
}

/* ─── Chair add-to-cart ──────────────────────────────────── */
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
