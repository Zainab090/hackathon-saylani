const slider = document.querySelector('.product-grid');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    const totalProducts = document.querySelectorAll('.product').length;
    currentIndex = (currentIndex + 1) % totalProducts;
    updateSlider();
});

prevButton.addEventListener('click', () => {
    const totalProducts = document.querySelectorAll('.product').length;
    currentIndex = (currentIndex - 1 + totalProducts) % totalProducts;
    updateSlider();
});

function updateSlider() {
    const offset = -currentIndex * 100;
    slider.style.transform = `translateX(${offset}%)`;
}




let cart = [];

// Product prices mapping
const productPrices = {
    '900-billion': 120,
    '450-billion': 80,
    '112-billion': 40
};

// Add event listeners to "Shop Now" buttons
document.querySelectorAll('.product-button').forEach(button => {
    button.addEventListener('click', (e) => {
        const productId = e.target.dataset.product;
        addToCart(productId);
    });
});

// Add to cart function
function addToCart(productId) {
    const productExists = cart.find(item => item.id === productId);

    if (productExists) {
        productExists.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1, price: productPrices[productId] });
    }

    displayCart();
    openCartModal();
}

// Display cart function
function displayCart() {
    const cartModal = document.createElement('div');
    cartModal.className = 'cart-modal';
    cartModal.innerHTML = '<h2>Your Cart</h2>';

    let totalPrice = 0;
    cart.forEach(item => {
        const itemTotal = item.quantity * item.price;
        totalPrice += itemTotal;
        cartModal.innerHTML += `
            <div class="cart-item">
                <p>${item.id} - ${item.quantity} x $${item.price} = $${itemTotal}</p>
            </div>
        `;
    });

    cartModal.innerHTML += `<h3>Total: $${totalPrice}</h3>`;
    cartModal.innerHTML += '<button class="close-cart">Close</button>';

    document.body.appendChild(cartModal);

    document.querySelector('.close-cart').addEventListener('click', () => {
        document.body.removeChild(cartModal);
    });
}

// Open cart modal function
function openCartModal() {
    const cartIcon = document.querySelector('.cart-icon');
    cartIcon.addEventListener('click', displayCart);
}

// CSS for the modal (You can place this in styles.css or add dynamically)
const styles = document.createElement('style');
styles.innerHTML = `
    .cart-modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 20px;
        border: 1px solid #ccc;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        z-index: 1000;
    }
    .cart-item {
        margin: 10px 0;
    }
    .close-cart {
        margin-top: 20px;
        padding: 10px 20px;
        cursor: pointer;
    }
`;
document.head.appendChild(styles);




















