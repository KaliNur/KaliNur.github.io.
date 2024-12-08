// Scroll-to-Top Button
const scrollToTopButton = document.getElementById('scrollToTop');
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Theme Toggle Button
const toggleThemeButton = document.createElement('button');
toggleThemeButton.id = 'toggleTheme';
toggleThemeButton.innerText = 'Toggle Theme';
document.body.appendChild(toggleThemeButton);

let isDarkMode = false;
toggleThemeButton.addEventListener('click', () => {
    document.body.style.backgroundColor = isDarkMode ? '#f4f4f4' : '#333';
    document.body.style.color = isDarkMode ? '#333' : '#fff';
    isDarkMode = !isDarkMode;
});

// SVG Interactivity
const svgController = {
    circle: document.getElementById('interactive-circle'),
    text: document.getElementById('svg-text'),

    changeCircleColor: function (color) {
        this.circle.setAttribute('fill', color);
    },

    updateText: function (message) {
        this.text.textContent = message;
    },
};

// Add Interaction to SVG
svgController.circle.addEventListener('click', () => {
    svgController.changeCircleColor('orange');
    svgController.updateText('Clicked!');
});

// Save Contact Form Data
document.getElementById('saveButton').addEventListener('click', () => {
    const contactForm = document.getElementById('contactForm');
    const formData = new FormData(contactForm);

    // Create a JavaScript object
    const userData = {};
    formData.forEach((value, key) => {
        userData[key] = key.startsWith('attribute') ? parseFloat(value) : value; // Convert numeric fields
    });

    // Display in the browser console
    console.log(userData);

    // Calculate Average of Numeric Attributes
    const numericFields = Object.keys(userData).filter(key => key.startsWith('attribute'));
    const average = numericFields.reduce((sum, key) => sum + userData[key], 0) / numericFields.length;

    // Display Results on the Website
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `
        <p>Name: ${userData.name}</p>
        <p>Surname: ${userData.surname}</p>
        <p>Email: ${userData.email}</p>
        <p>Phone: ${userData.phone}</p>
        <p>Address: ${userData.address}</p>
        <p>Attribute 1: ${userData.attribute1}</p>
        <p>Attribute 2: ${userData.attribute2}</p>
        <p>Attribute 3: ${userData.attribute3}</p>
        <p>Attribute 4: ${userData.attribute4}</p>
        <p>Attribute 5: ${userData.attribute5}</p>
        <p>${userData.name} ${userData.surname} (${userData.email}): Average = ${average.toFixed(2)}</p>
    `;
});


