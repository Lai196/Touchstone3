document.addEventListener('DOMContentLoaded', function() {
    // Array to store cart items
    let cart = [];

    // Handle subscription form submission
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for the subscription!!!');
        });
    }

    // Handle Add to Cart button clicks
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get product title
            const productTitle = button.parentElement.querySelector('h3').innerText;
            
            // Add item to cart
            cart.push(productTitle);
            
            // Alert for adding to cart
            alert(`"${productTitle}" has been added to the cart!`);
        });
    });

    // Handle View Cart button click
    const viewCartButton = document.querySelector('.view-cart');
    if (viewCartButton) {
        viewCartButton.addEventListener('click', function() {
            displayCartModal(); // Show the cart modal
        });
    }

    // Function to display the cart modal
    function displayCartModal() {
        // Create cart content
        let cartContent = '<h2>Your Cart</h2><ul>';
        if (cart.length === 0) {
            cartContent += '<li>Your cart is empty!</li>';
        } else {
            cart.forEach(item => {
                cartContent += `<li>${item}</li>`;
            });
        }
        cartContent += '</ul>';

        // Add buttons for "Clear Cart" and "Place Order"
        cartContent += `
            <button id="clear-cart">Clear Cart</button>
            <button id="place-order">Place Order</button>
        `;

        // Show cart in a modal-like alert
        showCartModal(cartContent);

        // Handle "Clear Cart" button
        document.getElementById('clear-cart').addEventListener('click', function() {
            cart = []; // Clear the cart array
            displayCartModal(); // Refresh the modal to show an empty cart
        });

        // Handle "Place Order" button
        document.getElementById('place-order').addEventListener('click', function() {
            cart = []; // Clear the cart after placing order
            alert('Thank you for your order.'); // Show order confirmation
            closeModal(); // Close the modal
        });
    }

    // Function to display a modal-like alert
    function showCartModal(content) {
        // Create modal elements
        const modalOverlay = document.createElement('div');
        modalOverlay.id = 'modal-overlay';
        const modal = document.createElement('div');
        modal.id = 'cart-modal';
        modal.innerHTML = content;

        // Append modal to overlay and to the body
        modalOverlay.appendChild(modal);
        document.body.appendChild(modalOverlay);

        // Add close functionality
        modalOverlay.addEventListener('click', closeModal);
    }

    // Function to close the modal
    function closeModal() {
        const modalOverlay = document.getElementById('modal-overlay');
        if (modalOverlay) {
            modalOverlay.remove();
        }
    }
});
