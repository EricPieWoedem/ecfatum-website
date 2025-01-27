// Select elements
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

// Toggle the menu when the hamburger is clicked
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active'); // Change hamburger to "X"
  navMenu.classList.toggle('open'); // Slide menu in/out
});

// Close the menu when clicking on a link
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
  });
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
  const isClickInsideMenu = navMenu.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    hamburger.classList.remove('active');
    navMenu.classList.remove('open');
  }
});

let currentIndex = 0;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;
const textArray = [
  'Smart Solutions for Smart Problems',
  'Smart Solutions for Smart Problems',
  'Smart Solutions for Smart Problems',
  'Smart Solutions for Smart Problems'
]; // Array with your slogans

const textElement = document.querySelector('.hero-text'); // Get the hero text element

function showNextSlide() {
  // Fade out the current slide
  slides[currentIndex].style.opacity = 0;
  slides[currentIndex].style.visibility = 'hidden';

  // Update the current index
  currentIndex = (currentIndex + 1) % totalSlides;

  // Fade in the next slide
  slides[currentIndex].style.opacity = 1;
  slides[currentIndex].style.visibility = 'visible';

  // Update the text content
  textElement.textContent = textArray[currentIndex];
}

// Start the image and text rotation every 5 seconds
setInterval(showNextSlide, 5000);

// Show the first slide and text immediately
slides[currentIndex].style.opacity = 1;
slides[currentIndex].style.visibility = 'visible';
textElement.textContent = textArray[currentIndex]; // Set initial text

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
    }
  });
});

document.querySelectorAll('[data-animate]').forEach(el => {
  observer.observe(el);
});

// Back to top button
const backToTop = document.getElementById('backToTop');

// Show/hide the "Back to Top" button with animation
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('visible'); // Add the class for smooth showing
  } else {
    backToTop.classList.remove('visible'); // Remove the class to hide
  }
});

// Scroll back to the top when the button is clicked
backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



// carousel
document.addEventListener("DOMContentLoaded", function () {
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-slide");
  const indicators = document.querySelectorAll(".carousel-indicator");

  let currentIndex = 0;

  // Function to get the width of a slide, can change dynamically
  function getSlideWidth() {
    return slides[0].offsetWidth;
  }

  // Update the carousel position based on the current index
  function updateCarousel() {
    const slideWidth = getSlideWidth(); // Get updated width of a slide
    track.style.transform = `translateX(-${currentIndex * slideWidth}px)`; // Move the track
    updateIndicators();
  }

  // Update the active indicator based on the current index
  function updateIndicators() {
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("current", index === currentIndex);
    });
  }

  // Handle the "previous" button click
  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = slides.length - 1; // Loop back to the last slide
    }
    updateCarousel();
  });

  // Handle the "next" button click
  nextBtn.addEventListener("click", function () {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop back to the first slide
    }
    updateCarousel();
  });

  // Handle indicator clicks to jump to the specific slide
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", function () {
      currentIndex = index;
      updateCarousel();
    });
  });

  // Handle window resize to adjust the carousel on different screen sizes
  window.addEventListener("resize", function () {
    updateCarousel(); // Recalculate position and slide width
  });

  // Initial setup
  updateCarousel();

  // Auto-slide functionality
  let autoSlideInterval = setInterval(function () {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loop back to the first slide
    }
    updateCarousel();
  }, 5000); // 5000 ms = 5 seconds

  // Pause auto-slide on user interaction (e.g., hovering over the carousel)
  const carousel = document.querySelector('.carousel');
  carousel.addEventListener('mouseenter', function () {
    clearInterval(autoSlideInterval); // Pause auto-slide when mouse enters the carousel
  });

  // Resume auto-slide when mouse leaves the carousel
  carousel.addEventListener('mouseleave', function () {
    autoSlideInterval = setInterval(function () {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0; // Loop back to the first slide
      }
      updateCarousel();
    }, 5000); // 5 seconds auto-slide interval
  });
});
