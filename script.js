// User authentication
let user = null;

// Product data
const products = [
    { id: 1, name: "Product 1", price: 10.99, image: "product1.jpg" },
    { id: 2, name: "Product 2", price: 9.99, image: "product2.jpg" },
    // Add more products here
];

// Cart data
let cart = [];

// Function to render products
function renderProducts() {
    const productList = document.getElementById("product-list");
    productList.innerHTML = "";
    products.forEach((product) => {
        const productHTML = `
            <div class="product">
                <h2>${product.name}</h2>
                <p>Price: $${product.price}</p>
                <img src="../images/${product.image}" alt="${product.name}">
                <button class="add-to-cart-btn">Add to Cart</button>
            </div>
        `;
        productList.innerHTML += productHTML;
    });
}

// Function to render cart items
function renderCartItems() {
    const cartItemsList = document.getElementById("cart-items");
    cartItemsList.innerHTML = "";
    cart.forEach((item) => {
        const cartItemHTML = `
            <div class="cart-item">
                <h2>${item.name}</h2>
                <p>Quantity: ${item.quantity}</p>
                <p>Subtotal: $${item.price * item.quantity}</p>
                <button class="remove-from-cart-btn">Remove</button>
            </div>
        `;
        cartItemsList.innerHTML += cartItemHTML;
    });
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
    renderCartItems();
});

// Add event listeners for add-to-cart and remove-from-cart buttons
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart-btn")) {
        const productId = e.target.parentNode.dataset.productId;
        const product = products.find((p) => p.id === parseInt(productId));
        cart.push({ ...product, quantity: 1 });
        renderCartItems();
    } else if (e.target.classList.contains("remove-from-cart-btn")) {
        const cartItemId = e.target.parentNode.dataset.cartItemId;
        cart = cart.filter((item) => item.id !== parseInt(cartItemId));
        renderCartItems();
    }
});