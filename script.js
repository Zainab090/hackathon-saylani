document.addEventListener('DOMContentLoaded', () => {
    const cart = [];

    // Select all "Shop Now" buttons
    const shopNowButtons = document.querySelectorAll('.product-button');

    shopNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            
            // Add product to the cart
            cart.push(product);
            
            // Optional: Display a message or update the cart icon
            console.log(`${product} added to the cart`);
            updateCartDisplay();
        });
    });

    function updateCartDisplay() {
        const cartIcon = document.querySelector('.cart-icon');
        cartIcon.textContent = cart.length; // Show the number of items in the cart
    }
});
