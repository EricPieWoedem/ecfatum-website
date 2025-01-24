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
