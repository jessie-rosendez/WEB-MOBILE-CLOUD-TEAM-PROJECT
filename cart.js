/**
 * PHANTM STORE - SHOPPING CART LOGIC
 * Assigned to: Pavel
 * Sprint 1: Product Catalog & Cart Functionality
 */

// 1. Data Structure: 18-product catalog requirement
const phantmProducts = [
    { id: 'sig-01', name: 'Phantm AI Companion', price: 499.00, img: 'companion.jpg', category: 'Signature' },
    { id: 'p-02', name: 'Neural-Link Headset', price: 199.99, img: 'audio.jpg', category: 'Audio' },
    { id: 'p-03', name: 'Apex Gaming Mouse', price: 85.00, img: 'peripherals.jpg', category: 'Peripherals' },
    { id: 'p-04', name: 'Titan Mechanical Keyboard', price: 150.00, img: 'kb.jpg', category: 'Peripherals' },
    { id: 'p-05', name: 'Vortex Gaming Chair', price: 350.00, img: 'chair.jpg', category: 'Furniture' },
    { id: 'p-06', name: 'Phantm Pro Controller', price: 75.00, img: 'controller.jpg', category: 'Gaming' },
    { id: 'p-07', name: '4K Ultra-Wide Monitor', price: 600.00, img: 'monitor.jpg', category: 'Display' },
    { id: 'p-08', name: 'RGB Desk Mat', price: 30.00, img: 'mat.jpg', category: 'Accessories' },
    { id: 'p-09', name: 'Streamer Mic Bundle', price: 120.00, img: 'mic.jpg', category: 'Audio' },
    { id: 'p-10', name: 'Noise-Cancelling Buds', price: 110.00, img: 'buds.jpg', category: 'Audio' },
    { id: 'p-11', name: 'Internal 2TB SSD', price: 180.00, img: 'ssd.jpg', category: 'Storage' },
    { id: 'p-12', name: 'External Backup Drive', price: 95.00, img: 'hdd.jpg', category: 'Storage' },
    { id: 'p-13', name: 'Gaming Laptop Stand', price: 45.00, img: 'stand.jpg', category: 'Accessories' },
    { id: 'p-14', name: 'LED Backlight Strip', price: 25.00, img: 'led.jpg', category: 'Accessories' },
    { id: 'p-15', name: 'Phantm PC Case', price: 140.00, img: 'case.jpg', category: 'Hardware' },
    { id: 'p-16', name: 'AIO Liquid Cooler', price: 160.00, img: 'cooler.jpg', category: 'Hardware' },
    { id: 'p-17', name: 'Power Supply 850W', price: 130.00, img: 'psu.jpg', category: 'Hardware' },
    { id: 'p-18', name: 'Phantm Gaming Desk', price: 400.00, img: 'desk.jpg', category: 'Furniture' }
];

// Initialize Cart from LocalStorage to persist data on refresh
let cart = JSON.parse(localStorage.getItem('phantm_cart')) || [];

// 2. Render Products to the HTML Grid
function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = phantmProducts.map(product => `
        <div class="product-card" style="border: 1px solid #ccc; padding: 15px; margin: 10px; border-radius: 8px;">
            <h4>${product.name}</h4>
            <p class="price" style="font-weight: bold;">$${product.price.toFixed(2)}</p>
            <button onclick="addToCart('${product.id}')" style="cursor: pointer;">Add to Cart</button>
        </div>
    `).join('');
}

// 3. Add Item logic
window.addToCart = (productId) => {
    const product = phantmProducts.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCartUI();
    toggleCart(true); // Open the drawer so user sees the update
};

// 4. Update the Sidebar/Drawer UI
function updateCartUI() {
    const cartList = document.getElementById('cart-items-list');
    const totalDisplay = document.getElementById('cart-total-price');
    
    if (!cartList || !totalDisplay) return;

    cartList.innerHTML = cart.map(item => `
        <div class="cart-item" style="display: flex; justify-content: space-between; margin-bottom: 10px;">
            <span>${item.name} (x${item.quantity})</span>
            <span>$${(item.price * item.quantity).toFixed(2)}</span>
            <button onclick="removeFromCart('${item.id}')" style="color: red; border: none; background: none; cursor: pointer;">X</button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalDisplay.innerText = total.toFixed(2);

    // Save to browser memory
    localStorage.setItem('phantm_cart', JSON.stringify(cart));
}

// 5. Remove logic
window.removeFromCart = (productId) => {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
};

// 6. Utility: Show/Hide Drawer
function toggleCart(isOpen) {
    const drawer = document.getElementById('cart-drawer');
    if (drawer) {
        drawer.style.display = isOpen ? 'block' : 'none';
    }
}

// 7. Event Listeners for the Close Button
document.addEventListener('DOMContentLoaded', () => {
    const closeBtn = document.getElementById('close-cart');
    if (closeBtn) {
        closeBtn.onclick = () => toggleCart(false);
    }
    
    renderProducts();
    updateCartUI();
});