document.addEventListener('DOMContentLoaded', function() {
    // subscription
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); 

            // Get values
            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            const phoneField = document.getElementById('phone');
            const feedbackField = document.getElementById('feedback');

            // Missing fields array
            let missingFields = [];

            // Check filled
            if (!nameField.value.trim()) {
                missingFields.push('Name');
            }
            if (!emailField.value.trim()) {
                missingFields.push('Email');
            }
            if (!phoneField.value.trim()) {
                missingFields.push('Phone');
            }
            if (!feedbackField.value.trim()) {
                missingFields.push('Feedback');
            }

            // Alert for missing fields
            if (missingFields.length > 0) {
                alert(`Please fill out the following fields: ${missingFields.join(', ')}`);
                if (!nameField.checkValidity()) nameField.reportValidity();
                if (!emailField.checkValidity()) emailField.reportValidity();
                if (!phoneField.checkValidity()) phoneField.reportValidity();
                if (!feedbackField.checkValidity()) feedbackField.reportValidity();
            } else {
                // Alert for success 
                const name = nameField.value.trim() || 'Guest';
                alert(`Thank you for your message, ${name}!`);

                contactForm.reset();
            }
        });
    }
});
