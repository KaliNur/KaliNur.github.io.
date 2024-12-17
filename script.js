// Get the DOM elements
const tempSlider = document.getElementById('temp-slider');
const tempDisplay = document.getElementById('temp-display');
const thermoLevel = document.getElementById('thermo-level');

// Update thermometer and display temperature
tempSlider.addEventListener('input', function() {
    const temperature = tempSlider.value;
    tempDisplay.textContent = `${temperature}°C`;

    // Update thermometer level based on temperature
    const levelHeight = (temperature / 100) * 200; // Max height is 200px
    thermoLevel.style.height = `${levelHeight}px`;

    // Change color of thermometer based on temperature
    if (temperature < 20) {
        thermoLevel.style.backgroundColor = '#1e90ff'; // Blue for cold
    } else if (temperature >= 20 && temperature <= 30) {
        thermoLevel.style.backgroundColor = '#ffb300'; // Yellow for warm
    } else {
        thermoLevel.style.backgroundColor = '#ff4500'; // Red for hot
    }
});
