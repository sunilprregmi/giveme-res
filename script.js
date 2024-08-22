// JavaScript for slider functionality
let currentIndex = 0;
const images = document.querySelectorAll('.slider-container img');
const totalImages = images.length;

// Initialize by showing the first image
images[currentIndex].style.transform = `translateX(0)`;
images[currentIndex].style.opacity = 1;

function showNextImage() {
    const prevIndex = currentIndex;
    currentIndex = (currentIndex + 1) % totalImages;
    
    // Reset all images' positions and opacity
    images.forEach((img, index) => {
        img.style.transform = `translateX(100%)`;
        img.style.opacity = 0;
    });
    
    // Move the current image to the viewport and fade in
    images[currentIndex].style.transform = `translateX(0)`;
    images[currentIndex].style.opacity = 1;
    
    // Move the previous image to the left and fade out
    images[prevIndex].style.transform = `translateX(-100%)`;
    images[prevIndex].style.opacity = 0;
}

setInterval(showNextImage, 4000); // 2 seconds for transition + 2 seconds pause
