// Smooth Scrolling for Internal Links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// // Mobile Menu Toggle for Small Screens
// const navToggle = document.createElement('button');
// navToggle.className = 'nav-toggle';
// navToggle.innerHTML = '☰';
// document.querySelector('header').appendChild(navToggle);

// const navLinks = document.querySelector('.nav-links');
// navToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('show');
// });

// Interactive Condition Boxes (Expandable Text)
const conditionBoxes = document.querySelectorAll('.condition-box');
conditionBoxes.forEach(box => {
    const originalText = box.querySelector('p').innerText; // Capture original description

    box.addEventListener('click', () => {
        const expandedText = originalText + " Learn more about this mental health condition and get professional support.";
        const paragraph = box.querySelector('p');
        paragraph.innerText = expandedText;

        setTimeout(() => {
            paragraph.innerText = originalText; // Reset text after 5 seconds
        }, 5000);
    });
});


// Get the toggle button and navigation menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

// Add an event listener to toggle the navigation menu visibility
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show'); // Toggle the 'show' class
});
// Function to toggle the navigation menu on mobile screens
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
// Get the mobile toggle button and the mobile menu
const mobileToggle = document.getElementById('mobile-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Add event listener to the mobile toggle to show/hide the mobile menu
mobileToggle.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
});
