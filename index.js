document.addEventListener('DOMContentLoaded', function() {
    const subscribeForm = document.querySelector('.subscribe-form');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent form submission
            alert('Thank you for the subscription!!!'); // Show alert
        });
    }
});
