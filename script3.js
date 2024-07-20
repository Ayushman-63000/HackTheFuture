document.addEventListener('DOMContentLoaded', function() {
    // Get references to the buttons and popups
    const sellWasteOption = document.getElementById('sellWasteOption');
    const buyWasteOption = document.getElementById('buyWasteOption');
    const sellWastePopup = document.getElementById('sellWastePopup');
    const buyWastePopup = document.getElementById('buyWastePopup');
    const closeSellPopup = document.getElementById('closeSellPopup');
    const closeBuyPopup = document.getElementById('closeBuyPopup');
    const addMaterialButton = document.getElementById('addMaterial');
    const materialsContainer = document.getElementById('materialsContainer');

    // Function to open the Sell Waste Products popup
    sellWasteOption.onclick = function() {
        sellWastePopup.style.display = 'block';
    };

    // Function to open the Buy Finished Products popup
    buyWasteOption.onclick = function() {
        buyWastePopup.style.display = 'block';
    };

    // Function to close the Sell Waste Products popup
    closeSellPopup.onclick = function() {
        sellWastePopup.style.display = 'none';
    };

    // Function to close the Buy Finished Products popup
    closeBuyPopup.onclick = function() {
        buyWastePopup.style.display = 'none';
    };

    // Close popups when clicking outside of them
    window.onclick = function(event) {
        if (event.target === sellWastePopup) {
            sellWastePopup.style.display = 'none';
        }
        if (event.target === buyWastePopup) {
            buyWastePopup.style.display = 'none';
        }
    };

    // Function to add another material entry
    addMaterialButton.onclick = function() {
        const newMaterialEntry = document.createElement('div');
        newMaterialEntry.classList.add('material-entry');

        newMaterialEntry.innerHTML = `
            <select class="material-select" required>
                <option value="">--Select Material--</option>
                <option value="plastic">Plastic - ₹15 per kg</option>
                <option value="paper">Paper - ₹10 per kg</option>
                <option value="biomass">Biomass - ₹20 per kg</option>
                <option value="metal">Metal - ₹55 per kg</option>
                <option value="glass">Glass - ₹25 per kg</option>
            </select>
            <input type="number" class="material-quantity" placeholder="Quantity (kg)" min="1" required>
            <button type="button" class="remove-material">Remove</button>
        `;

        // Add event listener to the remove button
        newMaterialEntry.querySelector('.remove-material').onclick = function() {
            materialsContainer.removeChild(newMaterialEntry);
        };

        // Append the new material entry to the materials container
        materialsContainer.appendChild(newMaterialEntry);
    };
});