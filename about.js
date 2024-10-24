document.addEventListener('DOMContentLoaded', function() {
    // Handle Contact Us form submission
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent actual form submission

            // Get form field values
            const nameField = document.getElementById('name');
            const emailField = document.getElementById('email');
            const phoneField = document.getElementById('phone');
            const feedbackField = document.getElementById('feedback');

            // Array to collect missing fields
            let missingFields = [];

            // Check if each field is filled
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

            // If there are missing fields, show a custom alert
            if (missingFields.length > 0) {
                alert(`Please fill out the following fields: ${missingFields.join(', ')}`);
                // Trigger native tooltip prompts for incomplete fields
                if (!nameField.checkValidity()) nameField.reportValidity();
                if (!emailField.checkValidity()) emailField.reportValidity();
                if (!phoneField.checkValidity()) phoneField.reportValidity();
                if (!feedbackField.checkValidity()) feedbackField.reportValidity();
            } else {
                // Show a success alert if all fields are filled
                const name = nameField.value.trim() || 'Guest';
                alert(`Thank you for your message, ${name}!`);

                // Clear the form fields
                contactForm.reset();
            }
        });
    }
});
