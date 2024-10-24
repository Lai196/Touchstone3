document.addEventListener('DOMContentLoaded', function() {
    // Cart items array
    let cart = [];

    // subscription
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('Thank you for the subscription!!!');
        });
    }

    // Add to Cart button
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const productTitle = button.parentElement.querySelector('h3').innerText;
            
            cart.push(productTitle);
            
            // Alert
            alert(`"${productTitle}" has been added to the cart!`);
        });
    });

    // View Cart button
    const viewCartButton = document.querySelector('.view-cart');
    if (viewCartButton) {
        viewCartButton.addEventListener('click', function() {
            displayCartModal(); 
        });
    }

    // Function for display cart
    function displayCartModal() {
        let cartContent = '<h2>Your Cart</h2><ul>';
        if (cart.length === 0) {
            cartContent += '<li>Your cart is empty!</li>';
        } else {
            cart.forEach(item => {
                cartContent += `<li>${item}</li>`;
            });
        }
        cartContent += '</ul>';

        cartContent += `
            <button id="clear-cart">Clear Cart</button>
            <button id="place-order">Place Order</button>
        `;

        showCartModal(cartContent);

        // Clear Cart button
        document.getElementById('clear-cart').addEventListener('click', function() {
            cart = []; 
            displayCartModal();
        });

        // Place Order button
        document.getElementById('place-order').addEventListener('click', function() {
            cart = []; 
            alert('Thank you for your order.'); 
            closeModal();
        });
    }

    // Function for alert
    function showCartModal(content) {
        const modalOverlay = document.createElement('div');
        modalOverlay.id = 'modal-overlay';
        const modal = document.createElement('div');
        modal.id = 'cart-modal';
        modal.innerHTML = content;

        modalOverlay.appendChild(modal);
        document.body.appendChild(modalOverlay);

        modalOverlay.addEventListener('click', closeModal);
    }

    function closeModal() {
        const modalOverlay = document.getElementById('modal-overlay');
        if (modalOverlay) {
            modalOverlay.remove();
        }
    }
});
