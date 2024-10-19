// port.js
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const firstName = document.getElementById('firstName').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;

        // Basic validation (You can add more complex validation here)
        if (firstName && email && phone) {
            // Print thank you message with the user's first name
            alert(`Thank you, ${firstName}, for submitting the form!`);
        } else {
            alert("Please fill out all required fields.");
        }
    });
});


