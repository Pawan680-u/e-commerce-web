// Sample product data
const products = [
  { id: 1, name: "Wireless Headphones", price: 49.99, img: "https://via.placeholder.com/300x200?text=Headphones" },
  { id: 2, name: "Smart Watch", price: 89.99, img: "https://via.placeholder.com/300x200?text=Smart+Watch" },
  { id: 3, name: "Sneakers", price: 59.99, img: "https://via.placeholder.com/300x200?text=Sneakers" },
  { id: 4, name: "Backpack", price: 39.99, img: "https://via.placeholder.com/300x200?text=Backpack" },
];

let cartCount = 0;

// Safely ensure we have a cart badge; create one if missing
function getCartBadge() {
  let badge = document.getElementById("cart-count");
  if (!badge) {
    const cartDiv = document.createElement("div");
    cartDiv.id = "cart";
    cartDiv.style.position = "fixed";
    cartDiv.style.top = "10px";
    cartDiv.style.right = "20px";
    cartDiv.style.background = "orange";
    cartDiv.style.padding = "8px 12px";
    cartDiv.style.borderRadius = "6px";
    cartDiv.innerHTML = `🛒 Cart: <span id="cart-count">0</span>`;
    document.body.appendChild(cartDiv);
    badge = document.getElementById("cart-count");
  }
  return badge;
}

function updateCartCount() {
  const badge = getCartBadge();
  badge.textContent = cartCount;
}

// Add to cart (works in type="module" too since we use addEventListener)
function addToCart(product) {
  cartCount++;
  updateCartCount();
  console.log(`Added to cart: ${product.name}`);
}

// Render products without inline onclick
const productList = document.getElementById("product-list");
if (!productList) {
  throw new Error('Missing element with id="product-list"');
}

productList.innerHTML = "";
products.forEach(product => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
    <img src="${product.img}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>$${product.price}</p>
  `;
  const btn = document.createElement("button");
  btn.textContent = "Add to Cart";
  btn.addEventListener("click", () => addToCart(product)); // ✅ no inline onclick
  div.appendChild(btn);
  productList.appendChild(div);
});

// Initialize badge on load
updateCartCount();
