// Sample background images for the hero section
const backgroundImages = [
    'hero.jpg',
    'beach.jpg',
    'mountains.jpg'
];

document.addEventListener('DOMContentLoaded', function () {
    const heroSection = document.querySelector('.hero');
    const changeBackgroundButton = document.querySelector('.change-bg-button');

    let currentBackgroundIndex = 0;

    // Function to change the background image
    function changeBackground() {
        currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
        const newBackgroundImage = backgroundImages[currentBackgroundIndex];
        heroSection.style.backgroundImage = `url('${newBackgroundImage}')`;
    }

    // Event listener for the button
    changeBackgroundButton.addEventListener('click', changeBackground);
});
