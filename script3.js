// Get elements
const giveWasteOption = document.getElementById('giveWasteOption');
const popup = document.getElementById('pickupFormPopup');
const closePopup = document.getElementById('closePopup');
const pickupForm = document.getElementById('pickupForm');
const confirmationPopup = document.getElementById('confirmationPopup');
const closeConfirmationPopup = document.getElementById('closeConfirmationPopup');
const confirmationMessage = document.getElementById('confirmationMessage');

// Show the pickup form popup when the option is clicked
giveWasteOption.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    popup.style.display = 'block'; // Show the pickup form popup
});

// Close the pickup form popup when the 'x' is clicked
closePopup.addEventListener('click', function() {
    popup.style.display = 'none'; // Hide the pickup form popup
});

// Close the pickup form popup when clicking outside of the popup content
window.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.style.display = 'none'; // Hide the pickup form popup
    }
});

// Handle form submission
pickupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    const location = document.getElementById('location').value;
    const date = document.getElementById('date').value;

    // Display confirmation message in the confirmation popup
    confirmationMessage.textContent = `Pickup scheduled at ${location} on ${date}.`;
    confirmationPopup.style.display = 'block'; // Show the confirmation popup

    // Hide the pickup form popup
    popup.style.display = 'none';

    // Reset the form
    pickupForm.reset();
});

// Close the confirmation popup when the 'x' is clicked
closeConfirmationPopup.addEventListener('click', function() {
    confirmationPopup.style.display = 'none'; // Hide the confirmation popup
});

// Close the confirmation popup when clicking outside of the popup content
window.addEventListener('click', function(event) {
    if (event.target === confirmationPopup) {
        confirmationPopup.style.display = 'none'; // Hide the confirmation popup
    }
});